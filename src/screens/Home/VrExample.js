import React, { Component } from "react";
import { PanoramaView } from "@lightbase/react-native-panorama-view";
import { View, Dimensions, SafeAreaView, Image, TouchableNativeFeedback } from "react-native";
// import { Header } from "react-native-elements";
import { Card, Icon, Button } from "react-native-elements";
import { CurvedBottomHeader } from "../../components";

const width = Dimensions.get("window").width;
const vr = require("../../../assets/img/vr.png");

export default class VrExample extends Component {
  render() {
    const url = Image.resolveAssetSource(vr);
    
    return (
      <SafeAreaView>
        <CurvedBottomHeader
          statusBarProps={{ barStyle: "light-content", hidden: false, showHideTransition: true, animated: true }}
          placement="center"
          containerStyle={{ backgroundColor: '#E64A19' }}
          leftComponent={<Button type="solid" buttonStyle={{borderRadius: 50}} containerStyle={{borderRadius: 50}} raised icon={<Icon name="menu" color="white" />} />}
          centerComponent={{ text: 'Visit Sumenep', style: { color: '#fff', fontFamily: 'Lobster', fontSize: 24 } }}
          height={50} />
        <View style={{ flex: 1, marginTop: -50, paddingLeft: 14, paddingRight: 14 }}>
          <Card containerStyle={{ height: 242, padding: 5, borderRadius: 5 }}>
            <PanoramaView
              style={{ height: 230 }}
              dimensions={{ height: 230, width: width }}
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