import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'

const Contact = () => {
    const [message, setMessage] = useState('')
    const [landlord, setLandlord] = useState(null)
        // eslint-disable-next-line
    const [searchParams, setSearchParams] = useSearchParams()

    const params = useParams()

    useEffect(() => {
        const getLandlord = async () => {
        const docRef = doc(db, 'users', params.landlordId)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            setLandlord(docSnap.data())
        } else {
            toast.error('Could not get landlord data')
        }
        }

        getLandlord()
    }, [params.landlordId])


  return (
    <div >
        <main className='container-sign'>
            <h2 className='sign-header'>Contact LandLord</h2>
            {landlord !== null && (
                <div className='contact_land_lord'>
                    <p>This listing is owned by {landlord?.name}</p>
                    <form>
                        <label htmlFor="message">Message</label>
                        <textarea  className="formInputTextArea" name="message" id="message" value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                         <a
                            href={`mailto:${landlord.email}?Subject=${searchParams.get(
                                'listingName'
                            )}&body=${message}`}
                            style={{textDecoration: 'none'}}
                            >
                            <button type='submit' className='button-sign'>
                                Send Message
                            </button>
                            </a>
                    </form>
                </div>
            )}
        </main>
    </div>
  )
}

export default Contact