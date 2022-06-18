import { useNavigate,useLocation } from 'react-router-dom'
import { MdOutlineExplore,MdOutlineLocalOffer } from 'react-icons/md'
import { BsBarChart } from 'react-icons/bs'
import { BiMoney } from 'react-icons/bi'

const Sidebar = ({isOpen}) => {

const navigate = useNavigate();
const location = useLocation();
const matchRoute = (route) =>{
    if(route === location.pathname){
      return true;
    }
  }
  return (
     
      <ul className={`${isOpen ? 'open': 'sidebar'}`}>
            <li className={`sidebar__link ${matchRoute('/')? 'active' : ''}`} onClick={()=> navigate('/')}>
                <MdOutlineExplore/>
                Explore
            </li>
           
            <li className={`sidebar__link ${matchRoute('/offers')? 'active' : ''}`}  onClick={()=> navigate('/offers')} >
               <MdOutlineLocalOffer/>
                Offers
            </li>
           <li className={`sidebar__link ${matchRoute('/signin')? 'active' : ''}`}  onClick={()=> navigate('/signin')}>
              <BsBarChart/>
                Rent
            </li>
            <li  className={`sidebar__link ${matchRoute('/signup')? 'active' : ''}`}  onClick={()=> navigate('/signup')}>
               <BiMoney/>
                Sale
            </li>
            </ul>
  )
}

export default Sidebar