import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <div>
      <h2>CONTACT LIST</h2>
      <ul className="ul">
        {/* перебираем массив todos, где на каждый таск возвращаем li  */}
        {props.contact.map((item) => (
          <li key={item.id} className="li">
            <span>{item.name}</span>
            <span>{item.lastName}</span>
            <span>{item.number}</span>
            <span className="last">{item.mail}</span>
            <div>
              <button onClick={() => props.handleEdit(item)}>edit</button>
              <button onClick={() => props.handleDelete(item.id)}>
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
