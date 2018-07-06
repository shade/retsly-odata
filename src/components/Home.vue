<template lang="pug">
  div
    Header(@update="update", v-model="selected")
    google-map(
      :center="position",
      :zoom="11",
      id="map",
      ref="map"
    )
</template>

<script>
  import Header from './Header.vue';

  export default {
    name: 'hello-world',
    components: {
      Header
    },
    data () {
      return {
        lastUpdate: null,
        queryTimeout: null,
        mapObj: null,
        markers: [],
        position: {lat:33.4484, lng:-112.0740},
        selected: {
          radius: 1,
          price: 0,
          pDelta: 0,
        }
      }
    },
    methods: {
      update (loc) {
        // Clear the markers if the position has changed.
        if (loc.lat !== this.position.lat || loc.lng !== this.position.lng) {
          this.clearMarkers()
        }

        this.position = loc

        clearTimeout(this.queryTimeout)

        this.queryTimeout = setTimeout(() => {
          this.lastUpdate = Date.now()
          // Update the housing markers and fetch new ones.
          this.query(this.lastUpdate, 0);

          // Update the map
          this.$refs.map.$mapPromise.then((map) => {
            map.panTo(loc)
            map.setZoom(16)
          })
        }, 1000)
      },
      clearMarkers () {
        this.markers.forEach(marker => {
          marker.setMap(null)
        })
      },
      updateMarkers (bundle) {
        bundle.forEach(item => {
          const price = item.ClosePrice || 0
          const priceStr = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

          const lat = item.Coordinates[1]
          const lng = item.Coordinates[0]

          let info = new google.maps.InfoWindowZ({
            position: new google.maps.LatLng(lat, lng),
            content: priceStr
          })

          info.setMap(this.$refs.map.$mapObject)
          this.markers.push(info)
        })
      },
      query (time, offset) {
        let {radius, price, pDelta} = this.selected
        const loc = this.position

        price = parseInt(price)
        pDelta = parseInt(pDelta)
        offset = offset || 0

        // Gaurd against fetching after change in address
        if (this.lastUpdate !== time) {
          return
        }

        this.$http.get([
          'https://rets.io/api/v2/armls/listings',
          '?access_token=71356a24f85ff5b0d977ba18bf56f2ff',
          `&near=${loc.lng},${loc.lat}&radius=${radius}mi`,
          `&ClosePrice[gt]=${price-pDelta}`,
          `&ClosePrice[lt]=${price+pDelta}`,
          `&offset=${offset}`
        ].join(''))
          .then(resp => {
            const {body} = resp
            this.updateMarkers(body.bundle);

            // Keep finding stuff if there's more to find.
            if ((offset + body.bundle.length) !== body.total) {
              this.query(time, body.bundle.length + offset)
            }
          })
      }
    },
    watch: {
      selected: {
        handler () {
          this.update(this.position);
        },
        deep: true
      }
    }
  }
</script>
<style>
  body {
    height: 100%;
    width: 100%;
  }
  #map {
    width: 100%;
    height: calc(100% - 50px);
    position: absolute;
    top: 50px;
    left: 0px;
  }
</style>
