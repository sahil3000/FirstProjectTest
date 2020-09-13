import React from 'react';
import CommonHomeAbout from '../CommonHomeAbout';
import AboutImage from '../images/img1.png'
const About = ()=>{
    return(
        <>
            <CommonHomeAbout name="Welcome to About Page " imgLink={AboutImage} btnMsg="Contact Now" visit="/contact"/>
        </>
    );
}
export default About;