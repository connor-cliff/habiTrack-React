import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 17,
    marginRight: 6,
    marginLeft: 6,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.input,
    ...SHADOWS.small,
    shadowColor: COLORS.secondary,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: "70%",
    height: "70%",
  },
  btn: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.primary,
  },
  iconPosition: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  habitName: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.secondary,
  },
  streak: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.primary,
    marginTop: 3,
    textTransform: "capitalize",
  },
});

export default styles;
