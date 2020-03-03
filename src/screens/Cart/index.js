import React, { Component } from "react";
import { View, TextInput,SafeAreaView,FlatList } from "react-native";
import {
  Container,
  Content,
  Button,
  Icon,
  Title,
  Left,
  Right,
  Body,
  Thumbnail,
  Text,
  List,
  ListItem,
  Grid,
  Col,
  Form,
  Item,
  Label,
  Input
} from "native-base";
import styles from "./styles";
import dataOne from "./dataOne.js";
import dataTwo from "./dataTwo.js";

const commonColor = require("../../theme/variables/commonColor");
const hotelImg = require("../../../assets/home-page/rajdhani.jpg");

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Type Address Here" };
  }

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
            <Title>Review Order</Title>
          </Body>
          <Right />
        </SafeAreaView>

        <Content enableResetScrollToCoords={false}>
          <List style={styles.list}>
            <ListItem noBorder>
              <Thumbnail square source={hotelImg} />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.hotelNameText}>Rajdhani</Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: commonColor.contentTextColor
                  }}
                >
                  BTM 2nd Stage
                </Text>
              </View>
            </ListItem>
          </List>
          <View style={{ paddingBottom: 5 }} />

          <FlatList
            style={styles.list}
            data={dataOne}
            renderItem={({item}) =>
              <ListItem noBorder style={styles.gridListitem}>
                <Grid>
                  <Col size={3}>
                    <Left style={{ alignSelf: "flex-start" }}>
                      <Text style={{ fontSize: 15 }}>
                        {item.name}
                      </Text>
                    </Left>
                  </Col>
                  <Col size={2}>
                    <Right>
                      <View style={styles.rightColView}>
                        <Button transparent style={{ paddingRight: 0 }}>
                          <Icon name="ios-remove-circle-outline" />
                        </Button>
                        <Text style={styles.rightColText}>
                          0{item.quantity}
                        </Text>
                        <Button transparent style={{ paddingLeft: 0 }}>
                          <Icon name="ios-add-circle-outline" />
                        </Button>
                        <Text style={styles.rightColText}>
                          Rs. {item.amount}
                        </Text>
                      </View>
                    </Right>
                  </Col>
                </Grid>
              </ListItem>}
          />
          <View style={{ paddingBottom: 5 }} />

          <List style={styles.list}>
            <ListItem noBorder>
              <Text style={{ fontSize: 15, color: commonColor.darkTextColor }}>
                DETAILED BILL
              </Text>
            </ListItem>
          </List>
          <List
            style={styles.list}
            dataArray={dataTwo}
            renderRow={rowDataTwo =>
              <ListItem noBorder>
                <Grid>
                  <Col size={3}>
                    <Left style={{ alignSelf: "flex-start" }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: rowDataTwo.color
                        }}
                      >
                        {rowDataTwo.name}
                      </Text>
                    </Left>
                  </Col>
                  <Col size={1}>
                    <Right style={{ alignSelf: "flex-end" }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: rowDataTwo.color
                        }}
                      >
                        Rs. {rowDataTwo.amount}.00
                      </Text>
                    </Right>
                  </Col>
                </Grid>
              </ListItem>}
          />
          <View style={{ paddingBottom: 5 }} />

          <List style={styles.list}>
            <ListItem noBorder>
              <Text style={{ fontSize: 15, color: commonColor.darkTextColor }}>
                DETAILS
              </Text>
            </ListItem>
          </List>

          <View style={{ backgroundColor: "#fff" }}>
            <Form>
              <Item fixedLabel>
                <Label style={{ color: commonColor.contentTextColor }}>
                  Email
                </Label>
                <Input />
              </Item>
              <Item fixedLabel>
                <Label style={{ color: commonColor.contentTextColor }}>
                  Phone
                </Label>
                <Input keyboardType="numeric" />
              </Item>
              <TextInput
                style={styles.textArea}
                onChangeText={text => this.setState({ text })}
                placeholder={"Enter Address"}
                editable
                multiline
                numberOfLines={4}
              />
            </Form>
          </View>

          <View style={{ padding: 15 }}>
            <Button block>
              <Text>Proceed</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Cart;
