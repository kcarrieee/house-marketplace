import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where, orderBy, limit} from "firebase/firestore"
import { db } from '../firebase.config'
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"
import ListingItem from "../components/ListingItem"


const Category = () => {
    const [listings, setListings] = useState(null)
    const [loading, setLoading] = useState(true)
    const params = useParams()

    const fetchListings = async()=>{
        try {
            const listingsRef = collection(db, 'listings')

            const q = query(
                listingsRef, 
                where('type','==',params.categoryName), 
                orderBy('timestamp', 'desc'),
                limit(10))
            
            const querySnap = await getDocs(q)
            const listings = []
            querySnap.forEach((doc)=>{
                return listings.push({
                    id: doc.id,
                    data: doc.data()
                })
            })
            
            setListings(listings)
            setLoading(false)

            
        } catch (error) {
            toast.error('Could not get listings',{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })
            
        }
    }

    useEffect(()=>{
        fetchListings()
        // eslint-disable-next-line
    },[params.categoryName])

  return (
    <div className="category_layout">
        <h2>{params.categoryName === 'rent'? 'Places for rent': 'Places for sale'}</h2>
        {loading ? <Spinner/>: listings && listings.length > 0 ?
        <>
        <main >
            <ul className="categoryListingsGrid">
               {listings.map((listing)=>(
                <ListingItem listing={listing.data} id={listing.id}
                key={listing.id}/>
               ))}
            </ul>
        </main>
        </> : <p>No listings yet</p>}
    </div>
  )
}

export default Category