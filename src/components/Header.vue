<template lang="pug">
  div#header__container
    #header__title CompsTool
    .divider
    .inp__label Find Comps to:
    VueGoogleAutocomplete.inp.inp__long(
      ref="address",
      id="place",
      classname="form-control",
      @placechanged="updateMap",
      country="us"
      v-if="enabled"
      placeholder="Enter an Address"
    )
    .divider
    .inp__label Price is:
    input.inp(placeholder="$$$", :options="[]", :searchable="false", value="10000", v-model="a.price")
    .inp__label ±
    input.inp(placeholder="$$$", :options="[]", :searchable="false", value="10000", v-model="a.pDelta")
    .divider
    .inp__label Distance within
    input.inp(placeholder="n miles", :options="[]", :searchable="false", value="1", v-model="a.radius")
    .inp__label Miles
</template>
<script>
import Multiselect from 'vue-multiselect'
import VueGoogleAutocomplete from 'vue-google-autocomplete'
import * as VueGoogleMaps from 'vue2-google-maps';

export default {
  name: 'header',
  components: {
    Multiselect,
    VueGoogleAutocomplete
  },
  data () {
    VueGoogleMaps.loaded.then(() => {
      window.google = VueGoogleMaps.gmapApi();

google.maps.InfoWindowZ=function(opts){
          var GM = google.maps,
              GE = GM.event,
              iw = new GM.InfoWindow(),
              ce;

             if(!GM.InfoWindowZZ){
                GM.InfoWindowZZ=Number(GM.Marker.MAX_ZINDEX);
             }

             GE.addListener(iw,'content_changed',function(){
               if(typeof this.getContent()=='string'){
                  var n=document.createElement('div');
                      n.innerHTML=this.getContent();
                      this.setContent(n);
                      return;
               }
               GE.addListener(this,'domready',
                               function(){
                                var _this=this;
                                _this.setZIndex(++GM.InfoWindowZZ);
                                if(ce){
                                  GM.event.removeListener(ce);
                                }
                                ce=GE.addDomListener(this.getContent().parentNode
                                                  .parentNode.parentNode,'click',
                                                  function(){
                                                  _this.setZIndex(++GM.InfoWindowZZ);
                                });
                              })
             });

             if(opts)iw.setOptions(opts);
             return iw;
        }
      this.enabled = true;
    });

    return {
      a: {
        price: 0,
        pDelta: 0,
        distance: 0
      },
      enabled: false
    }
  },
  methods: {
    updateMap (addressData, placeResultData, id) {
      this.address = addressData;
      this.$emit('update', {
        lat: addressData.latitude,
        lng: addressData.longitude
      })
    }
  },
  watch: {
    a: {
      handler () {
        this.$emit('input', this.a);
      },
      deep: true
    }
  }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Nunito|Pacifico');
  #header__title {
    font-family: Pacifico;
    font-size: 20px;
    font-weight: 100;
    float: left;
    color: #FFF;
    margin: 5px 30px;
  }
  #header__container {
    z-index:100;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 50px;
    padding: 0px;
    box-sizing: border-box;
    background-color:rgba(18, 119, 225);
    box-shadow: 0px 2px 2px rgba(0,0,0,0.3);

  }
  .inp {
    padding: 10px;
    font-family: Nunito;
    font-size: 13px;
    outline: 0;
    border: 0;
    border-radius: 3px;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.3);
    margin: 5px 15px;
    float: left;
    background-color: #FFF;
    width: 70px;
    text-align: center;
  }
  .inp.inp__long {
    width: 300px;
  }
  .inp__label {
    padding: 10px;
    margin: 5px 0px;
    float: left;
    color: #FFF;
    font-family: Nunito;
    font-size: 13px;
  }
  .divider {
    height: 100%;
    background-color: rgba(255,255,255,0.2);
    width: 1px;
    margin: 0 10px;
    float: left;
  }
</style>
