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
    mounted () {
      this.mapObj = map.__vue__.$mapObject.set
    },
    data () {
      return {
        mapObj: null,
        markers: [],
        position: {lat:33.4484, lng:-112.0740},
        selected: {
          radius: 0,
          price: 0,
          pDelta: 0
        }
      }
    },
    methods: {
      update (loc) {
        // Update the housing markers and fetch new ones.
        this.query(loc);
        this.position = loc;

        // Update the map
        this.$refs.map.$mapPromise.then((map) => {
          map.panTo(loc)
          map.setZoom(18)
        })
      },
      updateMarkers (bundle) {
        bundle.slice(0,1).forEach(item => {
          const price = item.ClosePrice || 0
          const priceStr = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

          ({
            full: item,
            lat: item.Coordinates[0],
            lng: item.Coordinates[1],
            price: price,
            contentStr: priceStr
          })
        })
      },
      query (loc) {
        let {distance, price, pDelta} = this.selected

        price = parseInt(price)
        pDelta = parseInt(pDelta)

        this.$http.get([
          'https://rets.io/api/v2/armls/listings',
          '?access_token=71356a24f85ff5b0d977ba18bf56f2ff',
          `&near=${loc.lng},${loc.lat}&radius=${distance}mi`,
          `&ClosePrice[gt]=${price-pDelta}`,
          `&ClosePrice[lt]=${price+pDelta}`
        ].join(''))
          .then(a => {
            this.updateMarkers(a.body.bundle);
          })
      }
    },
    watch: {
      selected: {
        handler () {
          this.query(this.position)
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
