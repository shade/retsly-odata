<template lang="pug">
  div#header
    input.inp__long(placeholder="Enter a Street Address")
    div.inp__label Price within ±
    input.inp__long(placeholder="$$$", :options="[]", :searchable="false")
    div.inp__label Distance within ±
    input.inp__long(placeholder="$$$", :options="[]", :searchable="false")
</template>
<script>
import Multiselect from 'vue-multiselect'
export default {
  name: 'header',
  components: {
    Multiselect
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Nunito');
  #header {
    z-index:100;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 80px;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(0,0,0,0.6);
  }
  .inp__long {
    padding: 10px;
    font-family: Nunito;
    font-size: 13px;
    outline: 0;
    border: 0;
    border-radius: 3px;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.3);
    margin: 0 15px;
    float: left;
    background-color: #FFF;
  }
  .inp__label {
    padding: 10px;
    margin: 0 15px;
    float: left;
    color: #FFF;
    font-family: Nunito;
    font-size: 13px;
  }
</style>
