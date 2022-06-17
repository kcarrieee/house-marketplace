import Button from "../components/Button";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import CategoriesBlock from "../components/CategoriesBlock";


const Explore = () => {
  return (
    <div className="explore-block">
      <div className="banner">
        <h1>Popular and affordable houses</h1>
        <Button title={'see offers'}  />
      </div>
      <section className="recommended-block">
        <h2>You will be interested</h2>
         <Splide options={{ 
                perPage:4,
                breakpoints:{
                  600:{
                    perPage:2,
                  },
                  800:{
                    perPage:3,
                  },
                  1100:{
                    perPage:4,
                  },
                },
                arrows:false,
                pagination:false,
                drag:'free',
                gap:'3rem',
                }}>
                  
                   <SplideSlide>
                    <div className="slide-block">
                      <div className="slide-block-info">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.75">
                    <circle cx="20" cy="10" r="10" fill="#FAFAFA" fillOpacity="0.3"/>
                    <circle cx="20" cy="10" r="9" stroke="#FAFAFA" strokeOpacity="0.75" strokeWidth="2"/>
                    <path d="M20 6.66667H20.0083M20 10V13.3333" stroke="#FAFAFA" strokeOpacity="0.75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </svg>
                    <h3>Great condo</h3>
                    </div>
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80" alt="" />
                    </div>
                  </SplideSlide>
                   <SplideSlide>
                    <div className="slide-block">
                      <div className="slide-block-info">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.75">
                    <circle cx="20" cy="10" r="10" fill="#FAFAFA" fillOpacity="0.3"/>
                    <circle cx="20" cy="10" r="9" stroke="#FAFAFA" strokeOpacity="0.75" strokeWidth="2"/>
                    <path d="M20 6.66667H20.0083M20 10V13.3333" stroke="#FAFAFA" strokeOpacity="0.75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </svg>
                    <h3>Great condo</h3>
                    </div>
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80" alt="" />
                    </div>
                  </SplideSlide>
                   <SplideSlide>
                    <div className="slide-block">
                      <div className="slide-block-info">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.75">
                    <circle cx="20" cy="10" r="10" fill="#FAFAFA" fillOpacity="0.3"/>
                    <circle cx="20" cy="10" r="9" stroke="#FAFAFA" strokeOpacity="0.75" strokeWidth="2"/>
                    <path d="M20 6.66667H20.0083M20 10V13.3333" stroke="#FAFAFA" strokeOpacity="0.75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </svg>
                    <h3>Great condo</h3>
                    </div>
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80" alt="" />
                    </div>
                  </SplideSlide>
                   <SplideSlide>
                    <div className="slide-block">
                      <div className="slide-block-info">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.75">
                    <circle cx="20" cy="10" r="10" fill="#FAFAFA" fillOpacity="0.3"/>
                    <circle cx="20" cy="10" r="9" stroke="#FAFAFA" strokeOpacity="0.75" strokeWidth="2"/>
                    <path d="M20 6.66667H20.0083M20 10V13.3333" stroke="#FAFAFA" strokeOpacity="0.75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </svg>
                    <h3>Great condo</h3>
                    </div>
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80" alt="" />
                    </div>
                  </SplideSlide>
                   <SplideSlide>
                    <div className="slide-block">
                      <div className="slide-block-info">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.75">
                    <circle cx="20" cy="10" r="10" fill="#FAFAFA" fillOpacity="0.3"/>
                    <circle cx="20" cy="10" r="9" stroke="#FAFAFA" strokeOpacity="0.75" strokeWidth="2"/>
                    <path d="M20 6.66667H20.0083M20 10V13.3333" stroke="#FAFAFA" strokeOpacity="0.75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </svg>
                    <h3>Great condo</h3>
                    </div>
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80" alt="" />
                    </div>
                  </SplideSlide>
                   <SplideSlide>
                    <div className="slide-block">
                      <div className="slide-block-info">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.75">
                    <circle cx="20" cy="10" r="10" fill="#FAFAFA" fillOpacity="0.3"/>
                    <circle cx="20" cy="10" r="9" stroke="#FAFAFA" strokeOpacity="0.75" strokeWidth="2"/>
                    <path d="M20 6.66667H20.0083M20 10V13.3333" stroke="#FAFAFA" strokeOpacity="0.75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </svg>
                    <h3>Great condo</h3>
                    </div>
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80" alt="" />
                    </div>
                  </SplideSlide>
                   <SplideSlide>
                    <div className="slide-block">
                      <div className="slide-block-info">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.75">
                    <circle cx="20" cy="10" r="10" fill="#FAFAFA" fillOpacity="0.3"/>
                    <circle cx="20" cy="10" r="9" stroke="#FAFAFA" strokeOpacity="0.75" strokeWidth="2"/>
                    <path d="M20 6.66667H20.0083M20 10V13.3333" stroke="#FAFAFA" strokeOpacity="0.75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </svg>
                    <h3>Great condo</h3>
                    </div>
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80" alt="" />
                    </div>
                  </SplideSlide>

                   
                </Splide>
               
      </section>
      <section>
        <CategoriesBlock/>
      </section>
    </div>
  )
}

export default Explore