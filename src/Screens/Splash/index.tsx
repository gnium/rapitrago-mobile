import * as React from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import Button from '../../Components/Button';
import styles from './styles';
import {RootStackParamList} from '../AppNavigator';
import constant from '../../utils/constant';
const image = require('../../../assets/background.png');
const icon = require('../../../assets/icon-fd.png');

interface Props {
  navigation: StackNavigationProp<RootStackParamList>;
}

const Splash: React.FC<Props> = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={constant.blackColor}
      />
      <View style={styles.firstView}>
        <ImageBackground source={image} style={styles.backgroundColorImage}>
          <View style={styles.secondView}>
            <Image source={icon} style={styles.icon} />
            <Text style={styles.firstText}>Eazy Ordering</Text>
            <Text style={styles.secondText}>
              Best Restaurants are on Eazyordering
            </Text>
          </View>
          <View style={styles.thirdView}>
            <Button
              style={styles.fourthView}
              onPress={() => navigation.navigate('Verify')}>
              <Text style={styles.sixthText}>Get Started</Text>
            </Button>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Verify')}>
              <View style={styles.fifthView}>
                <Text style={styles.fourthText}>Have an account? </Text>
                <Text style={styles.fifthText}>Login </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
export default Splash;
