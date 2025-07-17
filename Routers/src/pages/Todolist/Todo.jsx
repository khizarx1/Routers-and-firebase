import React, { useEffect, useState } from 'react';

function Todo() {
    const [input, setInput] = useState('');    
    const [todo, setTodo] = useState([]);

    // Load todos from localStorage on initial render
    useEffect(() => {
        const savedTodo = localStorage.getItem('todo');
        setTodo(JSON.parse(savedTodo))
    }, []);

    // Save todos to localStorage whenever the todo state changes
    useEffect(() => {
        if (todo.length > 0) {
            localStorage.setItem('todo', JSON.stringify(todo));
        }
    }, [todo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.includes(input)) {
            alert('Todo already exists');
            return;
        } else if (input === '') {
            alert('Please type something');
            return;
        } else {
            setTodo([...todo, input]);
            setInput('');
        }
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleDelete = (index) => {
        const updatedTodo = todo.filter((_, i) => i !== index);
        setTodo(updatedTodo);
        localStorage.setItem('todo', JSON.stringify(updatedTodo));
    };

    return (
        <div className='w-[600px] p-4 rounded-lg border border-slate-400'>
            <h1 className='py-4 text-3xl text-center font-bold'>Todo List</h1>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-y-2'>
                <div className='flex gap-2'>
                    <input
                        value={input}
                        className='flex-1 p-2 rounded-lg border border-slate-400'
                        onChange={handleChange}
                        type="text"
                        placeholder='Enter your todo'
                    />
                    <button className='py-2 px-6 rounded-lg bg-green-700 text-white'>Add</button>
                </div>

                <div className='p-2 min-h-10 rounded-lg border border-slate-400'>
                    {todo.map((item, idx) => (
                        <p key={idx} className='py-1 relative'>
                            {idx + 1}. {item}
                            <span
                                className='absolute right-5 cursor-pointer'
                                onClick={() => handleDelete(idx)}
                            >
                                ❌
                            </span>
                        </p>
                    ))}
                </div>
            </form>
        </div>
    );
}

export default Todo;

