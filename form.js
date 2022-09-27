function ToDoForm({addToDo}){
    const [value, setValue] = React.useState(''); //manage variable
    
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addToDo(value);
        setValue('');

    }

    return (
        <div className="input">
            <form onSubmit={handleSubmit}>
                <input
                    tpye="text"
                    className="input"
                    value={value}
                    placeholder="Add and press enter"
                    onChange={e => setValue(e.target.value)}    
                />
            </form>
        </div>
    )

    
}