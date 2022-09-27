function App() {
    const [todos, setTodos] = React.useState([
        {
            text: 'Learn React',
            isCompleted: false,
        },
        {
            text: 'Meet Friend For Lunch',
            isCompleted: false,
        },
        {
            text: 'build to do app',
            isCompleted: false,
        }
    ]);

    const addToDo = text =>{
        const newTodos = [...todos, {text, isCompleted:false}];
        setTodos(newTodos);
    }
    
    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos(temp);
    }
    return(
    <>
      <div className='app'>
        <div className="todo-list">
          <span className='hovertext' data-hover='Click to remove when completed'>
              {todos.map((todo, i) => (
              <Todo index={i} id={i} todo={todo} remove={removeTodo}/>))}
              <ToDoForm addToDo={addToDo} />
          </span>
        </div>
      </div>
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)