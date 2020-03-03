import React, { Component } from "react";
import { View,SafeAreaView } from "react-native";
import {
  Container,
  Header,
  Content,
  Title,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Item,
  Label,
  Input
} from "native-base";
import styles from "./styles";

const commonColor = require("../../theme/variables/commonColor");

class PhoneNumber extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Enter phone number" };
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <Container style={{backgroundColor:"#E7F4FF" }}>
        <SafeAreaView />
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon active name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Login</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "#fff" }}>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.text}>Please enter your phone number</Text>
          </View>

          <View style={{ padding: 20 }}>
            <Item inlineLabel>
              <Label style={{ color: commonColor.contentTextColor }}>
                +91 -{" "}
              </Label>
              <Input keyboardType="numeric" />
            </Item>
          </View>

          <View style={{ paddingLeft: 20, paddingRight: 20 }}>
            <Button block>
              <Text>Proceed</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default PhoneNumber;
