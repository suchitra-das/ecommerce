import { useState } from "react"
import { useNavigate } from "react-router"




function SignIn() {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>()

  const userEmail = "suchitra@gmail.com"
  const userPassword= "123"
  const navigate =useNavigate()

  const handleSubmit = () =>{
    
     if (userEmail === email  && userPassword === password ){
        alert("loggedin succefuly")
        navigate("/home")
     }else {
      alert("wrong email or pass word")
     }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center">
      <div className='text-3xl font-bold '>Log In
      <div className="text-sm font-medium">Need a account?
        <span className="text-sm font-medium underline text-green-800">Create an account</span>
      </div>
      <div className="flex flex-col p-4">
        
        <input className="border w-100 font-medium" placeholder="Enter your Email" type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      </div>
        <div className="flex flex-col p-4">
        
        <input className="border w-100" placeholder="Enter your PassWord" type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      </div>
      <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default SignIn

