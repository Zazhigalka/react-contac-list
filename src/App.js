import React, { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import EditTodo from "./components/EditTodo/EditTodo";

const App = () => {
  /* состояние, в котором будут хранится все таски,
  из этого состояния мы потом будем отображать таски в браузере */
  const [contact, setContact] = useState([]);

  // состояние для отображения модального окна
  const [modal, setModal] = useState(false);
  // состояние для редактируемого таска
  const [editContact, setEditContact] = useState({});

  // функция для обновления состояния todos
  const handleContact = (newObj) => {
    // копируем все что было в todos
    let newContact = [...contact];
    // добавили новый таск в newTodos
    newContact.push(newObj);
    // обновили состояние
    setContact(newContact);
  };

  // console.log(todos);

  // функция, которая срабатывает при нажатии на кнопку edit

  const handleEdit = (contactToEdit) => {
    //  отображаем модальное окно
    setModal(true);
    // в состояние editTodo, закидваем редактируемый таск, который получаем при вызове функции
    setEditContact(contactToEdit);
  };

  // функция для закрытия модального окна
  const handleCloseModal = () => {
    setModal(false);
  };

  // функция для сохранения отредактированного таска
  const handleSaveContact = (updatedContact) => {
    /* перебираем todos, и в случае, если id какого-то item'a совпадает
     с id updatedTask, то внутри map'a, мы возвращаем updatedTask вместо
      item'a, в остальных случаях возвращается item без изменений */
    const newContact = contact.map((item) => {
      if (item.id == updatedContact.id) {
        return updatedContact;
      }
      return item;
    });

    // обновляем состояние todos
    setContact(newContact);
    // закрываем модальное окно
    handleCloseModal();
  };

  // функция для удаления
  const handleDelete = (id) => {
    /* фильтруем todos, возвращая все элементы,
     у которых id не совпадает с тем id который
      передали при вызове */
    let newContact = contact.filter((item) => item.id !== id);
    // обновили состояние
    setContact(newContact);
  };

  return (
    <div>
      <AddTodo handleContact={handleContact} />
      <TodoList
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        contact={contact}
      />
      {modal ? (
        <EditTodo
          handleSaveContact={handleSaveContact}
          editContact={editContact}
          handleCloseModal={handleCloseModal}
        />
      ) : null}
    </div>
  );
};
export default App;
