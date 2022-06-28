import { useNavigate,useLocation } from 'react-router-dom'
import { MdOutlineExplore,MdOutlineLocalOffer } from 'react-icons/md'
import { BsBarChart } from 'react-icons/bs'
import { BiMoney } from 'react-icons/bi'


const Sidebar = ({isOpen,setIsOpen}) => {

const navigate = useNavigate();
const location = useLocation();
const matchRoute = (route) =>{
    if(route === location.pathname){
      return true;
    }
  }

  const handleClickBar=(url)=>{
    setIsOpen(false)
    navigate(`${url}`)

  }

  return (
     
      <ul className={`${isOpen ? 'open': 'sidebar'}`}>
            <li className={`sidebar__link ${matchRoute('/')? 'active' : ''}`} onClick={()=> handleClickBar('/')}>
                <MdOutlineExplore/>
                Explore
            </li>
           
            <li className={`sidebar__link ${matchRoute('/offers')? 'active' : ''}`}  onClick={()=> handleClickBar('/offers')} >
               <MdOutlineLocalOffer/>
                Offers
            </li>
           <li className={`sidebar__link ${matchRoute('/category/rent')? 'active' : ''}`}  onClick={()=> handleClickBar('/category/rent')}>
              <BsBarChart/>
                Rent
            </li>
            <li  className={`sidebar__link ${matchRoute('/category/sale')? 'active' : ''}`}  onClick={()=> handleClickBar('/category/sale')}>
               <BiMoney/>
                Sale
            </li>
            </ul>
  )
}

export default Sidebar