import React, { Component } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { NavigationActions, StackActions } from "react-navigation";
import {
  Container,
  Content,
  Title,
  Body,
  Icon,
  Left,
  Button,
  Right,
  ListItem
} from "native-base";
import { itemsFetchData } from "../../actions";
import data from "./data.json";
import styles from "./styles";

const commonColor = require("../../theme/variables/commonColor");

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Login" })]
});

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "Type Address Here" };
  }
  componentDidMount() {
    this.props.fetchData(data);
  }
  _renderItem = ({ item }) => {
    return (
      <View style={{ backgroundColor: "#fff" }}>
        <ListItem button>
          <Left>
            <Icon
              active
              name={item.icon}
              style={{ color: commonColor.contentTextColor }}
            />
            <Text
              style={{
                paddingLeft: 3,
                paddingTop: 3,
                color: commonColor.darkTextColor
              }}
            >
              {item.text}
            </Text>
          </Left>
          <Right>
            <Icon active name="arrow-forward" style={{ fontSize: 20 }} />
          </Right>
        </ListItem>
      </View>
    );
  };

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
            <Title>Account</Title>
          </Body>
          <Right />
        </SafeAreaView>
        <Content>
          <View style={styles.detailsContainer}>
            <Text style={styles.userName}>Sanket Sahu</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <View style={{ paddingTop: 5 }}>
                <Text style={{ color: commonColor.lightTextColor }}>
                  sanket@geekyants.com
                </Text>
                <Text style={{ color: commonColor.lightTextColor }}>
                  +91 9945636303
                </Text>
              </View>
              <Button transparent>
                <Icon active name="color-wand" />
              </Button>
            </View>
          </View>

          <FlatList
            data={this.props.items}
            renderItem={this._renderItem}
            keyExtractor={item => item.icon}
          />

          <Button
            block
            onPress={() => navigation.dispatch(resetAction)}
            style={{ backgroundColor: "#fff", margin: 12 }}
          >
            <Text
              style={{
                color: commonColor.contentTextColor,
                fontWeight: "bold"
              }}
            >
              LogOut
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
}

const mapStateToProps = state => ({
  items: state.accountReducer.items,
  hasErrored: state.accountReducer.hasErrored,
  isLoading: state.accountReducer.isLoading
});
export default connect(
  mapStateToProps,
  bindAction
)(Account);
