<template lang="pug">
  div
    google-map(
      id="map",
      :center="center",
      :zoom="zoom"
    )
</template>
<script>
export default {
  name: 'map-view',
  data () {
    return {
      center: {
        lat: 49.275201,
        lng: -123.120775
      },
      zoom: 18
    }
  }
}
</script>
<style>
  #map {
    height: 100%;
    width: 50%;
    position: fixed;
    top: 0px;
    left: 0px;
  }
</style>

