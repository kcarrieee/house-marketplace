import { useState } from "react"
import {Link, useNavigate} from 'react-router-dom'
import {RiLockPasswordLine} from 'react-icons/ri'
import {MdVisibility} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"



const SignIn = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData
  const navigate = useNavigate()

  const onChange=(e)=>{
    setFormData((prevState)=>({...prevState,
    [e.target.id]:e.target.value
    }))

  }

  const onSubmit=async(e)=>{
    e.preventDefault()
    try{
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if(userCredential.user){
        navigate('/')
      }
    }catch(err){
      console.log(err)
    }

  }

  return (
    <><div className="explore-block">
      <header className="sign-header">
        <h3>Welcome Back!</h3>
      </header>
      <main className="content-block">
        <form onSubmit={onSubmit}>
          <div className="container-input">
          <CgProfile/>
          <input type="email" className="email-input" placeholder="Email" id="email" value={email} onChange={onChange}/>
          </div>
          <div className="container-input">
          <RiLockPasswordLine/>
          <input type={showPassword ? 'text': 'password'} className="password-input" placeholder="Password" id="password" value={password} onChange={onChange}/>
          <MdVisibility className="visible-pass" onClick={()=>{setShowPassword((prev) => !prev)}}/>
          </div>
          <button className="button-sign" >Sign in</button>
          <Link to={'/forgot-password'} className="forgot-password-link">Forgot password?</Link>
        </form>

        {/* google auth component */}
         <Link to={'/signup'} className="register-link">Don't have an account? <span>Sign up</span></Link>
      </main>
      
      </div></>
  )
}

export default SignIn