import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
pageContainer: {
    flex: 1,
    width: "95%",
    paddingLeft: 25,
    marginTop: 100,
    marginBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
},
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: "#FFF",
    borderTopWidth: 2,
    borderTopColor: COLORS.gray,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  habitContainer: {
    marginTop: 100,
    height: "100%",

  },
  menuIcon: {
    width: "70%",
    height: "70%",
    paddingLeft: 20,
  },
  welcomeContainer: {
    width: "100%",
    marginTop: 20,

  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontSize: SIZES.xLarge,
    color: COLORS.secondary,
  },
  text : {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 10,
    textAlign: "center"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitleFriends: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
    marginBottom: 20
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
  imageContainer: {
    marginTop: 120,
    height: 170,
  },
  iconImage: {
    height: 150,
    width: 150,
    positon: "relative"
  },
  iconImageSword: {
    height: 90,
    width: 90,
    bottom: 180,
    left: 10,
    postion: "absolute"
  },
});

export default styles;
