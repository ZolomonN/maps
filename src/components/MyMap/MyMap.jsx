import React from 'react';
import { connect } from 'react-redux';
import {   Clusterer, GeoObject, Map, YMaps } from 'react-yandex-maps';

const MyMap = (props) => {
return <YMaps>
    <div>
      <Map  width='100vw' height='100vh' 
      defaultState={{ center: [55.741009, 52.407031],
        zoom: 12,
        checkZoomRange: true,
        controls: ['zoomControl'] }}
        modules={['control.ZoomControl']}
       >
          {(props.coordinatesArr.length !==0) &&
          <Clusterer hasBaloon={true}>
            {props.coordinatesArr.map(el => 
            <GeoObject geometry={{type: 'Point',
             coordinates: [el.lat, el.long]}}
             modules={['geoObject.addon.balloon']}
             properties={{
              balloonContentBody: `${el.name}`,
            }}
             />)}
            </Clusterer>}
      </Map>
    </div>
  </YMaps>}

const mapStateToProps = (store) => {
  return {
    coordinatesArr: store.coordinates.coordinatesArr
  }
}

export default connect(mapStateToProps, null)(MyMap);
