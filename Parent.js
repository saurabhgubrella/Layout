import React,{useState} from 'react';
import Child from './Child';

function Parent() {
    const [message, setMessage] = useState("Hello All")
    const chooseMessage=(message)=>{
        setMessage(message)
    }
  return (
    <div>
    <span>Parent</span>
    <h1>{message}</h1>
    <Child chooseMessage={chooseMessage}/>
    </div>
  )
}

export default Parent