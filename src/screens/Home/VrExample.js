import React, { Component } from "react";
import { PanoramaView } from "@lightbase/react-native-panorama-view";
import { View, Dimensions, SafeAreaView, Image, ToastAndroid } from "react-native";
// import { Header } from "react-native-elements";
import { Card, Icon, Button } from "react-native-elements";
import { CurvedBottomHeader } from "../../components";
import LinearGradient from "react-native-linear-gradient";
import NavigationBar from 'react-native-navbar-color'

const width = Dimensions.get("window").width;
const vr = require("../../../assets/img/vr.png");

export default class VrExample extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    NavigationBar.setColor('#199FF9');
  }

  onMenuClick = () => {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  };

  render() {
    const url = Image.resolveAssetSource(vr);

    return (
      <SafeAreaView>
        <CurvedBottomHeader
          statusBarProps={{ barStyle: "light-content", hidden: false, showHideTransition: true, animated: true }}
          placement="center"
          containerStyle={{ backgroundColor: 'rgba(25,159,249,1)' }}
          leftComponent={<Button type="solid" onPress={this.onMenuClick.bind(this)} ViewComponent={LinearGradient} linearGradientProps={{ colors: ["rgba(75,207,250,1)", "rgba(25,159,249,1)"] }} buttonStyle={{ borderRadius: 50 }} containerStyle={{ borderRadius: 50 }} raised icon={<Icon name="menu" color="white" />} />}
          centerComponent={{ text: 'Visit Sumenep', style: { color: '#fff', fontFamily: 'Lobster', fontSize: 24 } }}
          height={50} />
        <View style={{ flex: 1, marginTop: -50 }}>
          <Card containerStyle={{ height: 206, padding: 2, borderRadius: 5 }}>
            <PanoramaView
              style={{ height: 200 }}
              dimensions={{ height: 200, width: width }}
              inputType="mono"
              // imageUrl="https://raw.githubusercontent.com/googlevr/gvr-android-sdk/master/assets/panoramas/testRoom1_2kMono.jpg"
              imageUrl={url.uri}
            />
          </Card>
        </View>
      </SafeAreaView>
    );
  }
}