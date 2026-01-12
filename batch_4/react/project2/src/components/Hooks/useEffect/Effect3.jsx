import React,{useEffect,useState} from 'react'

const Effect3 = () => {
    const [user,setUser] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>{
           setUser(data)
        })
    },[])


  return (
    <div>

     <h1>Fetch User Data</h1>   
   {user.map(el=>(
      <ul key={user.id}>
        <li> {el.name}</li>
        <li>{el.username}</li>
      </ul>
   ))}



    </div>
  )
}

export default Effect3