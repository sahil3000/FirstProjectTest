import React from 'react';
import Card from './Card';
import ServiceData from './serviceData';
const Services = ()=>{
    return(
        <>
            <div className="my-3">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5 ">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {ServiceData.map((val,i)=>{
                                return <Card key={i} imgSrc={val.imgSrc} title={val.title}/>
                            })}
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}
export default Services;