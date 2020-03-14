/* eslint-disable no-nested-ternary */
// @flow
import React, { Component } from 'react';
import { Image, StatusBar, Alert, ScrollView } from 'react-native';
import { Container, Content, Text, Button, Icon, Item, Input, View, Toast } from 'native-base';
import { Form as FinalForm, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';

import connect from 'react-redux/es/connect/connect';
import styles from './styles';
import commonColor from '../../theme/variables/commonColor';
import { createUser, errorSelector, renderErrors } from '../../modules/auth';

const logo = require('../../../assets/login-banner.png');

const required = value => (value ? undefined : 'Requerido');
const maxLength = max => value =>
  value && value.length > max ? `Debe contener ${max} caracteres como maximo` : undefined;
const maxLength15 = maxLength(15);
const minLength = min => value =>
  value && value.length < min ? `Debe contener ${min} o mas caracteres` : undefined;
const minLength3 = minLength(3);
const minLength4 = minLength(4);
const minLength5 = minLength(5);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Formato de correo electrónico invalido'
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9áéíóúÁÉÍÓU ]/i.test(value) ? 'Solo caracteres alfanuméricos' : undefined;
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

class SignUpForm extends Component {
  errors = null;

  componentWillReceiveProps(nextProps) {
    this.errors = nextProps.error;
  }

  // eslint-disable-next-line react/sort-comp
  renderInput = ({ input, icon, placeholder, meta: { visited, error, active } }) => {
    const hasErrors = error && visited && !active;
    return (
      <View>
        <Item
          error={hasErrors}
          style={[styles.inputGrp, hasErrors ? styles.invalidInputGrp : null]}
        >
          <Icon
            active
            name={icon}
            style={error && visited ? { color: commonColor.brandDanger } : { color: '#666' }}
          />
          <Input
            ref={c => (this.textInput = c)}
            placeholderTextColor="#666"
            placeholder={placeholder || ''}
            style={hasErrors ? styles.invalidInput : styles.input}
            keyboardType={input.name === 'email' ? 'email-address' : 'default'}
            secureTextEntry={input.name === 'password'}
            {...input}
          />
        </Item>
        {hasErrors ? <Text style={styles.formErrorText1}>{error}</Text> : null}
      </View>
    );
  };

  signUp = async (data, form) => {
    const { valid } = form.getState();
    const { createUserFn, navigation } = this.props;
    if (valid) {
      await createUserFn(data);

      if (this.errors !== null) {
        return this.showErrors();
      }

      Alert.alert(
        '¡Cuenta creada con éxito!',
        'Ahora solo debes confirmar tu correo electrónico. Verifica tu casilla de correo.',
        [{ text: 'Aceptar', onPress: () => navigation.navigate('Login') }],
        { cancelable: false },
      );
    } else {
      Toast.show({
        text: '¡Por favor, completa todos los campos!',
        type: 'danger',
        duration: 3000,
        position: 'top',
        textStyle: { textAlign: 'center', color: '#fff' },
      });
    }
  };

  showErrors = () => {
    const { renderErrorsFn } = this.props;
    const submissionErrors = this.errors.errors;
    renderErrorsFn();
    Toast.show({
      text: 'No se pudo crear tu cuenta. Por favor, verifica los datos ingresados.',
      type: 'danger',
      duration: 5000,
      position: 'top',
      textStyle: { textAlign: 'center', color: '#fff' },
    });
    return { [FORM_ERROR]: submissionErrors };
  };

  textInput: any;

  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.background}>
        <StatusBar backgroundColor={commonColor.statusBarColor} barStyle="light-content" />
        <Content contentContainerStyle={{ flex: 1 }} enableOnAndroid>
          <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
            <View style={styles.mainContainer}>
              <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
              </View>
              <FinalForm
                onSubmit={this.signUp}
                render={({ handleSubmit, submitting, pristine }) => (
                  <View style={styles.signupContainer}>
                    <Field
                      name="first_name"
                      placeholder="Nombre *"
                      component={this.renderInput}
                      type="text"
                      icon="person"
                      validate={composeValidators(required, alphaNumeric, minLength3)}
                    />

                    <Field
                      name="last_name"
                      placeholder="Apellido *"
                      component={this.renderInput}
                      type="text"
                      icon="person"
                      validate={composeValidators(required, alphaNumeric, minLength3)}
                    />

                    <Field
                      name="address"
                      placeholder="Dirección *"
                      component={this.renderInput}
                      type="text"
                      icon="home"
                      validate={composeValidators(required, alphaNumeric, minLength3)}
                    />

                    <Field
                      name="dni"
                      placeholder="DNI"
                      component={this.renderInput}
                      type="text"
                      icon="person"
                      validate={composeValidators(alphaNumeric, minLength5)}
                    />

                    <Field
                      name="email"
                      placeholder="Email *"
                      component={this.renderInput}
                      type="email"
                      icon="mail"
                      validate={composeValidators(email, required)}
                    />

                    <Field
                      name="password"
                      placeholder="Contraseña *"
                      component={this.renderInput}
                      icon="unlock"
                      type="password"
                      validate={composeValidators(alphaNumeric, minLength4, maxLength15, required)}
                    />

                    <Button
                      block
                      large
                      style={[styles.baseBtn, styles.loginBtn]}
                      onPress={handleSubmit}
                      disabled={submitting || pristine}
                    >
                      <Text style={styles.baseBtnText}>Registrarme</Text>
                    </Button>
                    <View style={styles.otherLinksContainer}>
                      <Button
                        small
                        transparent
                        style={{ justifyContent: 'center', width: '100%' }}
                        onPress={() => navigation.navigate('Login')}
                        disabled={submitting}
                      >
                        <Text style={styles.actionSecondary}>Volver</Text>
                      </Button>
                    </View>
                    <Text>* Campos requeridos</Text>
                  </View>
                )}
              />
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const error = errorSelector(state);
  return { error };
}

const mapDispatchToProps = dispatch => ({
  createUserFn: data => dispatch(createUser(data)),
  renderErrorsFn: () => dispatch(renderErrors()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm);
