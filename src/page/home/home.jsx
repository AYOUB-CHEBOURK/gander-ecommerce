import {  Hero , BannerCategory , FeaturedProducts , Slide, LatestProducts , Reviews, Subscribe} from '../../components/index'

const Home = () =>{
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