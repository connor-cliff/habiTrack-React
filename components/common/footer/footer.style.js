import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "88%",
    height: 70,
    marginTop: 5,
    marginBottom: 30,
    marginLeft: 22,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.primary,

  },
  iconPosition: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeBtn: {
    width: 120,
    height: 60,
    borderColor: "#F37453",
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
