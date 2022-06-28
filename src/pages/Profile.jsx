import {  getAuth, updateProfile } from "firebase/auth"
import { useState, useEffect } from "react"
import { updateDoc, doc, collection, getDocs, query, where, orderBy, deleteDoc } from "firebase/firestore"
import { db } from '../firebase.config'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import {BsArrowRight} from 'react-icons/bs'
import {BiHomeCircle} from 'react-icons/bi'
import ListingItem from '../components/ListingItem'


const Profile = () => {
    const auth = getAuth()
    const navigate = useNavigate()
    const [loading, setLoading]= useState(true)
    const [listings, setListings]= useState(null)

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

    const onDelete = async (listingId) => {
      await deleteDoc(doc( db, 'listings', listingId ))
      const updatedListings = listings.filter((listing)=> listing.id !== listingId)
      setListings(updatedListings)
      toast.success('Listing was deleted')


    }

    useEffect(()=>{
      const FetchUserlistings= async() => {
        const listingRef = collection(db, 'listings' )
        const q = query(listingRef,where('userRef', '==', auth.currentUser.uid),
        orderBy('timestamp', 'desc'))

        const querySpan = await getDocs(q)
        const listings = []
        querySpan.forEach(doc => (listings.push({
          id: doc.id,
          data: doc.data(),
        })))

        setListings(listings)
        setLoading(false)

      }
      FetchUserlistings()
    },[auth.currentUser.uid])

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
              {!loading && listings?.length > 0 && (
                <div className="profile_listings">
                  <h3>Your listings</h3>
                  <ul>
                    {listings.map(listing =>(
                      <li>
                      <ListingItem 
                      key={listing.id} 
                      listing={listing.data} 
                      id={listing.id}
                      onDelete={()=> onDelete(listing.id)}
                      />
                      </li>

                    ))}
                  </ul>
                </div>
              )}
      </main>
    </div>
  )
}
export default Profile