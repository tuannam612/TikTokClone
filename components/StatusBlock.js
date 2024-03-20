import { StyleSheet, Text, View } from "react-native";
export default function StatBlock({ title, count }) {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "#54E3D6",
    fontSize: 18,
  },
  count: {
    fontSize: 30,
    color: "white"
  },
});