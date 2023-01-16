import React, {useEffect, useState} from 'react';
import './index.css';
// import { ContextData } from './ContextApi';
// import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Fitness=()=>{
  //const [data]=useContext(ContextData);

  const[data,setData]=useState([])
    useEffect(()=>{

      const url ="https://node-project-backend-i9d271mrl-gauravmehra13.vercel.app/fitness"   
      fetch(url).then(res => res.json())
            .then(res => setData(res)  )
    },[])

  return(

    <>
    <h2
     className="post-title"
    >
      Movies
    </h2>
    <div className="underline1"></div>

  

    <div className="wrapper">
      <div className="left-data">
        {data
          .filter((value) => value.category === "fitness")
          .map((val) => (
            <div>
              <div key={val.id} className="bolly-wrapper">
                <Link
                  to={`/article/${val.id}`}
                  className="left-data-link"
                >
                  <img src={val.ImageAsset} alt="" className="left-data-image" />
                </Link>
                <div className="movie-details">
                  <p className="movie-details-para">
                    {val.Title}
                     <br></br>
                     <br></br>
                   <span> {val.BlogContent}</span>
                  </p>
              
                  <p className="movie-details-para">
                      <br></br>
                
                  </p>

                  <br />
                  <p
                   className="movie-details-desc-para"
                  >
                    {val.desc}
                  </p>
                  <p
                    className="movie-details-release-para"
                  >
               
                  </p>
                </div>
              </div>

              <hr className="post-divider" />
            </div>
          ))}
      </div>

      <div className="right-data">
        <div className="top-post-heading-wrapper">
        <h2 className="top-post-title">
      Top Post
         </h2>
         <div className="top-post-underline" ></div>
        </div>
        {data
          .filter((value) => value.category === "fitness")
          .map((val) => (
            <div>
              <div key={val.id} className="right-data-wrapper">
                <Link
                  to={`/article/${val.id}`}
                 className="right-data-link"
                >
                  <img src={val.ImageAsset} alt="" className="top-post-image" />
                </Link>

                <div className="top-post-details-wrapper">
                  <p
                  className="top-post-details"
                  >
                    {val.Title}
                   
                  </p>
                  <p
                     className="top-post-details"
                  >
                      <br></br>
                    Likes: {val.Likes}
                  </p>

                  <br />
                  <p
                   className="top-post-details"
                  >
                    {val.PublishedDate}
                  </p>
                </div>
              </div>'
              <hr className="top-post-divider"/>
            </div>
          ))}

        <div className="small-ad">Advertisement</div>
      </div>
    </div>
  </>
);
};

export default Fitness;