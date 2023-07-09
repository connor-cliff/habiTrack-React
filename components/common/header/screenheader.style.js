import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  buttonContainer: {
    width: 40,
    height: 40,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonImage: (dimension) => ({
    width: dimension,
    height: dimension,
    tintColor: COLORS.secondary
  })
});

export default styles;
