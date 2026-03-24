import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';


function SignIn() {
  const [email, setEmail] = useState("")
  const [PassWord, setPassWord] = useState("")
  const navigate = useNavigate()

  const userEmail = "suchitra@gmail.com"
  const userPassword = "123456"


  const handleClick = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (userEmail === email && userPassword === PassWord) {

      navigate("/home")
    } else {
      alert("wrong PassWord")
    }
  }

  return (
    <form onSubmit={(e) => handleClick(e)} className="w-max-400  flex items-center justify-center m-10">
      <div className="flex items-center justify-center border-2 rounded-2xl m-10 p-40 gap-6 h-110 w-110">
        <div className=''>
          <div className="text-2xl font-medium pl-8">Log in</div>
          <div className="text-sm font-normal pl-8 text-black">Need a account?
            <span className="text-sm font-medium underline text-green-800">Create an account</span>
          </div>
          <div className="flex flex-col p-4">
            <label className="text-md font-medium pl-4 text-black">
              Email :
              <input className="border px-8 py-2 font-medium rounded-lg" placeholder="Enter your Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
          <div className="flex flex-col p-4">
            <label className="text-md font-medium pl-4 text-black">
              Password :

              <input className="border rounded-lg px-8 py-2 font-medium" placeholder="Enter your PassWord" type="text" value={PassWord} onChange={(e) => setPassWord(e.target.value)} />
            </label>
            <div className="flex p-5">
              <Button type="submit"
                className={`${(email === "" || PassWord === "") ? "bg-green-900  cursor-not-allowed px-6 py-4" : "bg-green-800 px-6 py-4 text-white cursor-pointer"}`}
                disabled={(email === "" || PassWord === "") ? true : false}>Log In</Button>
            </div>
          </div>


        </div>
      </div>
    </form>
  )
}

export default SignIn

