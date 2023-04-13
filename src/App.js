
import './App.css';
import {useState} from 'react'
function App() {
  const [value, setValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  
  return (
    <div className="App">
      <div>
        <input onChange={(e) => {
          setValue(e.target.value);
          
        }} />
        <button onClick={() => {
          const newTodoList = todoList.concat([{value: value, state: false}]);
          setTodoList(newTodoList);
        }}>添加</button>
        <ul>
          {
            todoList.map((item, index) => <li><span style={{textDecoration: item.state ? 'line-through' : null}}>{item.value}</span><button onClick={() => {
              const newTodoList = todoList.map((k, i) => {
                if(i === index) {
                  k.state = !k.state;
                }
                return k;
              })
              setTodoList(newTodoList);
            }}>完成</button><button onClick={() => {
              const newTodoList = [...todoList.slice(0, index), ...todoList.slice(index + 1)];
              setTodoList(newTodoList);
            }}>删除</button></li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
