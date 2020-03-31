import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import TodoItem from "./Components/TodoItem";
import TodoInput from "./Components/TodoInput";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);
  const addTodoHandler = (addTodo) => {
    setTodoList((prevState) => [
      ...prevState,
      { uid: Math.random().toString(), value: addTodo }
    ]);
    closeModalView();
  };
  const deleteTodoHandler = (id) => {
    setTodoList((prevState) => {
      return prevState.filter((todo) => todo.uid !== id);
    });
  };
  const closeModalView = () => {
    setIsAddModal(false);
  };
  return (
    <View style={styles.root}>
      <Button title="Add TODOs" onPress={() => setIsAddModal(true)} />
      <TodoInput
        addTodoHandler={addTodoHandler}
        visible={isAddModal}
        onClose={closeModalView}
      />
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={todoList}
        renderItem={(itemData) => (
          <TodoItem
            todo={itemData.item.value}
            deleteTodoHandler={deleteTodoHandler}
            uid={itemData.item.uid}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50
  }
});
