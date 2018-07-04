<template lang="pug">
  div#header
    input.inp__long(placeholder="Enter an Address")
    input.inp__long(placeholder="Enter an Address")
    input.inp__long(placeholder="Enter an Address")
</template>
<script>
export default {
  name: 'header'
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
    background-color: rgba(0,0,0,0.4);
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
  }
</style>
