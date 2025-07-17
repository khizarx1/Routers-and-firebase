import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';

function UseContext() {

const [count, setCount] = useState(0);

const handleIncreament = () => {
    setCount((c) => c + 1)
};

const handleDecreament = () => {
    count > 0 && setCount((c) => c - 1);
};

const handleReset = () => {
    setCount(0)
}



  return (
    <div className='text-center'>
        
        <h1 className='text-4xl font-semibold'>UseContext Hook</h1>
            <button className="p-2 my-4 bg-green-600 text-white rounded cursor-pointer" onClick={handleIncreament}>Increament</button>
            <p className='py-4 font-bold text-lg'>{count}</p>
            <button className="p-2 my-4 bg-red-600 text-white rounded cursor-pointer" onClick={handleDecreament}>Decreament</button>

            <hr/>

            <button className="p-2 my-4 bg-blue-500 text-white rounded cursor-pointer" onClick={handleReset}>Reset</button>
            
            <hr/>

            <Link to='/' className="p-2 my-4 bg-yellow-500 rounded cursor-pointer">Go to Home</Link>
    </div>
  )
}

export default UseContext