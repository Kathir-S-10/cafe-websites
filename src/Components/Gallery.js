import React from "react";
import '../Styles/Gallery.css';
import image01 from '../Images/img001.jpg';
import image02 from '../Images/img002.jpg';
import image03 from '../Images/img003.jpg';
import image04 from '../Images/img004.jpg';
import image05 from '../Images/img005.jpg';
// import image06 from '../Images/img006.jpg';
import image07 from '../Images/img007.jpg';


const Gallery=()=>{
    return(
        <div>
            <h1 className="gallery-title">Gallery</h1>
            <div className="gallery-images">
                <img src={image01} className="gallery-img1"></img>
                <img src={image02} className="gallery-img1"></img>
                <img src={image03} className="gallery-img1"></img>
                <img src={image04} className="gallery-img1"></img>
                <img src={image05} className="gallery-img2"></img>
                <img src={image07} className="gallery-img1"></img>
            </div>
        </div>
    )
}


export default Gallery