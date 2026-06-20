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
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(() => {
    if(authData){
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      if(loggedInUser){
        const roleArray = loggedInUser.role === 'admin' ? authData.admins : authData.employees;
        const currentUser = roleArray.find(
          (u)=>u.email === loggedInUser.email
        );
        setLoggedInUserData(currentUser);
        setUser({role:loggedInUser.role});
        
      }
    }
  }, [authData]);

  

  
  const login = (role, userData) => {

    setUser({ role });

    setLoggedInUserData(userData);

    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({role:role,email:userData.email})
    );

  };
  


  /*const loginHandler = (email,password)=>{
    if(email == 'admin@mail.com' && password == '123'){
      setUser({role:'admin'});
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}));
      // setLoggedInUserData()
    }else if(authData){
      const employee = authData?.employees?.find((e)=>email == e.email && password == e.password)
      if(employee){
        setUser({role:'employee'});
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}));
        setLoggedInUserData(employee);
      }
    }else{
      setIsValid(false);
    }
  }*/

   const loginHandler = (email,password)=>{
    if(authData){
      const admin = authData?.admins?.find((e)=>email == e.email && password == e.password);
      const employee=authData?.employees?.find((e)=>email == e.email && password == e.password);
      if(admin){
        
        login('admin',admin);
      }else if(employee){
        login('employee',employee);
      }else{
        setIsValid(false);
      }

    }
  }

  return (
        <div>
          {!user && <Login isValid={isValid} loginHandler={loginHandler} />}          
          {user?.role == "admin" && <AdminDashboard  setUser={setUser}  setLoggedInUserData={setLoggedInUserData} userData={loggedInUserData}/>}
          {user?.role == "employee" && <EmployeeDashboard  setUser={setUser}   setLoggedInUserData={setLoggedInUserData} userData={loggedInUserData}/>}
        </div>
  )
}

export default App
