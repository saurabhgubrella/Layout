import React,{useState} from 'react'

function Note() {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [data, setData] = useState([]);
    const handleChangeName=(e)=>{
        setName(e.target.value)
    }
    const handleChangePass=(e)=>{
        setPass(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    //    setData([...data , name])
       alert(name);
    // console.log(name);
    }
    // console.log(data)
  return (
    <div>
    <h1>This is React Testing Tutorial</h1>
    <div>
    <label for="fname">First name:</label>
    <input type="text" placeholder='enter name' id="fname" onChange={handleChangeName} value={name}/>
    </div>
    <div>
    <label for="fpass">First name:</label>
    <input type="password" placeholder='enter password' id="fpass" onChange={handleChangePass} value={pass}/>
    </div>
    <div>
    <button onClick={handleSubmit}>submit</button>
    </div>

    </div>
  )
}

export default Note;