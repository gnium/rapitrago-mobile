const React = require("react-native");
const { Dimensions } = React;

const deviceWidth = Dimensions.get("window").width;
const commonColor = require("../../theme/variables/commonColor");

export default {
  list: {
    backgroundColor: "#fff",
    borderBottomWidth: 0.5,
    borderBottomColor: commonColor.lightTextColor
  },
  hotelNameText: {
    color: commonColor.darkTextColor,
    fontWeight: "600",
    marginLeft: -20
  },
  gridListitem: {
    marginLeft: 5,
    paddingTop: 8,
    paddingBottom: 8
  },
  rightColView: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  rightColText: {
    fontSize: 13,
    paddingTop: 13,
    color: commonColor.contentTextColor
  },
  textArea: {
    height: 100,
    width: deviceWidth - 30,
    backgroundColor: "rgba(0,0,0,0.1)",
    margin: 15,
    textAlignVertical: "top",
    padding: 10
  }
};
