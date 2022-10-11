import React from "react";
import { StyleSheet, Text } from "react-native";

export default function GoalItem() {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#2ecc71",
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
