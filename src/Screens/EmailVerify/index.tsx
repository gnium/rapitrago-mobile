import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {StackNavigationProp} from '@react-navigation/stack';
import { useDispatch, useSelector } from "react-redux";
import constant from '../../utils/constant';
import Button from '../../Components/Button';
import {RootStackParamList} from '../AppNavigator';
import styles from './styles';
//redux stuff
import {loginUser} from '../../redux/actions/auth';
const image = require('../../../assets/Artboard.png');

interface Props {
  navigation: StackNavigationProp<RootStackParamList>;
}

const EmailVerify: React.FC<Props> = (props: any) => {
  const dispatch = useDispatch();
  let { auth } =  useSelector<any, any>((state) => state);
  console.log(auth);
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const onChangePassword = (val: string) => {
    setPassword(val);
  };
  
  /**
   * PROPOSED LOGIN FLOW
   */
  const [values, setValues] = useState({
    email: '',
    password: ''
  } as userDataProps);
  const [errors, setErrors] = useState({} as formError);
  const [loading, setLoading] = useState(false);
  /*
  useEffect(() => {
    if (props?.UI.errors) {
      setErrors(props?.UI.errors);
    }
    setLoading(props.UI.loading);
  }, [props?.UI])
  */
  const handleSubmit = (e: any) => {
    e?.preventDefault();
    setLoading(true);
    //your client side validation here
    //after success validation
    const userData = {
      email_address: email,
      secured_password: password,
    };
    dispatch(loginUser(userData, props.history));
  }
  const handleChange = (e: any) => {
    e.persist();
    setValues(values => ({
...values,
  [e.target.name]: e.target.value
    }));
    };
  // END OF PROPOSED LOGIN FLOW
  const onChangeEmail = (eml: string) => {
    setEmail(eml);
  };
  const {navigation} = props;
  return (
    <View style={styles.firstView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.firstView}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={constant.blackColor}
        />
        <View style={styles.firstView}>
          <View style={styles.firstView}>
            <Swiper
              dotColor={constant.commonColor}
              activeDotColor={constant.primaryColor}
              dotStyle={styles.dot}
              activeDotStyle={styles.dot}>
              <Image source={image} style={styles.image} resizeMode="cover" />
              <Image source={image} style={styles.image} resizeMode="cover" />
              <Image source={image} style={styles.image} resizeMode="cover" />
            </Swiper>
          </View>
          <View style={styles.secondView}>
            <View style={styles.thirdView}>
              <Text style={styles.firstText}>Login with Email</Text>
              <Text style={styles.secondText}>
                Enter your details to get started{' '}
              </Text>
              <View style={styles.fourthView}>
                <TextInput
                  placeholder="Email"
                  placeholderTextColor={'grey'}
                  autoFocus={true}
                  autoCorrect={false}
                  onChangeText={(text) => onChangeEmail(text)}
                  value={email}
                  selectionColor={'grey'}
                  style={styles.input}
                />
              </View>
              <View style={styles.fifthView}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={'grey'}
                  autoCorrect={false}
                  onChangeText={(text) => onChangePassword(text)}
                  value={password}
                  selectionColor={'grey'}
                  style={styles.input}
                  secureTextEntry={true}
                />
              </View>
              <Button
                style={styles.button}
                onPress={(e: any) => {
                  handleSubmit(e);
                }}>
                <Text style={styles.thirdText}>Login with Email</Text>
              </Button>
              <Text>{auth?.loginError && <Text>Incorrect email or password.</Text>}</Text>
              {loading? (<ActivityIndicator />) : null}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default EmailVerify;
