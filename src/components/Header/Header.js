import React, { Component } from "react";
import { Header, withTheme } from "react-native-elements";
import { Dimensions, View, ImageBackground, Platform } from "react-native";
import color from "color";
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const vr = require("../../../assets/img/gili-labak.jpg");

const _Header = props => {
  const { statusBarProps, containerStyle, children, ...rest } = props;
  var _containerStyle = Object.assign({}, containerStyle, { height: 56, paddingTop: 0 })
  if (statusBarProps && statusBarProps.hidden === true)
    _containerStyle = containerStyle;
  return (<Header statusBarProps={statusBarProps} containerStyle={_containerStyle} {...rest}>{children}</Header>)
}

_Header.propTypes = Header.propTypes;

export default _Header;

const window = Dimensions.get("window");
const headerHeight = Platform.select({
  android: 56,
  default: 44,
});

const CurvedBottomHeader = ({ children, statusBarProps, placement, containerStyle, leftComponent, centerComponent, rightComponent, height, theme, ...rest }) => {
  const _height = headerHeight + (height || 30);
  const svgBg = containerStyle !== undefined ? containerStyle.backgroundColor : theme.colors.primary;
  var _containerStyle = {};
  _containerStyle = Object.assign({}, containerStyle);
  _containerStyle.backgroundColor = 'transparent';
  _containerStyle.borderBottomColor = 'transparent';
  _containerStyle.borderBottomWidth = 0;
  var _statusBarProps = {};
  _statusBarProps = Object.assign({}, statusBarProps);
  _statusBarProps.backgroundColor = statusBarProps !== undefined ? (statusBarProps.backgroundColor || color(svgBg).darken(0.2).hex()) : color(svgBg).darken(0.2).hex();

  const curved = (<Svg height={_height} width={window.width}>
    <Path
      d={`M0 0 V56 Q${window.width / 2} ${_height + 5} ${window.width} 56 V0 H0`}
      fill={svgBg}
      stroke="none"
    />
  </Svg>);
  return (
    <View style={{ position: 'relative', width: window.width, height: _height }}>
      <View style={{ position: 'absolute', left: 0, top: 0 }}>
        {curved}
      </View>
      <_Header
        statusBarProps={_statusBarProps}
        placement={placement}
        containerStyle={_containerStyle}
        leftComponent={leftComponent}
        centerComponent={centerComponent}
        rightComponent={rightComponent}
        {...rest}
      >
        {children}
      </_Header>
    </View>
  );
};
const _CurvedBottomHeader = withTheme(CurvedBottomHeader);
export { _CurvedBottomHeader as CurvedBottomHeader };