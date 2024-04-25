import './blog.css'
import { BlogData } from '../../data/blogData'
import { useEffect } from 'react'


const Blog = () =>{

    useEffect(() =>{
        window.scrollTo(0,0);
    }, []);


    return(
        <>
          <div className="blog">
            <div className="container">
                <h1>Blog</h1>
                <div className="cards">
                    {BlogData.map((item , id)=>(
                        <div className="card" key={id}>
                            <img src={item.image} alt="image" />
                            <span>{item.date}</span>
                            <h2>{item.title}</h2>
                            <p>{item.p}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </>
    )
}

export default Blog