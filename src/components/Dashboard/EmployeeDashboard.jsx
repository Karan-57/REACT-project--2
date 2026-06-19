import Header from './Header'
import TaskCard from '../../components/EmpDashboard/TaskCard'
import TaskList from '../../components/TaskList/TaskList'


const EmployeeDashboard = ({setUser}) => {
  return (
    <div className='bg-[#1c1c1c] h-screen p-10 text-white'> 
      <Header setUser= {setUser}/>
      <div className='flex'>
        
      <TaskCard color='bg-red-400'/>
      <TaskCard color='bg-blue-400'/>
      <TaskCard color='bg-green-400'/>
      <TaskCard color='bg-yellow-400'/>

      </div>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
