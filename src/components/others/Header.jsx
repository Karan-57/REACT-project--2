const Header = ({setUser, setLoggedInUserData, loggedInUserData}) => {
  const logoutHandler = ()=>{
    setUser(null);
    setLoggedInUserData(null);
    localStorage.setItem('loggedInUser',null);
  }


  return (

    
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-medium">Hello <br/> <span className="text-3xl font-semibold">{loggedInUserData.name}</span></h1>
      <button onClick={()=>{
        logoutHandler();
      }} className="bg-red-600 font-medium text-2xl rounded-lg px-3 py-2">Logout</button>
    </div>
  )
}

export default Header
