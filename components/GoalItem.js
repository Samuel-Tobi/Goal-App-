import { StyleSheet, Text, View, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <Pressable onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
