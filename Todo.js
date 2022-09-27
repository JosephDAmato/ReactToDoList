function Todo({todo, index, remove}){
    function handle(){
        remove(index);
    }
    return <div className="todo" onClick={handle}>
        <ol key={index}>&#x2022;{todo.text}</ol>
    </div>
}