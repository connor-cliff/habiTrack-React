import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.input,
    flexDirection: "row",

  },
  logoutContainer: {
    width: 150,
    borderTopWidth: 1,
    borderTopColor: COLORS.secondary,
    backgroundColor: COLORS.input,
  },
  
  wholeMenu: {
    justifyContent: "center",
    alignItems: "center",
  },
  menuOption: {
    flex: 1,
  },
  menuOptionText: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.secondary,
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  menuButtons: {
    marginLeft: 30
  },
  habi: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxxLarge,
    color: COLORS.secondary,
    marginTop: 2,
    margineBottom: 2,
  },
  track: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxxLarge,
    color: COLORS.primary,
    marginTop: 2,
    margineBottom: 2
  },
  habiContainer: {
    height: 200,
    justifyContent: 'flex-end',
    flex: 1
  },
  habiChar: {
    width: 150,
    height: 150,
    left: 230,
    bottom: -30
  },
});

export default styles;
