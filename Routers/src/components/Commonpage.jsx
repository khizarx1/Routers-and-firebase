import React from 'react'

function Commonpage({text, customClass}) {
  return (
    <>
       <h1 className={`text-5xl text-center font-bold ${customClass}`}>{text ? text : 'Common page component'}</h1>
    </>
  )
}

export default Commonpage