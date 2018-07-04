<template>
  <div>
    <Header/>
    <google-map
      :center="position"
      :zoom="11"
      id="map"
      :options="{disableDefaultUI:true}"
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
