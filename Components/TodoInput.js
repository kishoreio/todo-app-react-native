import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const TodoInput = ({ addTodoHandler, visible, onClose }) => {
  const [addTodo, setAddTodo] = useState("");
  const todoInputHandler = (newTodo) => {
    setAddTodo(newTodo);
  };
  const onTodoInputHandler = (addTodo) => {
    addTodoHandler(addTodo);
    setAddTodo("");
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter the new todo"
          style={styles.input}
          onChangeText={todoInputHandler}
          value={addTodo}
        />
        <View style={styles.button}>
          <Button title="CANCEL" color="red" onPress={onClose} />
          <Button title="ADD" onPress={() => onTodoInputHandler(addTodo)} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: "80%"
  },
  button: {
    flexDirection: "row",
    marginTop: 20
  }
});
export default TodoInput;
