<template>
  <div>
    <Header @update="update" v-model="selected"/>
    <google-map
      :center="position"
      :zoom="11"
      id="map"
      ref="map"
    >
      <google-marker
        :position="position"
        :clickable="true"
        :draggable="true"
      />

      <google-marker
        v-bind:key="index"
        v-for="(marker, index) in markers"
        :label="marker.cash.toString()"
        :position="marker"
      />
    </google-map>
  </div>
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
      query (loc) {
        const {distance, price, pDelta} = this.selected;
        this.$http.get([
          'https://rets.io/api/v2/armls/listings',
          '?access_token=71356a24f85ff5b0d977ba18bf56f2ff',
          `&near=${loc.lng},${loc.lat}&radius=${distance}mi`,
          `&ClosePrice[gt]=${price-pDelta}`,
          `&ClosePrice[lt]=${price+pDelta}`
        ].join(''))
          .then(a => this.markers = a.body.bundle.map(a => ({
            lat: a.Coordinates[1],
            lng: a.Coordinates[0],
            cash: a.ClosePrice
          })));
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
    width: 100%; height: 100%;position: absolute;top:0px;left:0px;
  }
</style>
