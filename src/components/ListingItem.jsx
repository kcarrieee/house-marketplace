import { Link } from "react-router-dom"
import {MdOutlineDeleteOutline, MdBed} from 'react-icons/md'
import {BiBath} from 'react-icons/bi'


const ListingItem = ({listing, id, onDelete}) => {
  return (
    <li className="categoryListing">
        <Link to={`/category/${listing.type}/${id}`} 
        className='categoryListingLink'>
            <img 
            src={listing.imageUrls[0]} 
            alt={listing.name} 
            className='categoryListing__img'/>
            <div className="categoryListing__details">
                <p className="categoryListing__details__name">
                    {listing.name}
                </p>
                <p className="categoryListing__details__location">
                    {listing.location}
                </p>
                <p className="categoryListing__details__price">
                    ${listing.offer ? listing.discountedPrice : listing.regularPrice }
                    {listing.type === 'rent' && ' / Month'}
                </p>
                <div className="categoryListing__Info">
                    <div className="categoryListing__Info__item">
                    <MdBed/> <p>{listing.bedrooms > 1 ? `${listing.bedrooms} bedrooms` : ' 1 bedroom'}</p>
                    </div>
                    <div className="categoryListing__Info__item">
                    <BiBath/> <p>{listing.bathrooms > 1 ? `${listing.bathrooms} bathrooms` : ' 1 bathrooms'}</p>
                    </div>

                </div>
            </div>
        </Link>
        {onDelete && (<MdOutlineDeleteOutline
        onClick={()=>{onDelete(listing.id,listing.name)}}
        />)}

    </li>
  )
}

export default ListingItem