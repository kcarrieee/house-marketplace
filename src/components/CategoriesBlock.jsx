import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'

const CategoriesBlock = () => {
  return (
    <div className='categories'><h2>Categories</h2>
    <Splide options={{ 
                perPage:2,
                breakpoints:{
                  600:{
                    perPage:1,
                  },
                  800:{
                    perPage:2,
                  },
                  1100:{
                    perPage:2,
                  },
                },
                arrows:false,
                pagination:false,
                drag:'free',
                gap:'2rem',
                }}>
                  <SplideSlide >
                    <Link to={'/category/rent'}>
                    <div className="category-block">
                    <img src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="rent" />
                    <h3>Places for rent</h3>
                    </div>
                    </Link>
                  </SplideSlide>
                   <SplideSlide>
                    <Link to={'/category/sale'}>
                    <div className="category-block">
                    <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1730&q=80" alt="sell" />
                     <h3>Places for sell</h3>
                    </div>
                    </Link>
                  </SplideSlide>
                 
                </Splide>
    </div>
  )
}

export default CategoriesBlock