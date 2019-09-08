import React, { Component } from "react";
import { ImageBackground, View, StatusBar, Dimensions } from "react-native";
import { CircleSnail } from "react-native-progress";
import { Avatar } from 'react-native-elements';

import styles from "./styles";
import { withNavigation } from "react-navigation";

const visitSumenep = require("../../../assets/img/visit-sumenep.png");
const giliLabak = require("../../../assets/img/gili-labak.jpg");
const width = Dimensions.get("window").width;

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
        <StatusBar
          barStyle="light-content"
          hidden={true}
          showHideTransition={true}
          animated={true}
        />
        <ImageBackground
          source={giliLabak}
          style={{ flex: 1 }}
          resizeMode="center"
          imageStyle={{ resizeMode: "cover" }}
        >
          <View style={styles.splashContainer}>
            <View style={styles.logoContainer}>
              {/* <ImageBackground source={visitSumenep} style={styles.logo} /> */}
              <Avatar rounded source={visitSumenep} size='xlarge' placeholderStyle={{ backgroundColor: '#fff' }} containerStyle={{ elevation: 5 }} />
            </View>
          </View>
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
        </ImageBackground>
      </View>
    );
  }
}

export default withNavigation(SplashScreen);
