import React, { Component } from "react";
import { View, Platform,SafeAreaView } from "react-native";
import {
  Container,
  Header,
  Text,
  Button,
  Icon,
  Item,
  Input,
  Spinner
} from "native-base";
import MapView from "react-native-maps";
import styles from "./styles";

const commonColor = require("../../theme/variables/commonColor");
const address = "2nd Main Road, Stage 2, BTM Layout";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 600);
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.spinnerView}>
          <Spinner />
        </View>
      );
    } else {
      return (
        <Container style={styles.container}>
          <View style={{ flex: 1,backgroundColor:"#E7F4FF" }}>
            <SafeAreaView>
            <Header searchBar iosBarStyle="default">
              <Item
                regular
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent"
                }}
              >
                <Icon
                  active
                  name="search"
                  style={{ color: commonColor.contentTextColor }}
                />
                <Input
                  style={{
                    color: commonColor.darkTextColor,
                    alignSelf: "center",
                    marginTop: Platform.OS === "ios" ? 0 : 6
                  }}
                  placeholder={address}
                />
                <Icon
                  active
                  name="close-circle"
                  style={{ color: commonColor.contentTextColor }}
                />
              </Item>
            </Header>
            </SafeAreaView>
            <View style={styles.mapView}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: 12.920614,
                  longitude: 77.586234,
                  latitudeDelta: 0.0722,
                  longitudeDelta: 0.0421
                }}
              />
              <View style={styles.page}>
                <Button
                  block
                  style={styles.btn}
                  onPress={() => {
                    this.props.navigation.navigate("TabNavigation");
                  }}
                >
                  <Text>PICK THIS LOCATION</Text>
                </Button>
              </View>
            </View>
          </View>
        </Container>
      );
    }
  }
}

export default Location;
