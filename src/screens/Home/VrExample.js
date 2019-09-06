import React, { Component } from "react";
import { PanoramaView } from "@lightbase/react-native-panorama-view";
import { View, StatusBar, Dimensions, SafeAreaView, Image } from "react-native";
import { Header } from "react-native-elements";

const width = Dimensions.get("window").width;
const vr = require("../../../assets/img/vr.png");

export default class VrExample extends Component {
    render() {
        const url = Image.resolveAssetSource(vr);
        return (
            <SafeAreaView>
                <StatusBar barStyle="light-content" hidden={false} showHideTransition={true} animated={true} />
                <Header
                    placement="left"
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <View style={{ flex: 1 }}>
                    <PanoramaView
                        style={{ height: 230 }}
                        dimensions={{ height: 230, width: width }}
                        inputType="mono"
                        imageUrl="https://raw.githubusercontent.com/googlevr/gvr-android-sdk/master/assets/panoramas/testRoom1_2kMono.jpg"
                    />
                </View>
            </SafeAreaView>
        );
    }
}