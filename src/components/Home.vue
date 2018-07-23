<template lang="pug">
  div
    map-view
    listing-view
</template>
<script>
  import ListingView from './ListingView'
  import MapView from './MapView'

  export default {
    name: 'home',
    components: {
      ListingView,
      MapView
    }
  }
</script>
