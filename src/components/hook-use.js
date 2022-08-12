import React, { useState,useEffect } from 'react'
function Example() {
    let [count, setCount] = useState(0)
    useEffect(()=>{
        document.title=`you click ${count} times`
    })
    debugger
    return (<div>
        <div>hook test</div>
        <h2>{count}</h2>
        <button onClick={()=>setCount(++count)}>+</button>
    </div>)
}
export default Example