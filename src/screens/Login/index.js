import React, { Component } from "react";
import { Image,SafeAreaView } from "react-native";
import { Container, Content, Text, View, Button } from "native-base";
import styles from "./styles";

const map = require("../../../assets/map.png");
const logo = require('../../../assets/login-background.jpg');

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const submitting = false;
    const navigation = this.props.navigation;
    return (
      <Container style={styles.background}>
        <Content contentContainerStyle={styles.mainContent} enableOnAndroid>
          <SafeAreaView />
            <Image source={logo} style={styles.logo} />
            <Button
                    block
                    large
                    style={[styles.baseBtn, styles.facebookBtn]}
                    onPress={() => {
                        this.facebookLogin();
                    }}
                    disabled={submitting}
                  >
                    <Text style={styles.baseBtnText}>Iniciar con Facebook</Text>
            </Button>
            <Button
                    block
                    large
                    style={[styles.baseBtn, styles.facebookBtn]}
                    onPress={() => {
                        this.facebookLogin();
                    }}
                    disabled={submitting}
                  >
                    <Text style={styles.baseBtnText}>Iniciar con Whatsapp</Text>
            </Button>
            <Button
                    block
                    large
                    style={[styles.baseBtn, styles.facebookBtn]}
                    onPress={() => {
                        this.facebookLogin();
                    }}
                    disabled={submitting}
                  >
                    <Text style={styles.baseBtnText}>Iniciar con Email</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;
