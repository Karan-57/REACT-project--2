import Login from './components/Auth/Login'
import EmployeeDashboard from './components/EmpDashboard/EmployeeDashboard'
import AdminDashboard from './components/AdminDashboard/AdminDashboard'
import {AuthContext}  from './context/AuthProvider'
import {setLocalStorage, getLocalStorage} from './utils/localStorage'
import { useContext, useEffect, useState } from 'react'
import Loading from './components/others/Loading'

const App = () => {

  const [user, setUser] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const authData = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(authData.userData){
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      if(loggedInUser){
        const roleArray = loggedInUser.role === 'admin' ? authData.userData.admins : authData.userData.employees;
        const currentUser = roleArray.find(
          (u)=>u.email === loggedInUser.email
        );
        setLoggedInUserData(currentUser);
        setUser({role:loggedInUser.role});
        
      }
      setIsLoading(false);
    }
  }, [authData.userData]);

  

  
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
      const admin = authData?.userData?.admins?.find((e)=>email == e.email && password == e.password);
      const employee=authData?.userData?.employees?.find((e)=>email == e.email && password == e.password);
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
          {isLoading && <Loading/>}
          {!isLoading && !user && <Login isValid={isValid} loginHandler={loginHandler} />}          
          {user?.role == "admin" && <AdminDashboard  setUser={setUser}  setLoggedInUserData={setLoggedInUserData} loggedInUserData={loggedInUserData}/>}
          {user?.role == "employee" && <EmployeeDashboard  setUser={setUser}   setLoggedInUserData={setLoggedInUserData} loggedInUserData={loggedInUserData}/>}
        </div>
  )
}

export default App
