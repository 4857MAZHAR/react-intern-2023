import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const CheckInIcon = ({ width, height, color }) => (
 <Svg width={width} height={height} viewBox="0 0 23.114 32.655">
  <G id="Group_127" data-name="Group 127" transform="translate(1 1)">
   <Path
    id="Icon_material-location-on"
    data-name="Icon material-location-on"
    d="M18.057,3A10.549,10.549,0,0,0,7.5,13.557c0,7.918,10.557,19.606,10.557,19.606S28.614,21.475,28.614,13.557A10.549,10.549,0,0,0,18.057,3Zm0,14.327a3.77,3.77,0,1,1,3.77-3.77A3.772,3.772,0,0,1,18.057,17.327Z"
    transform="translate(-7.5 -3)"
    fill="none"
    stroke={color}
    strokeWidth="2"
   />
  </G>
 </Svg>
);

export default CheckInIcon;
