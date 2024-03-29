import {StyleSheet, Platform} from 'react-native';
import constant from '../../utils/constant';

const {height, width, heightRatio} = constant.styleGuide;
const iphoneX = height > 811;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constant.commonColor,
  },
  mapView: {
    flex: iphoneX ? 1.5 : 1.2,
  },
  map: {
    flex: 1,
  },
  secondView: {
    height: 35 * heightRatio,
    width: width - 60,
    marginTop: 20 * heightRatio,
    borderRadius: 5,
    left: 28,
    borderWidth: 0.4,
    borderColor: constant.lightText,
    flexDirection: 'row',
  },
  thirdView: {
    justifyContent: 'center',
    left: 10,
  },
  firstIcon: {
    height: 15,
    width: 15,
    tintColor: constant.lightText,
  },
  textInput: {
    left: 20,
    width: width - 150,
    color: constant.thirdTextColor,
    fontWeight: '400',
    fontSize: 14,
    top: Platform.OS === 'android' ? 2 : 0,
  },
  secondTextInput: {
    marginTop: 5,
    width: width - 150,
    color: constant.thirdTextColor,
    fontWeight: '400',
    fontSize: 13,
  },
  thirdTextInput: {
    width: width - 150,
    color: constant.thirdTextColor,
    fontWeight: '400',
    fontSize: 14,
  },
  fourthView: {
    height: 45 * heightRatio,
    borderBottomWidth: 0.4,
    marginTop: 10,
    justifyContent: 'center',
    left: 30,
    marginRight: 60,
    borderBottomColor: constant.lightText,
  },
  fifthView: {
    height: 35 * heightRatio,
    justifyContent: 'center',
    borderBottomWidth: 0.4,
    marginTop: 10,
    left: 30,
    marginRight: 60,
    borderBottomColor: constant.lightText,
  },
  sixthView: {
    left: 30,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 60,
  },
  seventhView: {
    height: 32,
    width: 80,
    top: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.4,
    borderRadius: 5,
    borderColor: constant.lightText,
  },
  eighthView: {
    height: 32,
    width: 80,
    top: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.4,
    marginLeft: 20,
    borderRadius: 5,
    borderColor: constant.lightText,
  },
  icon: {
    height: 15,
    width: 15,
    marginLeft: 8,
  },
  commonText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '400',
    color: constant.thirdTextColor,
  },
  firstText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '400',
    color: constant.thirdTextColor,
  },
  activeSeventhView: {
    height: 32,
    width: 80,
    top: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: constant.primaryColor,
  },
  activeView: {
    height: 32,
    width: 80,
    top: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    marginLeft: 20,
    borderRadius: 5,
    borderColor: constant.primaryColor,
  },
  button: {
    height: 45,
    width: width - 60,
    backgroundColor: constant.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    top: iphoneX ? 20 : 20,
    left: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: constant.commonColor,
  },
  backView: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 20 : 50,
    left: 20,
  },
  backIcon: {
    height: 20,
    width: 20,
  },
  locIcon: {
    height: 20,
    width: 20,
  },
  locateView: {
    marginTop: 10 * heightRatio,
    marginLeft: 45,
  },
  locateIcon: {
    height: 15,
    width: 15,
  },
});
