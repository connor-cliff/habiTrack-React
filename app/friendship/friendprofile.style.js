import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    width: "95%",
    paddingLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: "95%",
  },
  friendContainer : {
    height: "100%"
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
    marginLeft: 20,
    margineBottom: 2
  },
  name: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.secondary,
    marginTop: 2,
    marginLeft: 2,
    margineBottom: 2,
  },
  nameContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
    habitContainer: {
    marginTop: SIZES.medium,
    height: "100%",
    width: "100%"
  },
    header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.small,
  },
    headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
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
    color: COLORS.secondary,
    marginTop: 15,
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
    tintColor: COLORS.input,
    height: 115,
    width: 115
  },
  profileContainer: { 

  }
});

export default styles;


