import React, { Component } from "react";
import { Header, withTheme } from "react-native-elements";
import { Dimensions, View, ImageBackground } from "react-native";
import Svg, { Circle } from "react-native-svg";

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

const CurvedBottomHeader = props => {
  const { children, ...rest } = props;
  return (<View style={{
    alignSelf: 'center',
    width: window.width,
    overflow: 'hidden',
    height: 100
  }}>
    <ImageBackground style={{
      backgroundColor: 'red',
      borderRadius: window.width,
      width: window.width * 2,
      height: window.width * 2,
      marginLeft: -(window.width / 2),
      position: 'absolute',
      bottom: 0,
      overflow: 'hidden'
    }}
      source={vr} />
  </View>);
};

export { CurvedBottomHeader };