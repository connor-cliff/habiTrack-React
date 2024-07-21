import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  pageContainer: {
     marginTop: "50%",
      width: "95%",
      paddingLeft: 25
  },
  container: {
    width: "100%",
  },  
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25
  },
  habi: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxxLarge,
    color: COLORS.secondary,
    marginTop: 2,
    margineBottom: 2
  },
  track: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxxLarge,
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
    marginTop: 15,
    borderColor: COLORS.gray2,
    borderWidth: 2,
    borderRadius: SIZES.medium,
  },
  loginContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    marginTop: 5,
    borderWidth: 2,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
  },
  signupContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    marginTop: 15,
    borderWidth: 2,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
  },
  inputContainerFocused: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    marginTop: 15,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: SIZES.medium,
  },
  inputWrapper: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: COLORS.input,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
    paddingHorizontal: SIZES.medium,

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
  
  forgottenContainer: {
    flexDirection: "row",
    marginLeft: 190,
    height: 30,
    width: 150,
    marginTop: 10,

  },
  forgottenWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: "70%",

  },
  forgottenText: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
  },

  buttonText: {
    fontSize: SIZES.medium,
    color: "#FFF"
  },
  button : {
    width: "50%"
  },
  userInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    borderWidth: 0,
    outlineWidth: 0, 
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: COLORS.gray,
  },
  signupWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 210,
  },
  loginWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 170,
  },
  signupText: {
    fontSize: SIZES.medium,
    color: COLORS.secondary,
    marginRight: 5
  },
  signupText2: {
    fontSize: SIZES.medium,
    color: COLORS.primary
  },
});

export default styles;
