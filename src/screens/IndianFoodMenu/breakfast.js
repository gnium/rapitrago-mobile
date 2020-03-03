import React, { Component } from "react";
import { Image, View, Dimensions,FlatList } from "react-native";
import {
  Content,
  Card,
  CardItem,
  Left,
  Right,
  Badge,
  Text,
  Icon,
  Button,
} from "native-base";
import styles from "./styles.js";
import dataBreakfast from "./dataBreakfast.js";

const deviceHeight = Dimensions.get("window").height;

export default class Breakfast extends Component {
  render() {
    return (
      <Content padder>
        <FlatList
          data={dataBreakfast}
          renderItem={({item}) =>
            <Card>
              <CardItem cardBody>
                <Image
                  source={item.image}
                  style={{ height: deviceHeight / 4, flex: 1 }}
                />
              </CardItem>
              <CardItem style={{ paddingBottom: 0, paddingLeft: 10 }}>
                <Left>
                  <Badge
                    danger={item.badgeDanger}
                    success={item.badgeSuccess}
                    style={{ height: 12, marginTop: 5 }}
                  />
                  <Text>
                    {item.dishName}
                  </Text>
                </Left>
              </CardItem>
              <CardItem style={{ paddingTop: 0, paddingLeft: 3 }}>
                <Left>
                  <Text style={styles.amountText}>
                    Rs. {item.amount}
                  </Text>
                </Left>
                <Right>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Button
                      transparent
                      style={{ paddingRight: 5, paddingTop: 5 }}
                    >
                      <Icon name="ios-remove-circle-outline" />
                    </Button>
                    <Text style={styles.quantityText}>
                      0{item.quantity}
                    </Text>
                    <Button
                      transparent
                      style={{ paddingLeft: 5, paddingTop: 5 }}
                    >
                      <Icon name="ios-add-circle-outline" />
                    </Button>
                  </View>
                </Right>
              </CardItem>
            </Card>}
        />
      </Content>
    );
  }
}
