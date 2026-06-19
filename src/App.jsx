import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import {AuthContext}  from './context/AuthProvider'
import {setLocalStorage, getLocalStorage} from './utils/localStorage'
import { useContext, useEffect, useState } from 'react'

const App = () => {

  const [user, setUser] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const authData = useContext(AuthContext);

  useEffect(() => {
    if(authData){
      const loggedInUser = localStorage.getItem('loggedInUser');
    }
  }, [authData]);

  console.log(authData)
  


  const loginHandler = (email,password)=>{
    if(email == 'admin@mail.com' && password == '123'){
      setUser('admin');
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
    }else if(authData && authData?.employees?.find((e)=>email == e.email && password == e.password)){
      setUser('employee');
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}));
    }else{
      setIsValid(false);
    }
  }

  return (

        <div>
          {!user && <Login isValid={isValid} loginHandler={loginHandler}/>}          
          {user === "admin" && <AdminDashboard  setUser={setUser} />}
          {user === "employee" && <EmployeeDashboard  setUser={setUser}  />}
        </div>
  )
}

export default App
