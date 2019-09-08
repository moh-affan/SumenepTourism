import React, { Component } from "react";
import { PanoramaView } from "@lightbase/react-native-panorama-view";
import { View, Dimensions, SafeAreaView, Image } from "react-native";
// import { Header } from "react-native-elements";
// import { Header } from "react-native-elements";
import { Header, CurvedBottomHeader } from "../../components";

const width = Dimensions.get("window").width;
const vr = require("../../../assets/img/vr.png");

export default class VrExample extends Component {
    render() {
        const url = Image.resolveAssetSource(vr);
        return (
            <SafeAreaView>
                <Header
                    statusBarProps={{ barStyle: "light-content", hidden: false, showHideTransition: true, animated: true }}
                    placement="left"
                    containerStyle={{ backgroundColor: 'red' }}
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <View style={{ flex: 1 }}>
                    <CurvedBottomHeader />
                    <PanoramaView
                        style={{ height: 230 }}
                        dimensions={{ height: 230, width: width }}
                        inputType="mono"
                        // imageUrl="https://raw.githubusercontent.com/googlevr/gvr-android-sdk/master/assets/panoramas/testRoom1_2kMono.jpg"
                        imageUrl={url.uri}
                    />
                </View>
            </SafeAreaView>
        );
    }
}