import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { heading } from "../styles/heading";
import Transaction from "./Transaction";

export default function TransactionList({ transactions, deleteTransaction }) {
  return (
    <View style={styles.container}>
      <Text style={[heading.h4, heading.subTitle]}>History</Text>
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <Transaction item={item} deleteTransaction={deleteTransaction} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
});
