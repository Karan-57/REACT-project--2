import Header from "./Header"
import CreateTaskForm from "./CreateTaskForm"
import ActiveTask from "./ActiveTask"


const AdminDashboard = ({setUser, setLoggedInUserData, userData}) => {

  return (
    <div className="bg-[#1c1c1c] min-h-screen p-10 text-white">
      <Header setUser={setUser}  setLoggedInUserData={setLoggedInUserData} userData={userData}/>
      <CreateTaskForm/>
      <ActiveTask/>
    </div>
  )
}

export default AdminDashboard
