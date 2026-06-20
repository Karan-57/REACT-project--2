import Header from './Header'
import TaskCard from '../../components/EmpDashboard/TaskCard'
import TaskList from '../../components/TaskList/TaskList'


const EmployeeDashboard = ({setUser, setLoggedInUserData, userData}) => {
  return (
    <div className='bg-[#1c1c1c] h-screen p-10 text-white'> 
      <Header setUser= {setUser} setLoggedInUserData={setLoggedInUserData} userData={userData}/>
      <div className='flex'>
        
      <TaskCard color='bg-blue-400' type={"new"}/>
      <TaskCard color='bg-green-400' type={"completed"}/>
      <TaskCard color='bg-yellow-400' type={"active"}/>
      <TaskCard color='bg-red-400' type={"failed"}/>

      </div>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
