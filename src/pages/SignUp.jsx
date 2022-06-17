import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db } from '../firebase.config'
import { useState } from "react"
import {Link, useNavigate} from 'react-router-dom'
import {RiLockPasswordLine} from 'react-icons/ri'
import {MdVisibility} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {RiInputCursorMove} from 'react-icons/ri'
import { doc, setDoc, serverTimestamp } from "firebase/firestore"



const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: ''
  })

  const { name, email, password } = formData
  const navigate = useNavigate()

  const onChange=(e)=>{
    setFormData((prevState)=>({...prevState,
    [e.target.id]:e.target.value
    }))

  }

  const onSubmitForm= async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await  createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      updateProfile(auth.currentUser, {
        displayName: name,
      })
      const FormDataCopy = {...formData}
      delete FormDataCopy.password
      FormDataCopy.timestamp = serverTimestamp()
      await setDoc(doc(db, 'users' , user.uid), FormDataCopy)

      navigate('/')
      
    } catch (err) {
      console.log(err)
      
    }


  }

  return (
    <><div className="explore-block">
      <header className="sign-header">
        <h3>Register now!</h3>
      </header>
      <main className="content-block">
        <form onSubmit={onSubmitForm}>
          <div className="container-input">
          <RiInputCursorMove/>
          <input type="text" className="email-input" placeholder="Name" id="name" value={name} onChange={onChange}/>
          </div>
          <div className="container-input">
          <CgProfile/>
          <input type="email" className="email-input" placeholder="Email" id="email" value={email} onChange={onChange}/>
          </div>
          <div className="container-input">
          <RiLockPasswordLine/>
          <input type={showPassword ? 'text': 'password'} className="password-input" placeholder="Password" id="password" value={password} onChange={onChange}/>
          <MdVisibility className="visible-pass" onClick={()=>{setShowPassword((prev) => !prev)}}/>
          </div>
          <button className="button-sign">Sign up</button>
          <Link to={'/forgot-password'} className="forgot-password-link">Forgot password?</Link>
        </form>

        {/* google auth component */}
         <Link to={'/signin'} className="register-link">Already have an account? <span>Sign in</span></Link>
      </main>
      
      </div></>
  )
}

export default SignUp