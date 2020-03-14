const React = require('react-native');

const { Dimensions, Platform } = React;
const commonColor = require('../../theme/variables/commonColor');

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  background: {
    flex: 1,
    width: null,
    minHeight: deviceHeight,
    backgroundColor: '#fff',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  logoContainer: {
    width: deviceWidth - 40,
    height: deviceHeight / 4,
    marginVertical: 20,
  },
  logo: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  signupContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
    flex: 1,
  },

  formErrorIcon: {
    color: commonColor.brandDanger,
    marginTop: 5,
    right: 10,
  },
  formErrorText1: {
    fontSize: Platform.OS === 'android' ? 12 : 15,
    color: commonColor.brandDanger,
    top: -5,
    marginBottom: 5,
    textAlign: 'right',
  },
  inputGrp: {
    flexDirection: 'row',
    marginBottom: 8,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  invalidInputGrp: {
    borderColor: commonColor.inputErrorBorderColor,
  },
  input: {
    paddingLeft: 10,
  },
  invalidInput: {
    color: commonColor.brandDanger,
  },
  otherLinkText: {
    alignSelf: 'center',
    opacity: 0.8,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#EFF',
  },
  otherLinksContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  helpBtns: {
    opacity: 0.9,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
  },
  baseBtn: {
    marginVertical: 7,
    height: 50,
    elevation: 0,
  },
  baseBtnText: {
    fontSize: 16,
  },
  loginBtn: {
    backgroundColor: commonColor.brandPrimary,
  },
  actionPrimary: {
    color: '#fff',
  },
  actionSecondary: {
    color: commonColor.brandSecondary,
  },
};
