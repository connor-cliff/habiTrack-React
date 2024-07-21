import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.small,
    backgroundColor: COLORS.input,
    flexDirection: "row",

  },
  logoutContainer: {
  borderTopWidth: 2,
  borderTopColor: COLORS.secondary,
  flex: 1,
  padding: SIZES.small,
  backgroundColor: COLORS.input,
  flexDirection: "row",

  },
  menuOption: {
    flex: 1,
  },
  menuOptionText: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.secondary,
    paddingTop: 4
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 12,
    color: COLORS.primary,
  }
});

export default styles;
