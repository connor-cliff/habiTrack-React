import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  pageContainer: {
    width: "95%",
    paddingLeft: 25,
  },
  container: {
    width: "100%",
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
    margineBottom: 2,
  },
  fieldName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
    marginTop: 15,
    marginBottom: 10,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
  },
  iconInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 70,
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: COLORS.input,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  userInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
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
    color: COLORS.lightWhite,
    marginRight: 5,
    marginLeft: 5,
  },
  buttonText: {
    color: COLORS.lightWhite,
  },
});

export default styles;
