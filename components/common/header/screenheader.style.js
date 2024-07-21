import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONT, SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
  header: {
    width: 500,
    height: 40,
    flexDirection: 'row',
    
  },
  textHeader: {
    width: '64%',
    height: 40,
    flexDirection: 'row',
    alignItems: "center",
    
  },
  buttonContainer: {
    width: 40,
    height: 40,
    marginLeft: 15,
    marginBottom: 5,

  },
  textButtonF: {
    fontFamily: FONT.bold,
    fontSize: SIZES.msmall,
    color: COLORS.input,
    marginLeft: 33

  },
  textButtonH: {
    fontFamily: FONT.bold,
    fontSize: SIZES.msmall,
    color: COLORS.input,
    marginLeft: 40

  },
  textButtonC: {
    fontFamily: FONT.bold,
    fontSize: SIZES.msmall,
    color: COLORS.input,
    marginLeft: 40

  },

  buttonImage: (dimension) => ({
    width: dimension,
    height: dimension,
    tintColor: COLORS.input
  })
});

export default styles;
