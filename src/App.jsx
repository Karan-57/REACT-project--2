import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import AuthContext from './context/AuthContext'
import {setLocalStorage, getLocalStorage} from './utils/localStorage'

const App = () => {
  setLocalStorage();
  return (

    <AuthContext>
        <div>
          {/* <Login/> */}
          {/* <EmployeeDashboard/> */}
          <AdminDashboard/>
        </div>
    </AuthContext>
  )
}

export default App
