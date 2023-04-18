import React,{useState} from 'react'

function List() {
    const [val, setVal] = useState();
    const [info, setInfo] = useState(["saurabh" , "rishab" , "sunil" , "anil"]);
    const [flagp, setFlagp] = useState(true);
    const [details, setDetails] = useState([])

    const handleChange=(e)=>(
     setVal(e.target.value)
    )

    const handleSubmit=(e)=>(
        e.preventDefault(),
        setInfo([...info , val]),
        setVal("")
        
    )
    const sortfilter=()=>{
    const handlefilter=(element)=>{
     if(element === "saurabh"){
        return true;
     }
     else{
        return( false,
        setFlagp(!flagp)
        )
     }
    }

    info.forEach((element)=>{
        if(handlefilter(element)=== false){
            details.push(element)
        }
    })
}
    

    // function checkData(data){
    //     var PATTERN = "saurabh"
    //     if(data.includes(PATTERN)){
    //         console.log("cannot input data")
    //     }else{
    //         setDetails(data)
    //     }
    // }
  return (
    <div>
    <div>
    <input onChange={handleChange} value={val}/>
    <button onClick={handleSubmit}>Submit</button>
    <br></br>
    <button onClick={sortfilter}>filter</button>
    </div>
    <ul>
    {flagp && info ? (info.map((data)=><li>{data}</li>)):(details.map((data)=><li>{data}</li>))}
    
</ul>
  </div>
  )
}

export default List;

// <input onChange={handleChange} value={val}/>
//     <button onClick={(e)=>handleSubmit(e)}>submit</button>