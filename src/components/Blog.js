import React from 'react';
import "../blog.css";

import {data} from "./BlogData";
import Cardbone from "./cardbone"
function Blog() {
  return (
  <div>

 
  <h1 className='blo'>Wocktan Blog post
        </h1>
    <div className='blo'>
    
      
       
<section>
     
     
    <Cardbone
    title={data[0].title}
    author={data[0].author}
    body={data[0].body}
    date={data[0].date}
    path={data[0].path}
    img={data[0].img}
    />
    
    <Cardbone
    title={data[1].title}
    author={data[1].author}
    body={data[1].body}
    date={data[1].date}
    path={data[1].path}
    img={data[1].img}
    />
    
    <Cardbone
    title={data[2].title}
    author={data[2].author}
    body={data[2].body}
    date={data[2].date}
    path={data[2].path}
    img={data[2].img}
    />
    


   
</section>
    </div> 
    </div>
  )
}

export default Blog;