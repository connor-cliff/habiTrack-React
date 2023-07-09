import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: SIZES.small / 1.25,
  },
});

export default styles;
