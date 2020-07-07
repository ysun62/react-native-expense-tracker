import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { numberWithCommas } from "../utils/format";

export default function TransactionList({ item, deleteTransaction }) {
  let sign = item.amount < 0 ? "-" : "+";

  return (
    <TouchableOpacity
      style={[styles.listItem, item.amount < 0 ? styles.minus : styles.plus]}
    >
      <View style={styles.listItemView}>
        <View style={styles.viewWrapper}>
          <FontAwesome
            name="remove"
            size={20}
            color="firebrick"
            onPress={() => deleteTransaction(item.id)}
          />
          <Text style={[styles.ml, styles.color]}>{item.name}</Text>
        </View>
        <Text style={styles.color}>
          {" "}
          {sign}${numberWithCommas(Math.abs(item.amount).toFixed(2))}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "white",
    justifyContent: "space-between",
    position: "relative",
    padding: 10,
    marginTop: 10,
  },
  viewWrapper: {
    flexDirection: "row",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ml: {
    marginLeft: 5,
  },
  color: {
    color: "#333",
  },
  plus: {
    borderRightColor: "#2ecc71",
    borderRightWidth: 5,
  },
  minus: {
    borderRightColor: "#c0392b",
    borderRightWidth: 5,
  },
});
