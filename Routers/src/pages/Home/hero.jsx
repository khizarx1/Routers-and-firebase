import React, {useState} from 'react'

function hero() {

const [color, setColor] = useState('')    

  return (
    <div className='text-center'>
      <h1 className='pb-4 text-4xl font-bold'>My favorite button color is {color}!</h1>
      <button
        type="button"
        className='p-1 mx-2 border border-slate-500 bg-green-500 rounded'
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        className='p-1 mx-2 border border-slate-500 bg-green-500 rounded'
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        className='p-1 mx-2 border border-slate-500 bg-green-500 rounded'
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        className='p-1 mx-2 border border-slate-500 bg-green-500 rounded'
        onClick={() => setColor("green")}
      >Green</button>
      <br/>
      <br/>
      
      <button style={{backgroundColor: `${color}`}}>I' am a Button</button>
    </div>
  )
}

export default hero