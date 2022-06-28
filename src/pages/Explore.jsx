import { Link } from "react-router-dom";
import Button from "../components/Button";
import CategoriesBlock from "../components/CategoriesBlock";
import ExploreSlider from "../components/ExploreSlider";



const Explore = () => {

  return (
    <div className="explore-block">
      <div className="banner">
        <h1>Popular and affordable houses</h1>
        <Link to='/offers'><Button title={'see offers'}  /></Link>
      </div>
      <section className="recommended-block">
        <h2>You will be interested</h2>
        <ExploreSlider/>  
      </section>
      <section>
        <CategoriesBlock/>
      </section>
    </div>
  )
}

export default Explore