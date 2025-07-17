import React,{useState} from 'react'

function UseState() {


// Counter

const [counter, setCounter] = useState(0)

const handleCount = () => {
    setCounter(counter + 1) 
}

  return (
    <div>
            <button className='my-4 border rounded' onClick={handleCount}>click me</button>
            <div>{counter}</div>
    </div>
  )
}

export default UseState