import React,{useState} from 'react'
import validator from 'validator';


function Home() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [pass, setPass] = useState("");
    const [cnfpass, setCnfpass] = useState("");
    const [fromData, setFromData] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [nameerrorMessage, setNameerrorMessage] = useState("")
    const [emailerrorMessage, setemailerrorMessage] = useState("")
    const [passerrorMessage, setpasserrorMessage] = useState("")
    const [cnfpasserrorMessage, setcnfpasserrorMessage] = useState("")
    // const handleName=(event)=>{
    //  setName(event.target.value)
    // }
    const handleEmail=(event)=>{
        setEmail(event.target.value)
    }
//     const handleDob=(event)=>{
//     setDob(event.target.value)
//    }
    const handlePass=(event)=>{
    setPass(event.target.value)
    }
    const handleCnfpass=(event)=>{
    setCnfpass(event.target.value)
    }
    
    const namevalidate = (str)=>{
      if(str.length >= 6){
    formdata.name = str
       }
       else{
        console.log(false)
       }
    }
    // const ValidateEmail= (email)=>
    // {
    // var mailformat = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    // if(email.match(mailformat))
    // {
    // alert("You have entered a valid email address!");    //The pop up alert for a valid email address
    // return true;
    // }
    // else
    // {
    // alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address 
    // return false;
    // }
    // }   
    
    // const passvalidate = (str)=>{
    //     if(str.length >= 6){
    //  formdata.pass = str
    //      }
    //      else{
    //       console.log("error")
    //      }
    //   }

    //   const cnfpassvalidate = (str)=>{
    //     if(str.length >= 6){
    //     formdata.cpass = str
    //      }
    //      else{
    //       console.log("error")
    //      }
    //   }

    const formdata = {
        name:"",
        email:"",
        pass:"",
        cpass :"",
        dob:""
    }
    console.log(formdata.name,"9090")
    
    const validateDate = (value) => {
    
        if (validator.isDate(value)) {
          setErrorMessage('Valid Date :)')
        } else {
          setErrorMessage('Enter Valid Date!')
        }
      }
      const ValidateEmail = (value) => {
    
        if (validator.isEmail(value)) {
          setemailerrorMessage('Valid Email :)')
        } else {
          setemailerrorMessage('Enter Valid Eamil!')
        }
      }
      const ValidateName = (value) => {
    
        if (validator.isAlphanumeric(value)) {
          setNameerrorMessage('Valid Name:)')
        } else {
          setNameerrorMessage('Enter Valid Name!')
        }
      }

      const ValidatePass = (value) => {
    
        if (validator.isStrongPassword(value)) {
          setpasserrorMessage('Valid Password :)')
        } else {
          setpasserrorMessage('Enter Valid Password!')
        }
      }
      const ValidateCnfpass = (value) => {
    
        if (validator.isStrongPassword(value)) {
          setcnfpasserrorMessage('Valid confirm Password :)')
        } else {
          setcnfpasserrorMessage('Enter Valid confirm Password!')
        }
      }
    
    
      const handleSubmit= (e)=>{
    e.preventDefault()
    setFromData([...fromData ,formdata])
    }
   
    console.log(fromData , "1234")
    // console.log(name,email ,pass ,dob,cnfpass , "123");
  return (
    <div className='container'>
    <form>
  <div className="mb-3">
    <label  className="form-label">FullName</label>
    <input type="text" className="form-control"  onChange={(e)=>ValidateName(e.target.value)}/><br/>
    <span style={{
        fontWeight: 'bold',
        color: 'red',
      }}>{nameerrorMessage}</span>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={(e)=>ValidateEmail(e.target.value)} />
    <br/>
    <span style={{
        fontWeight: 'bold',
        color: 'red',
      }}>{emailerrorMessage}</span>
  </div>
  
  <div style={{
    marginLeft: '200px',
  }}>
    <pre>
      <h2>Validating Date in ReactJS</h2>
      <span>Enter Date: </span><input type="text" 
      onChange={(e) => validateDate(e.target.value)}></input> <br />
      <span style={{
        fontWeight: 'bold',
        color: 'red',
      }}>{errorMessage}</span>
    </pre>
  </div>

  <div className="mb-3">
  <label  className="form-label">Password</label>
  <input  className="form-control"   onChange={(e)=>ValidatePass(e.target.value)} /><br/>
  <span style={{
    fontWeight: 'bold',
    color: 'red',
  }}>{passerrorMessage}</span>
</div>
<div className="mb-3">
<label  className="form-label"> Confirm Password</label>
<input  className="form-control"   onChange={(e)=>ValidateCnfpass(e.target.value)}/><br/>
<span style={{
    fontWeight: 'bold',
    color: 'red',
  }}>{cnfpasserrorMessage}</span>
</div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </div>
  )
}

export default Home;

// <div className="mb-3">
// <label  className="form-label">DOB</label>
// <input  className="form-control" value={dob}  onChange={handleDob}/>
// </div>