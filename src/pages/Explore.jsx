import Button from "../components/Button";
import CategoriesBlock from "../components/CategoriesBlock";
import ExploreSlider from "../components/ExploreSlider";



const Explore = () => {

  return (
    <div className="explore-block">
      <div className="banner">
        <h1>Popular and affordable houses</h1>
        <Button title={'see offers'}  />
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