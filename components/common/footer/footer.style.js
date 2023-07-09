import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: SIZES.small,
    backgroundColor: "#FFF",
    borderTopWidth: 2,
    borderTopColor: COLORS.gray,  
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
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
    color: COLORS.primary,
    fontFamily: FONT.bold,
    padding: 15
  },
});

export default styles;
