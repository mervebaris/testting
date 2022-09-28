import {useState} from 'react'
const defaultItems = [
  {
    name: "item1",
  },
  {
    name: "item2",
  },
  {
    name: "item3",
  }
]; 

function Todo() {
    const [text, setText] = useState('')
    const [items, setItems] = useState(defaultItems);
  return (
    <div>
      <label>
        Text
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button onClick={() => setItems((prev) => [...prev, { name: text }])}>
        Add
      </button>
      <br /> <br />
      {items.map((item, key) => (
        <div key={key}>{item.name}</div>
      ))}
    </div>
  );
}

export default Todo;