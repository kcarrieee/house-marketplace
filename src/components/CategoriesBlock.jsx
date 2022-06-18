import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

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
                    <div className="category-block">
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80" alt="" />
                    <h3>Places for rent</h3>
                    </div>
                  </SplideSlide>
                   <SplideSlide>
                    <div className="category-block">
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80" alt="" />
                     <h3>Places for sale</h3>
                    </div>
                  </SplideSlide>
                 
                </Splide>
    </div>
  )
}

export default CategoriesBlock