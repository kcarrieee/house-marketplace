import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'
import {CgProfile} from 'react-icons/cg'



const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const onChange = (e) => setEmail(e.target.value)

  const onSubmit = async(e) => {
    e.preventDefault()

    try {

      const auth = getAuth()
      await  sendPasswordResetEmail(auth, email)
      toast.success('Email was sent')
      
    } catch (error) {
      toast.error('Could not send email')
      
    }
    
  }
  return (
    <div className="container-sign">
      <header className='sign-header'>
        <h3>Forgot password</h3>
      </header>
      <main className='content-block'>
        <form onSubmit={onSubmit}>
         
           <div className="container-input">
          <CgProfile/>
           <input 
          type="email" 
          className='email-input' 
          placeholder='email' 
          id='email' 
          value={email}
          onChange={onChange}
          />
          </div>
          <Link className='forgot_password_link' to='/signin'>Sign In</Link>
            <div className='reset-btn'>
            <button className='button-sign'>Send Reset Link</button>
            </div>
      
        </form>
      </main>
    </div>
  )
}

export default ForgotPassword