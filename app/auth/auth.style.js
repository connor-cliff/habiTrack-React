import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  pageContainer: {
     marginTop: "50%",
      width: "95%",
      paddingLeft: 25
  },
  container: {
    width: "100%",
  },
  habitTracker: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
    color: COLORS.primary,
    marginTop: 2,
    margineBottom: 2
  },
  title: {
    fontFamily: FONT.regular,
    fontSize: SIZES.xLarge,
    color: COLORS.secondary,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    marginTop: 15
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: COLORS.input,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  buttonWrapper: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.xLarge,
    height: "70%",
  },
  buttonText: {
    color: "#FFF"
  },
  button : {
    width: "50%"
  },
  userInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
});

export default styles;
