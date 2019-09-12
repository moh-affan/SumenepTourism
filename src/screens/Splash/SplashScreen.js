import React, { Component } from "react";
import { ImageBackground, Image, View, StatusBar, Dimensions } from "react-native";
import { CircleSnail } from "react-native-progress";
import { Avatar, Card } from 'react-native-elements';
import LinearGradient from "react-native-linear-gradient";

import styles from "./styles";
import { withNavigation } from "react-navigation";

const visitSumenep = require("../../../assets/img/visit-sumenep.png");
const giliLabak = require("../../../assets/img/gili-labak.jpg");
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const borderRadiusValue = 50;

class SplashScreen extends Component {

  componentDidMount() {
    const { replace } = this.props.navigation;
    setTimeout(function () {
      replace("VrExample");
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["rgba(239,246,249,1)", "rgba(206,239,253,1)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.6, y: 0.6 }}
          style={{ flex: 1, width: width }}
        >
          <StatusBar
            barStyle="light-content"
            hidden={true}
            showHideTransition={true}
            animated={true}
          />
          <ImageBackground
            backgroundColor='transparent'
            style={{ flex: 1 }}
            resizeMode="center"
            imageStyle={{ resizeMode: "cover" }}
          >
            <View style={styles.splashContainer}>
              <View style={styles.logoContainer}>
                <ImageBackground source={visitSumenep} style={styles.logo} />
                {/* <Avatar rounded source={visitSumenep} size='xlarge' placeholderStyle={{ backgroundColor: '#fff' }} containerStyle={{ elevation: 5 }} /> */}
              </View>
            </View>
            <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, width: width, height: (height / 2) }}>
              <Card containerStyle={{ padding: 0, margin: 0, borderTopLeftRadius: borderRadiusValue, borderTopRightRadius: borderRadiusValue }}>
                <Image
                  source={giliLabak}
                  style={{ width: width, height: '100%', borderTopLeftRadius: borderRadiusValue, borderTopRightRadius: borderRadiusValue }} />
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 40,
                    height: 40,
                    marginBottom: 20,
                    marginLeft: (width - 40) / 2
                  }}
                >
                  <CircleSnail color={["red", "green", "blue", "black"]} />
                </View>
              </Card>
            </View>
          </ImageBackground>
        </LinearGradient>
      </View>
    );
  }
}

export default withNavigation(SplashScreen);
