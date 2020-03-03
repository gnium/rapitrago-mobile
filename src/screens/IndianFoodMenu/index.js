import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import {
  Container,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Button,
  Tabs,
  Tab,
  ScrollableTab,
  Header
} from "native-base";
import Breakfast from "./breakfast.js";
import Starter from "./starter.js";
import MainCourse from "./mainCourse.js";
import Desserts from "./desserts.js";

class IndianFoodMenu extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Container style={{ backgroundColor: "#E7F4FF" }}>
        <SafeAreaView />
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Indian Food</Title>
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

        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Breakfast">
            <Breakfast />
          </Tab>
          <Tab heading="Starter">
            <Starter />
          </Tab>
          <Tab heading="Main Course">
            <MainCourse />
          </Tab>
          <Tab heading="Desserts">
            <Desserts />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default IndianFoodMenu;
