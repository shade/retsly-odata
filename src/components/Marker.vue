<template>
  <google-map
    :center="{lat:34, lng:-111}"
    :zoom="11"
    style="width: 1000px; height: 1000px"
  ></google-map>
</template>

<script>
  export default {
    name: 'hello-world',
    data () {
      return {}
    }
  }
</script>
