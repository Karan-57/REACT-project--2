import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import AuthContext from './context/AuthContext'
import {setLocalStorage, getLocalStorage} from './utils/localStorage'
import { useState } from 'react'

const App = () => {

  const [user, setUser] = useState(null);
  const [isValid, setIsValid] = useState(true);

  const loginHandler = (email,password)=>{
    if(email == 'admin@mail.com' && password == '123'){
      setUser('admin');
      // setIsValid(true);
    }else if(email == 'emp@mail.com' && password == '123'){
      setUser('employee');
      // setIsValid(true);
    }else{
      // alert('invalid credentials');
      setIsValid(false);
    }
  }

  return (

    <AuthContext>
        <div>
          {!user && <Login isValid={isValid} loginHandler={loginHandler}/>}          
          {user === "admin" && <AdminDashboard  setUser={setUser} />}
          {user === "employee" && <EmployeeDashboard  setUser={setUser} />}
        </div>
    </AuthContext>
  )
}

export default App
