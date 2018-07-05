<template>
  <div>
    <Header @update="update"/>
    <google-map
      :center="position"
      :zoom="11"
      id="map"
      :options="{disableDefaultUI:true}"
      ref="map"
    >
      <google-marker
        :position="position"
        :clickable="true"
        :draggable="true"
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
        position: {lat:33.4484, lng:-112.0740}
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
      query () {

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
