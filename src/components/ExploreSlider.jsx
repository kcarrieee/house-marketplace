import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase.config'
import Spinner from './Spinner'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const ExploreSlider = () => {
    const [loading, setLoading] = useState(true)
    const [listings, setListings] = useState(null)

    const navigate = useNavigate()

      useEffect(() => {
        const fetchListings = async () => {
      const listingsRef = collection(db, 'listings')
      const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5))
      const querySnap = await getDocs(q)

      let listings = []

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })

      setListings(listings)
      setLoading(false)
    }

        fetchListings()
    }, [])

    if (loading) {
        return <Spinner />
    }

    if (listings.length === 0) {
        return <></>
    }
  return (
       listings && (
      <>
        <Splide options={{ 
                perPage:4,
                breakpoints:{
                  600:{
                    perPage:2,
                    gap: '1rem'
                  },
                  800:{
                    perPage:2,
                  },
                  1100:{
                    perPage:3,
                  },
                },
                arrows:false,
                pagination:false,
                drag:'free',
                gap:'3rem',
                }}>
          {listings.map(({ data, id }) => (
            <SplideSlide
              key={id}
              onClick={() => navigate(`/category/${data.type}/${id}`)}
            >
                    <div className="slide-block">
                      <div className="slide-block-info">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.75">
                    <circle cx="20" cy="10" r="10" fill="#FAFAFA" fillOpacity="0.3"/>
                    <circle cx="20" cy="10" r="9" stroke="#FAFAFA" strokeOpacity="0.75" strokeWidth="2"/>
                    <path d="M20 6.66667H20.0083M20 10V13.3333" stroke="#FAFAFA" strokeOpacity="0.75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </svg>
                    <h3>{data.name} - ${data.discountedPrice ?? data.regularPrice}
                        {data.type === 'rent' && '/ month'}</h3>
                    </div>
                    <img src={data.imgUrls[0]} alt={data.name} />
                    </div>
                  
            </SplideSlide>
          ))}
       </Splide>
      </>
    )
  )
}

export default ExploreSlider