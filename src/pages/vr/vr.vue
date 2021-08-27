<template>
  <div id="viewer"></div>
</template>

<script>
import {Viewer} from 'photo-sphere-viewer'
import MarkersPlugin from 'photo-sphere-viewer/dist/plugins/markers'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'
import 'photo-sphere-viewer/dist/plugins/markers.css';

export default {
  data(){
    return{
      viewer:'',
      imgurl1:require('../../assets/img/scene/scene.jpeg'),
    }
  },
  mounted(){
    this.viewer = new Viewer({
      container:document.querySelector('#viewer'),
      panorama:this.imgurl1,
      size:{
        width: '100vw',
        height: '100vh',
      },
      plugins: [
        [MarkersPlugin, {
          markers: [
            {
              id:'circle',
              tooltip:'A circle of radius 30',
              circle:30,
              svgStyle : {
                fill:'rgba(255,255,0,0.3)',
                stroke:'yellow',
                strokeWidth:'2px',
              },
              longitude: -1.5,
              latitude: -0.28,
              anchor: 'center right',
            }
          ],
        }],
      ],
    });

    const markersPlugin = this.viewer.getPlugin(MarkersPlugin);

    markersPlugin.on('select-marker', (e, marker) => {
      this.viewer.animate({
        longitude: marker.config.longitude,
        latitude: marker.config.latitude,
        zoom: 100,
        speed: '-2rpm',
      }).then(() =>
          this.viewer.setPanorama(
              this.imgurl2
          ).then(() =>
                  markersPlugin.updateMarker({
                    id: marker.id,
                    longitude: -1.8,
                    latitude: -0.28,
                  }),
              this.viewer.animate({
                zoom: 50,
                speed: '2rpm',
              }).then(() =>
                      this.imgurl2 = this.imgurl3,
                  console.log("继续操作")
              )
          )
      )
    });
  }
}
</script>

<style>
.page_vr {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>