import React, {useState, useMemo} from 'react'

export default function UseMemo() {
   
const [count, setCount] = useState(0)
const [todos, setTodos] = useState([])

const expensiveCalculations = (num) => {
    console.log('Calculating...')
    for (let i = 0; i = 1000000000000; i++) {
        num += i;
        return num;
    }
}
const calculation = useMemo(() => expensiveCalculations(count), [count]);

const increament = () => {
    setCount((c) => c + 1);
};
const addTodo = () => {
    setTodos((t) => [...t, 'New todo'])  
}



  return (
    <div >
        <div className='my-6 text-center'>
            <h2 className='text-2xl font-bold'>My Todos</h2>
            {todos.map((todo, idx) => (
                    <p key={idx}>{todo}</p>
                ))}
            <button className="px-4 py-2 my-4 bg-blue-500 text-white rounded" onClick={addTodo}>Add todo</button>
        </div>

        <hr/>

        <div className='my-6 text-center'>
            Count: {count}
            <button className="p-2 ml-2.5 bg-blue-500 text-white rounded" onClick={increament}>+</button>
            <h2 className='text-2xl font-bold'>Expensive Calculations</h2>
            {calculation}
        </div>
    </div>
  )
}
