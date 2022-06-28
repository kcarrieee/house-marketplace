import { useNavigate } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import {CgProfile} from 'react-icons/cg'
import Sidebar from './Sidebar'



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
    <nav className='navbar'>
        <div className="navbar__logo">
          <AiOutlineMenu className='mobile-menu' onClick={()=>{setIsOpen(!isOpen)}}/>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 9C0 4.02944 4.02944 0 9 0H41C45.9706 0 50 4.02944 50 9V41C50 45.9706 45.9706 50 41 50H9C4.02944 50 0 45.9706 0 41V9ZM31.6621 30.6145L31.662 30.5882H31.653L28.5032 21.5128L28.8416 21.8537L28.8419 21.8539L28.8462 21.8583C29.7847 22.8036 30.7232 23.7488 31.6628 24.6929L31.6633 25.7803C31.664 27.3828 31.6647 28.9854 31.6621 30.5882L31.6621 30.6145ZM28.5031 21.5127L31.653 30.5882L28.8361 30.5885H28.836H28.8359H28.8358C25.3352 30.5889 21.8347 30.5893 18.3339 30.5882L18.3338 30.6115L18.3338 30.5882C18.3315 29.6902 18.332 28.7922 18.3325 27.8942C18.333 26.8294 18.3336 25.7647 18.3296 24.7V24.7001C18.3215 24.7083 18.3135 24.7165 18.3053 24.7247C18.3134 24.7165 18.3214 24.7083 18.3294 24.7002C19.4607 23.5526 20.5962 22.4094 21.7317 21.2661C22.4209 20.5721 23.1101 19.8781 23.7985 19.1832C23.9516 19.0316 24.1028 18.8779 24.2539 18.7243C24.5005 18.4737 24.747 18.2232 25.002 17.9814C25.0038 17.9797 25.0055 17.978 25.0073 17.9763C25.0056 17.978 25.0039 17.9796 25.0023 17.9812C25.3506 18.3411 25.7042 18.6959 26.0579 19.0508C26.2816 19.2753 26.5054 19.4998 26.7278 19.7256C27.3198 20.321 27.9115 20.9168 28.5031 21.5127ZM26.6895 16.2873L28.5031 21.5127L28.5032 21.5128L26.6896 16.2872C26.6895 16.2873 26.6895 16.2873 26.6895 16.2873ZM28.721 14.2342C28.7248 14.2303 28.7287 14.2264 28.7325 14.2225C30.4712 15.9829 32.2151 17.7387 33.959 19.4945C34.7514 20.2924 35.5439 21.0902 36.3359 21.8886C36.3779 21.9321 36.4215 21.9749 36.4654 22.018C36.6602 22.2092 36.8591 22.4043 36.9318 22.6768C37.0005 22.8481 36.9985 23.0314 36.9965 23.2133C36.996 23.2621 36.9954 23.3108 36.9963 23.3592C36.9964 24.8556 36.9964 26.3521 36.9963 27.8485V27.8906C36.9963 30.1211 36.9963 32.3516 36.9968 34.5821C37.053 35.3203 36.3536 36.0098 35.6232 35.9511L34.304 35.9512C33.4246 35.9513 32.5452 35.9514 31.6656 35.9511V35.9512C29.1749 35.9509 26.684 35.9509 24.1932 35.9509C22.2392 35.951 20.2852 35.951 18.3313 35.9509C17.7068 35.9506 17.0823 35.9506 16.4579 35.9506C15.6941 35.9507 14.9304 35.9508 14.1666 35.9502C13.5869 35.8769 13.0763 35.3858 13.0025 34.7976C12.9991 33.6418 12.9999 32.486 13.0008 31.3302V31.3301C13.0011 30.9086 13.0014 30.4871 13.0015 30.0656C13.0073 30.0598 13.013 30.0541 13.0187 30.0483C13.0129 30.0541 13.0071 30.0599 13.0013 30.0657C12.9993 28.8042 12.9998 27.5426 13.0003 26.2811C13.0006 25.5205 13.0009 24.76 13.0006 23.9996C13.0013 23.8746 13.0009 23.7496 13.0005 23.6246C12.9997 23.3679 12.9988 23.1112 13.0076 22.8547C13.0058 22.8159 13.0193 22.7813 13.0329 22.7466C13.0464 22.7121 13.0599 22.6776 13.0581 22.6391C13.0887 22.5874 13.1174 22.5345 13.1461 22.4817C13.1678 22.4417 13.1895 22.4018 13.2119 22.3624C13.31 22.2312 13.4259 22.1159 13.5418 22.0006C13.5811 21.9614 13.6205 21.9222 13.6592 21.8824C16.9333 18.5809 20.2084 15.2801 23.4834 11.9792L24.0059 11.4526C24.147 11.3036 24.3086 11.1681 24.5051 11.1005C24.5321 11.0914 24.5591 11.0815 24.5862 11.0715C24.697 11.0308 24.8087 10.9897 24.9292 11.0026C24.9695 11.0077 25.0125 11.0053 25.0557 11.003C25.1355 10.9986 25.2162 10.9942 25.2823 11.0362C25.5594 11.0905 25.8023 11.2518 25.9971 11.453C26.8247 12.2877 27.6531 13.1217 28.4816 13.9556C28.5102 13.9864 28.5404 14.0157 28.5707 14.045C28.6283 14.1008 28.6859 14.1566 28.7322 14.2226C28.7285 14.2265 28.7247 14.2303 28.721 14.2342Z" fill="#FBFCF6"/>
        </svg> House Market</div>
        <div onClick={()=> navigate('/profile')} className="profile-link"><CgProfile/>profile</div>
     </nav>
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/> 
    </div>
   
  )
}

export default Navbar