import axios from "axios"
import { useState } from "react"






const Insert = ()=>{

    const [input, setInput]= useState({})

    const handleInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput (values=>({...values,[name]:value}));
    // console.log(value);

  }
  const handleSubmit=async()=>{

    console.log(input)
    const response = await axios.post("http://localhost:8000/employee/datasave",input);
    console.log(response.data);
  }


    return(
        <>
        <h1>Insert</h1>


        Enter Employee No. <input type="text" name="empno" onChange={handleInput}  />
        <br />
        Enter Employee Name <input type="text" name="empname" onChange={handleInput}  />
        <br />
        Enter Employee Dept <input type="text" name="empdep" onChange={handleInput}  />
        <br />
        Enter Employee Salary <input type="text" name="empsal" onChange={handleInput}  />
        <br />
        <button onClick={handleSubmit}>click</button>
        </>
        

    )
}

export default Insert;
