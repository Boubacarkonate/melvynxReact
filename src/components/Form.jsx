import { Plus } from "lucide-react";
import { useState } from "react";

const Form = () => {
  const [todos, setTodos] = useState([
    {
      id: Date.now(),
      todo: "Faire des courses",
      completed: false,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const todoValue = formData.get("todo");

    const newTodo = {
      id: Date.now(),
      todo: todoValue,
      completed: false,
    };

    // Ajoute la nouvelle tâche à la liste des tâches
    setTodos([...todos, newTodo]);

    e.currentTarget.reset();
  };

  const handleDelete = (id) => {
    // Supprime la tâche avec l'id correspondant
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCreate = (id) => {
    // Crée une nouvelle tâche à partir de la tâche existante avec l'id correspondant
    const existingTodo = todos.find((todo) => todo.id === id);
    if (existingTodo) {
      const newTodo = { ...existingTodo, id: Date.now() };
      setTodos([...todos, newTodo]);
    }
  };

  const handleModify = (id) => {
    // Modifier la tâche avec l'id correspondant
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: `${todo.todo} (modifié)` } : todo
      )
    );
  };

  const Todo = ({ todo, onDelete, onCreate, onModify }) => {
    return (
      <div>
        <p>{todo.todo}</p>
        <button
          className="btn btn-error btn-sm"
          onClick={() => {
            onDelete();
          }}
        >
          Supprimer
        </button>
        <button
          className="btn btn-success btn-sm"
          onClick={() => {
            onCreate();
          }}
        >
          Créer
        </button>
        <button
          className="btn btn-warning btn-sm"
          onClick={() => {
            onModify();
          }}
        >
          Modifier
        </button>
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2">
          <input name="todo" type="text" className="grow" placeholder="Todo" />
          <button className="btn btn-outline btn-sm" type="submit">
            <Plus size={16} />
          </button>
        </label>
      </form>
      <div>
        {todos.map((t) => (
          <Todo
            key={t.id}
            todo={t}
            onDelete={() => handleDelete(t.id)}
            onCreate={() => handleCreate(t.id)}
            onModify={() => handleModify(t.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Form;
