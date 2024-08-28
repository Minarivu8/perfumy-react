import one from "../assets/p1.jpg"
import two from "../assets/p2.jpg"
import three from "../assets/p3.jpg"


function Product()
{
  return(
    <div className="products">
            <div className="box">
                        <img src={one}></img>
                        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
            </div>
            <div className="box">
                <img src={two} alt="villain"></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
            </div>
            <div className="box">
                <img src={three} alt="Designs Club"></img>
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>
        </div>
  )
}
export default Product