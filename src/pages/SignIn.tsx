

function SignIn() {
  return (
    <div >
      <div className="flex items-center justify-center">
      <div className='text-3xl font-bold '>Log In
      <div className="text-sm font-medium">Need a account?
        <span className="text-sm font-medium underline text-green-800">Create an account</span>
      </div>
      <div className="flex flex-col p-4">
        
        <input className="border w-100 font-medium" placeholder="Enter your Email" type="text"/>
      </div>
        <div className="flex flex-col p-4">
        
        <input className="border w-100" placeholder="Enter your PassWord" type="text"/>
      </div>
      </div>
      </div>
    </div>
  )
}

export default SignIn

