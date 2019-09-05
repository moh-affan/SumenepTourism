import React, { Component } from "react";
import { ImageBackground, View, StatusBar, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { CircleSnail } from "react-native-progress";

import styles from "./styles";
import { withNavigation } from "react-navigation";

const visitSumenep = require("../../../assets/img/visit-sumenep.png");
const width = Dimensions.get("window").width;

class SplashScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    // const { navigate } = navigation;
    // setTimeout(function () {
    //     navigate("VrExample");
    // }, 3000);
    return {
      title: "Splash Screen",
      headerStyle: {
        backgroundColor: "transparent",
        position: "absolute",
        height: 50,
        top: 0,
        left: 0,
        right: 0
      },
      headerTintColor: "#fff"
    };
  };

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
          colors={["#40c4ff", "#1de9b6"]}
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
          <View style={styles.splashContainer}>
            <View style={styles.logoContainer}>
              <ImageBackground source={visitSumenep} style={styles.logo} />
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
            <CircleSnail color={["red", "green", "blue"]} />
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default withNavigation(SplashScreen);
