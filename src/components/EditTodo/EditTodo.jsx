import React, { useState } from "react";
import "./EditTodo.css";

const EditTodo = (props) => {
  /* состояние для отредактированного таска в качестве начального
     состояние указали объект с данными для редактирования */
  const [item, setItem] = useState(props.editContact);

  //   функция для синхронизации данных из инпута и состояния item(то что находится под ключом task)
  const handleEditInput = (e) => {
    // копируем содержимое состояние item
    let newObj = { ...item };
    // под ключом task в newObj, помещаем данные из инпута
    newObj.name = e.target.value;
    // обновляем состояние item
    setItem(newObj);
  };

  const handleEditLastName = (e) => {
    // копируем содержимое состояние item
    let newObj = { ...item };
    // под ключом task в newObj, помещаем данные из инпута
    newObj.lastName = e.target.value;
    // обновляем состояние item
    setItem(newObj);
  };
  const handleEditNumber = (e) => {
    // копируем содержимое состояние item
    let newObj = { ...item };
    // под ключом task в newObj, помещаем данные из инпута
    newObj.number = e.target.value;
    // обновляем состояние item
    setItem(newObj);
  };
  const handleEditMail = (e) => {
    // копируем содержимое состояние item
    let newObj = { ...item };
    // под ключом task в newObj, помещаем данные из инпута
    newObj.mail = e.target.value;
    // обновляем состояние item
    setItem(newObj);
  };
  return (
    <div className="main-modal">
      <div className="inner-modal">
        <div className="close">
          <button onClick={props.handleCloseModal}>✖️</button>
        </div>
        <input
          onChange={handleEditInput}
          type="text"
          value={item.name}
          name=""
          id=""
        />
        <input
          onChange={handleEditLastName}
          type="text"
          value={item.lastName}
          name=""
          id=""
        />

        <input
          onChange={handleEditNumber}
          type="number"
          value={item.number}
          name=""
          id=""
        />
        <input
          onChange={handleEditMail}
          type="text"
          value={item.mail}
          name=""
          id=""
        />

        <button onClick={() => props.handleSaveContact(item)}>
          save changes
        </button>
      </div>
    </div>
  );
};

export default EditTodo;
