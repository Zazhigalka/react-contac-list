import React, { useState } from "react";
import "./AddContact.css";

const AddTodo = (props) => {
  // Состояние для того, что бы хранить данные таска, который хотим добавить
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [mail, setMail] = useState("");

  // Функция для синхронизации инпута и стейтом task
  function handleInput(e) {
    setName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }
  function handleNumber(e) {
    setNumber(e.target.value);
  }
  function handleMail(e) {
    setMail(e.target.value);
  }
  // функция которая срабатывает пр нажатии на кнопку add task
  function handleAdd() {
    // проверка на заполненость инпута
    if (!name.trim() || !lastName.trim() || !number.trim() || !mail.trim()) {
      alert("инпут пустой");
      return;
    }

    // собираем новый таск со статусом false,
    //  т.к таск не выполнен изначально, задаем id для редактирования и удаления
    const newContact = {
      name: name,
      lastName: lastName,
      number: number,
      mail: mail,

      id: Date.now(),
    };

    console.log(newContact);
    // функция для добавления нового таска в массив todos,
    //  из которого далее мы будем отображать таски в браузере
    props.handleContact(newContact);
    setName("");
    setLastName("");
    setNumber("");
    setMail("");
  }

  return (
    <div>
      <h2>ADD CONTACT</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        name=""
        id=""
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={handleLastName}
      />
      <input
        type="text"
        placeholder="Number"
        value={number}
        onChange={handleNumber}
      />
      <input
        type="text"
        placeholder="Mail"
        value={mail}
        onChange={handleMail}
      />

      <button onClick={handleAdd}>Add Contact</button>
    </div>
  );
};

export default AddTodo;
