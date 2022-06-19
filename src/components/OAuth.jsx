import { useLocation, useNavigate } from "react-router-dom"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import {doc, setDoc, getDoc, serverTimestamp} from 'firebase/firestore'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import {FcGoogle} from 'react-icons/fc'

const OAuth = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onGoogleAuth = async () =>{
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      //check for user
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

      //if user doesn't exists create user in db
      if(!docSnap.exists()) {

        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        })

      }
      //navigating back to home
      navigate('/')
      
    } catch (error) {
      toast.error('Could not authorize wiht Google')
      
    }

  }
  return (
   <div className="google-btn" onClick={onGoogleAuth}>
  <div className="google-icon-wrapper">
    <FcGoogle className="google-icon"/>
  </div>
  <p className="btn-text">Sign {location.pathname === '/signup' ? 'up': 'in'} with google</p>
</div>
  )
}

export default OAuth