import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightWhite,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  wholeMenu: {
    marginLeft: 10
  },
  menuOption: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuOptionText: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.secondary,
  }
});

export default styles;
