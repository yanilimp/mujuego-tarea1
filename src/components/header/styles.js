/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
/* eslint-disable import/namespace */
/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/colors";
import { paddings } from "../../constants/theme/paddings";
import { fontsSizes } from "../../constants/theme/fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: paddings.large,
  },
  title: {
    fontSize: fontsSizes.large,
    fontWeight: "bold",
    color: colors.white,
  },
});
