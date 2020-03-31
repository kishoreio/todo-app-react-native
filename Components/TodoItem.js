import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoItem = ({ todo, deleteTodoHandler, uid }) => {
  return (
    <TouchableOpacity onPress={() => deleteTodoHandler(uid)}>
      <View style={styles.todoList}>
        <Text>{todo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoList: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
export default TodoItem;
