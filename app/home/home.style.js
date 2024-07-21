import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

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
  habitContainer: {
    marginTop: SIZES.medium,
    height: "100%"
  },
  menuIcon: {
    width: "70%",
    height: "70%",
    paddingLeft: 20,
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:80,
    marginBottom: 50,
  },
  greeting: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.input,
  },
  userName: {
    fontFamily: FONT.regular,
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.input,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  text : {
    fontSize: SIZES.xLarge,
    color: COLORS.secondary,
    marginTop: 10,
    textAlign: "center"
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.small,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  btnImage: {
    width: 80,
    height: 80,
    tintColor: COLORS.gray,
  },
  btnImageContainer: {
    marginTop: 400,
    justifyContent: "center",
    alignItems: "center",
    tintColor: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,

  },
  habiContainer: {
    height: 200,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1
  },
  habi: {
    width: 150,
    height: 150,
    position: 'absolute',
  },
  speachContainer: {
    width: 200,
    left: 0,
    top: 15,
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'flex-start',

  }
});

export default styles;
