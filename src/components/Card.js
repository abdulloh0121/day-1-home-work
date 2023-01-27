import { useState } from "react";

function Card() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([
    {
      id: 1,
      titel: "titel 1",
      completed: true,
    },
  ]);

  const addTodohandler = () => {
    const newTodo = {
      id: Math.random().toString(),
      titel: input,
    };
    setTodo([...todo, newTodo]);
    setInput("");
  };

  const deletehandler = (id) => {
    const result = todo.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    setTodo(result);
  };
  return (
    <div className="App container mt-5">
      <div className="card">
        <div className="card-header">
          <input
            value={input}
            onChange={(evt) => setInput(evt.target.value)}
            className="form-control"
            type="text"
            placeholder="Add todo"
          />
          <button
            onClick={addTodohandler}
            className="btn btn-primary form-control mt-3 "
          >
            Add todo
          </button>
        </div>
        <div className="card-body">
          <ul className="list-group">
            {todo.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between"
              >
                <p
                  style={{
                    textDecoration: todo?.completed ? "line-through" : "",
                  }}
                >
                  {item.titel}
                </p>
                <div className="d-flex gap-3">
                  <button className="btn btn-info text-white">edd</button>
                  <button
                    onClick={() => deletehandler(item.id)}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Card;
