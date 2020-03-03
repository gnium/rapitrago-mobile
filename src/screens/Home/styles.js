const React = require("react-native");
const { Dimensions, Platform } = React;

const commonColor = require("../../theme/variables/commonColor");

export default {
  head: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    backgroundColor: commonColor.inverseTextColor,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 0,
    alignItems: "center"
  },
  title: {
    fontSize: 15
  },
  content: {
    paddingBottom: 8,
    flexDirection: "column",
    paddingLeft: 3
  },
  subHeaderContentView: {
    height: Platform.OS === "ios" ? 50 : 60,
    backgroundColor: "white",
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    marginHorizontal: -15,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  subHeaderInnerContentView: {
    flex: 1,
    alignSelf: "stretch",
    marginTop: Platform.OS === "ios" ? 5 : 13,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 8,
    paddingRight: 0
  },
  restaurantSearchInput: {
    backgroundColor: commonColor.toolbarDefaultBg,
    borderRadius: 4,
    flex: 1,
    height: 40,
    marginBottom: Platform.OS === "ios" ? 4 : 8,
    alignSelf: "center"
  },
  fullWidthImgView: {
    width: Dimensions.get("window").width + 3,
    height: Dimensions.get("window").width / 2,
    marginTop: 10,
    overflow: "hidden",
    position: "relative",
    alignSelf: "center"
  },
  fullWidthImg: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width / 2,
    resizeMode: "cover"
  },
  referView: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width / 2,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    position: "absolute"
  },
  referOfferText: {
    textAlign: "center",
    color: commonColor.inverseTextColor
  },
  foodGridImg: {
    width: (Dimensions.get("window").width - 30) / 2,
    height: 150,
    resizeMode: "cover",
    borderRadius: 5
  },
  foodGridImgIconView: {
    width: (Dimensions.get("window").width - 30) / 2,
    height: 150,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 5,
    alignItems: "center"
  },
  foodGridText: {
    color: commonColor.inverseTextColor,
    fontSize: 18
  },
  cardView: {
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "row"
  },
  restaurantFoodImg: {
    height: 80,
    width: 80,
    resizeMode: "cover",
    borderRadius: 5
  },
  ratingsView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5
  },
  ratingsIcon: {
    color: commonColor.contentTextColor,
    fontSize: 14
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 125
  },
  hotelNameText: {
    color: commonColor.darkTextColor,
    fontSize: 16,
    fontWeight: "bold"
  },
  timeText: {
    color: commonColor.contentTextColor,
    fontSize: 10,
    fontWeight: "bold"
  },
  offerText: {
    color: commonColor.contentTextColor,
    fontSize: 12
  },
  footerImg: {
    height: 30,
    width: 30,
    resizeMode: "contain",
    alignSelf: "center"
  },
  footerItemActive: {
    color: "#FFF",
    fontWeight: "700"
  },
  footerItemInactive: {
    color: "rgba(176,219,253,0.5)"
  }
};
