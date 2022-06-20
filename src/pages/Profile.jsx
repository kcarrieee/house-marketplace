import {  getAuth, updateProfile } from "firebase/auth"
import { useState } from "react"
import { updateDoc, doc } from "firebase/firestore"
import { db } from '../firebase.config'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import {BsArrowRight} from 'react-icons/bs'
import {BiHomeCircle} from 'react-icons/bi'


const Profile = () => {
    const auth = getAuth()
    const navigate = useNavigate()

    const [changeDetails, setChangeDetails] = useState(false)
    const [formData, setFormData] = useState({
      name: auth.currentUser.displayName,
      email: auth.currentUser.email,
    })

    const {name, email} = formData

    const onLogOut = () => {
      auth.signOut()
      navigate('/')
    }
    const onSubmit = async() => {
      try {
        if(auth.currentUser.displayName !== name){

          //Update display name
          await updateProfile(auth.currentUser,{
            displayName:name,
          })

          //update in firestore
          const userRef =  doc(db, 'users', auth.currentUser.uid)
          await updateDoc(userRef,{
            name
          })}
        
      } catch (error) {
        toast.error('Could not update details', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }}

    const onChange = (e) =>{
      setFormData((prevState)=>({
        ...prevState,
        [e.target.id]: e.target.value,
      }))
    }


  return (
    <div className="profile">
      <header className="profile__header">
        <h1 className="profile__header__title">My Profile</h1>
       <button onClick={onLogOut} className='button-sign button-sign--small'>Log out</button>
      </header>
      <main className="profile__details">
        <div className="profile__details__container">
          <p>Personal details</p>
          <p className="profile__details__btn" onClick={()=>{
            changeDetails && onSubmit()
            setChangeDetails((prev) => !prev)

          }}>{changeDetails ? 'done': 'change'}</p>
        </div>
        <div className="profile__card">
          <form className="profile__card__form">
            <input 
            type="text" 
            id="name" 
            className={!changeDetails ? 'profile__name': 'profile__name--active'} 
            disabled={!changeDetails}
            value={name}
            onChange={onChange}
            />
             <input 
            type="email" 
            id="email" 
            className={!changeDetails ? 'profile__name': 'profile__name--active'} 
            disabled={!changeDetails}
            value={email}
            onChange={onChange}
            />

          </form>
        </div>
               <Link to='/create-listing' className="create__listing_btn"><BiHomeCircle/> <p> Create a listing </p> <BsArrowRight/></Link>
      </main>
    </div>
  )
}
export default Profile