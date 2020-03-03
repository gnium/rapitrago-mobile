const React = require("react-native");
const { Platform } = React;
const commonColor = require("../../theme/variables/commonColor");

export default {
  headerText: {
    color: commonColor.contentTextColor,
    fontWeight: "bold",
    paddingTop: Platform.OS === "android" ? 7 : 0
  },
  filterHeaderTextView: {
    padding: 10,
    backgroundColor: commonColor.inverseTextColor,
    borderBottomWidth: 5,
    borderBottomColor: commonColor.lightTextColor
  },
  filterHeaderText: {
    color: commonColor.lightTextColor,
    fontSize: 14
  },
  colLeftBtn: {
    borderRightWidth: 1,
    borderRightColor: commonColor.lightTextColor,
    flexDirection: "row",
    padding: 15
  },
  colIcon: {
    color: commonColor.lightTextColor,
    fontSize: 20,
    marginTop: 5
  },
  filterTypeText: {
    color: commonColor.contentTextColor,
    fontWeight: "bold"
  },
  filterTypeSubtext: {
    color: commonColor.lightTextColor,
    fontSize: 12
  },
  colRightBtn: {
    flexDirection: "row",
    padding: 15
  }
};
