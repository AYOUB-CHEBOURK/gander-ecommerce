import './reviews.css'
import { ReviewsData } from '../../data/reviewsData'


const Reviews = () =>{
    return(
        <>
          <div className="reviews">
            <div className="container">
                <h1>Reviews</h1>
                <div className="cards">
                    {ReviewsData.map((item , id)=>(
                        <div className="card" key={id}>
                            <div className="caption">
                                <img src={item.image} alt="" />
                                <div className="text">
                                    <h2>{item.name}</h2>
                                    <h3>{item.address}</h3>
                                </div>
                            </div>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </>
    )
}

export default Reviews