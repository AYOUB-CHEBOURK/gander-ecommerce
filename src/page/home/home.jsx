import { useEffect } from 'react'
import {  Hero , BannerCategory , FeaturedProducts , Slide, LatestProducts , Reviews, Subscribe} from '../../components/index'

const Home = () =>{

    useEffect(() =>{
        window.scrollTo(0,0);
    }, []);

    return(
        <div className='zoom'>
            <Hero />
            <BannerCategory />
            <FeaturedProducts />
            <LatestProducts/>
            <Slide />
            <Reviews /> 
            <Subscribe />
        </div>
    )
}

export default Home