<template>
  <div id="map"></div>
</template>

<script>
import Map from 'ol/Map'
import View from 'ol/View'
import { register } from 'ol/proj/proj4'
import TileLayer from 'ol/layer/Tile'
import TileGrid from 'ol/tilegrid/TileGrid'
import Projection from 'ol/proj/Projection'
import XYZ from 'ol/source/XYZ'
import proj4 from 'proj4'

proj4.defs(
  'EPSG:5186',
  '+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=600000 +ellps=GRS80 +units=m +no_defs'
)
register(proj4)

export default {
  name: 'Map',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      map: null
    }
  },
  created() {},
  mounted() {
    const resolutions = [
      2048,
      1024,
      512,
      256,
      128,
      64,
      32,
      16,
      8,
      4,
      2,
      1,
      0.5,
      0.25
    ]
    const extent = [-30000, -60000, 494288, 988576]

    const projection = new Projection({
      code: 'EPSG:5181',
      extent: extent,
      units: 'm'
    })

    const daumLayer = new TileLayer({
      title: 'Daum Street Map',
      visible: true,
      type: 'base',
      source: new XYZ({
        projection: projection,
        tileSize: 256,
        minZoom: 0,
        maxZoom: resolutions.length - 1,
        tileGrid: new TileGrid({
          origin: [extent[0], extent[1]],
          resolutions: resolutions
        }),
        tileUrlFunction: function(tileCoord, pixelRatio, projection) {
          if (tileCoord) {
            const s = Math.floor(Math.random() * 4)
            const z = resolutions.length - tileCoord[0]
            const x = tileCoord[1]
            const y = tileCoord[2]
            return `http://map${s}.daumcdn.net/map_2d_hd/1809emg/L${z}/${y}/${x}.png`
          }
        }
      })
    })

    const map = new Map({
      layers: [daumLayer],
      target: 'map',
      view: new View({
        projection: projection,
        extent: extent,
        resolutions: resolutions,
        maxResolution: resolutions[0],
        zoomFactor: 1,
        center: [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2],
        zoom: 0
      })
    })
    this.map = map
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
