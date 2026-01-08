import React, { useState } from "react";

const StudentForm = () => {

    //Form State 
    const [student, setStudent] = useState({
        name:"",
        course:""
    })
    
    const [studentarr,setStudentarr]= useState([])
    const [showForm,setShowForm] = useState(true)


    function handleChange(e){
        setStudent({
          ...student,
          [e.target.name]: e.target.value,
        });
        // console.log(student) 
    }




    function handleSubmit(e){
        e.preventDefault();
        // console.log("hello")

        if(student.name === "" || student.course === "") return;

        setStudentarr([...studentarr,student]);

        // console.log(studentarr)

        setStudent({name:"",course:""})
    }


  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Managment</h2>

    <button onClick={()=>setShowForm(!showForm)}>
        {showForm ? "Hide Form":"Show Form"}
    </button>

      
{showForm && 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Add Student</button>
      </form>

}

      <hr />

      {studentarr.length === 0 ? (
        <p>No Student Found</p>
      ) :(
        studentarr.map((stu)=>(
            <p>{stu.name} - {stu.course} </p>
        ))
      )
      
      
      }
    </div>
  );
};

export default StudentForm;
