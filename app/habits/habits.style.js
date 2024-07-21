import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  pageContainer: {
    width: "95%",
    paddingLeft: 22,
    marginBottom: 20
  },
  container: {
    width: "100%",
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.input,
    marginTop: 20,
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
    borderRadius: SIZES.medium,
    paddingHorizontal: SIZES.medium,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 95,
  },
  buttonWrapper: {
    flex: 1,
    width: 120,
    height: 60,
    backgroundColor: COLORS.red,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "70%",
  },

  buttonText: {
    fontSize: SIZES.large,
    color: COLORS.input,
    fontFamily: FONT.bold,
  },
  likeBtn: {
    width: 120,
    height: 60,
    borderColor: COLORS.red,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",

  },
  likeBtnImage: {
    width: "70%",
    height: "70%",
    tintColor: COLORS.primary,
  },
  btnText: {
    fontSize: SIZES.large,
    color: COLORS.input,
    fontFamily: FONT.bold,
  },
});

export default styles;
