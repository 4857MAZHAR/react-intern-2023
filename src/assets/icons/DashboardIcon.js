import React from 'react';
import Svg, { Path } from 'react-native-svg';

const DashboardIcon = ({ width, height, color }) => (
  <Svg width={width} height={height} viewBox="0 0 20 20">
    <Path
      id="Icon_material-dashboard"
      data-name="Icon material-dashboard"
      d="M4.5,15.611h8.889V4.5H4.5Zm0,8.889h8.889V17.833H4.5Zm11.111,0H24.5V13.389H15.611Zm0-20v6.667H24.5V4.5Z"
      transform="translate(-4.5 -4.5)"
      fill={color}
    />
  </Svg>
);

export default DashboardIcon;
