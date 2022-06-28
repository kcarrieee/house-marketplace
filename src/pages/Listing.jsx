import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { db } from '../firebase.config'
import Spinner from '../components/Spinner'
import { BsLink45Deg } from 'react-icons/bs'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';




const Listing = () => {
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(true)
    const [linkShare, setLinkShare] = useState(false)

    const navigate = useNavigate()
    const params = useParams()
    const auth = getAuth()

    useEffect(() => {
        const fetchListing = async () => {
            const docRef = doc(db,'listings', params.listingId)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setListing(docSnap.data())
                setLoading(false)
            }

        }

        fetchListing()

    },[navigate, params.listingId])

    if (loading) {
        return <Spinner/>
    }

  return (
    <main className='explore-block'>
         <Splide options={{ 
                perPage:1,
                arrows:false,
                pagination:true,
                drag:'free',
                }}>
            {listing.imgUrls.map((img, index)=>(
            < SplideSlide key={index} >
                <div className='listing-img'>
                <img src={listing.imgUrls[index]} alt="house"  />
                </div>
            </ SplideSlide>
            ))}
        </Splide>
        <div className="share-icon" onClick={()=>{
            navigator.clipboard.writeText(window.location.href)
            setLinkShare(true)
            setTimeout(()=>{
                setLinkShare(false)
            }, 3000)
        }}>
            <BsLink45Deg/>
        </div>
        {linkShare && <p className="link-copy-message">Link copied</p>}
        <div className="listingitem">
            <h2 className="listingitem__name">{listing.name} - ${listing.offer ? listing.discountedPrice: listing.regularPrice }</h2>
            <p className="listingitem__location">{listing.location}</p>
            <div className="sale-and-discount">
                <p className="listingitem__type">
                For {listing.type === 'rent' ? 'Rent': 'Sale'}</p>
                {listing.offer && ( <div className="listingitem__discount">
                    ${listing.regularPrice-listing.discountedPrice} discount
                </div>)}
            </div>
   
            <ul  className="listingitem__details">
                <li>
                    {listing.bedrooms > 1 ? `${listing.bedrooms} bedrooms`: `${listing.bedrooms} bedroom`}
                </li>
                 <li>
                    {listing.bathrooms > 1 ? `${listing.bathrooms} bathrooms`: `${listing.bathrooms} bathroom`}
                </li>
                 <li>
                    {listing.parking ? 'Parking is available 24/7' : 'Parking is not available'}
                </li>
                  <li>
                    {listing.furnished && 'Furnished'}
                </li>
            </ul>
            {auth.currentUser?.uid !== listing.userRef && (
                <Link to={`/contact/${listing.userRef}?listingName=${listing.name}`}>Contact Landlord</Link>
            ) }

        </div>
    </main>
  )
}

export default Listing