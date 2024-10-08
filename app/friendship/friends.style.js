
import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  pageContainer: {
      width: "95%",
      paddingLeft: 25
  },
  container: {
    width: "100%",
  },
  friendContainer : {
    height: "100%"
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
    margineBottom: 2
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    backgroundColor: COLORS.input,
    borderRadius: SIZES.medium,
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchInputFocused: {
    backgroundColor: COLORS.input,
    borderRadius: SIZES.medium,
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  fieldName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.input,
    marginTop: 15,
    marginBottom: 10,
  },
  fieldName2: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,

    marginBottom: 10,
  },
  text : {
    fontSize: SIZES.xLarge,
    color: COLORS.secondary,
    marginTop: 10,
    textAlign: "center"
  },
  friendSearch: {
    marginTop: 20
  },
  iconImage: {
    alignContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default styles;