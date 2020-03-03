import React, { Component } from "react";
import { Image,SafeAreaView } from "react-native";
import {
  Container,
  Content,
  Title,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import styles from "./styles";

const emptyImg = require("../../../assets/indian-food/food-15.jpg");

class Favourites extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Container style={{ backgroundColor: "#E7F4FF" }}>
        <SafeAreaView style={{ flexDirection: "row" }}>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon active name="arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>Favourites</Title>
          </Body>
          <Right />
        </SafeAreaView>

        <Content padder style={{ backgroundColor: "#fff" }}>
          <Image source={emptyImg} style={styles.img} />
          <Text style={styles.text}>
            You dont have any favourite restaurant yet.
          </Text>
          <Text style={styles.text}>
            Mark your restaurants favourite and they will show up here!
          </Text>
        </Content>
      </Container>
    );
  }
}

export default Favourites;
