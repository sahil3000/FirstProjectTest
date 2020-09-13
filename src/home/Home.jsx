import React from 'react';
import HomeImage from '../images/img1.png';
import CommonHomeAbout from '../CommonHomeAbout';
const Home = ()=>{
    return(
        <>
            <CommonHomeAbout name="Grow your business with " imgLink={HomeImage} btnMsg="Get Started" visit="/services"/>
        </>
    );
}
export default Home;