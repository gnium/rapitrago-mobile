import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Button,
  Tabs,
  Tab
} from "native-base";
import Breakfast from "./breakfast.js";
import Lunch from "./lunch.js";
import Desserts from "./desserts.js";

class WesternFoodMenu extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Container style={{ backgroundColor: "#E7F4FF" }}>
        <SafeAreaView />
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Western Food</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="ios-heart" />
            </Button>
            <Button transparent>
              <Icon name="ios-search" />
            </Button>
          </Right>
        </Header>

        <Tabs>
          <Tab heading="Breakfast">
            <Breakfast />
          </Tab>
          <Tab heading="Lunch">
            <Lunch />
          </Tab>
          <Tab heading="Desserts">
            <Desserts />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default WesternFoodMenu;
