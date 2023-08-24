import React from 'react'

const Jsxexample = () => {
    let name = "MCA React";
    let n1 = 46;
    let n2 = 37;
  return (
    <div>Jsxexample
        <h2>
            checking second
        </h2>
        <h3> Welcome to react {name}</h3>
        <h3>Greater number is {n1>n2?n1:n2}</h3>
    </div>
  )
}

export default Jsxexample