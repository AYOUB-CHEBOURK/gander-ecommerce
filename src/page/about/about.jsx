import './about.css'
import image22 from "../../assets/images/image22.jpg"
import { AboutData } from '../../data/aboutData'
import { AboutCounterData } from '../../data/aboutCounterData'
import { ReviewsData } from '../../data/reviewsData'
import { FaStar , FaRegStarHalfStroke } from "react-icons/fa6";
import { AboutFollowData } from '../../data/aboutFollowData';
import CountUp from 'react-countup';
import { useEffect } from 'react'

const About = () =>{

    useEffect(() =>{
        window.scrollTo(0,0);
    }, []);

    return(
        <>
          <div className="about">
            <div className="container">
                <div className="box">
                    <div className="text">
                        <h1>Ensuring <span>happiness</span> at every step</h1>
                        <p>Yet remarkably appearance get him his projection. Diverted endeavor bed peculiar men the not desirous. Acuteness abilities ask can offending furnished fulfilled sex. Warrant fifteen exposed at mistake. Blush since so in noisy still built up an again. As young hopes no he place means. Partiality diminution gay yet entreaties admiration.</p>
                        <h2>Dependent on so extremely delivered by.</h2>
                        <h2>Whatever boy her exertion his extended.</h2>
                        <h2>Ecstatic followed handsome drawings entirely one yet outweigh.</h2>
                    </div>
                    <img src={image22} alt="image" />
                </div>
                <div className="cards">
                    {AboutData.map((item , id) =>(
                        <div className="card" key={id}>                           
                            <img src={item.image} alt="" />
                            <h1>{item.address}</h1>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className="counter">
                    {AboutCounterData.map((items , id) =>(
                        <div className="box1" key={id}>
                            <h1><CountUp enableScrollSpy duration={2} end={items.number}/>+</h1>
                            <h2>{items.title}</h2>
                        </div>
                    ))}
                </div>
                <div className="overflow">
                <div className="review">
                    {ReviewsData.map((item , id)=>(
                        <div className="box2" key={id}>
                            <div className="caption">
                                <img src={item.image} alt="image" />
                                <div className="text">
                                    <h2>{item.name}</h2>
                                    <h3><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStarHalfStroke/></h3>
                                </div>
                            </div>
                            <p>{item.p}</p>
                        </div>
                    ))}
                </div>
                </div>
                <div className="follow-us">
                <h1>Follow us on Instagram</h1>
                <div className="boxes2">
                    {AboutFollowData.map((item , id)=>(
                        <div className="box2" key={id}>
                            <img src={item.image} alt="image" />
                            <div className="icon">
                                <h2>{item.icon}</h2>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default About