import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 6,
    marginLeft: 6,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.small,
    shadowColor: COLORS.secondary,
    marginBottom: 13
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
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 35,
  },
  buttonWrapper: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: COLORS.red,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.xSmall,
    height: "70%",
  },
  buttonText: {
    color: COLORS.white,
    marginRight: 5,
    marginLeft: 5,
  },
  button : {
    width: "50%"
  },
});

export default styles;
