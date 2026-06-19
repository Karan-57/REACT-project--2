import { useState } from "react";

const Login = ({isValid, loginHandler}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault();
    loginHandler(email, password);
    setEmail('');
    setPassword('');
  }



  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-emerald-500 rounded-2xl p-20 w-1/3">
        <form
        onSubmit={(e)=>{
          submitHandler(e);
        }}
        className="flex flex-col gap-14 items-center justify-center h-90 ">
            <input required
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
            }
            }
            type="email" placeholder="email" className="outline-none border-2 w-full border-emerald-500 rounded-full text-xl px-6 py-4 text-white"/>
            <input 
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }
            }
            type="password" placeholder="password" className="outline-none border-2 w-full border-emerald-500 rounded-full text-xl px-6 py-4 text-white"/>
            <button className="w-full border-none bg-emerald-500 rounded-full text-2xl px-6 py-4 text-white font-semibold  active:scale-95">Login</button>
            <div className="h-5">
              {!isValid && (
                <p className="text-red-700 text-sm font-medium">
                  Invalid email or password
                </p>
              )}
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
