import React, {useContext} from 'react'
import { UserContext } from './UserContext'

const Dashboard = () => {
 const {user,setUser} = useContext(UserContext)

 

  return (
    <div>
        <h1>Welcome {user}</h1>
    </div>
  )
}

export default Dashboard