import React from 'react';
import {NavLink} from 'react-router-dom';

const CommonHomeAbout = (props)=>{
    return(
        <>
            <section id="heading" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name }<strong className="brand-name">ABC.com</strong></h1>
                                    <h2 className="my-3">We are the team of talented developer making websites</h2>
                                    <div className="mb-5">
                                        <NavLink to={props.visit} className="btn btn-outline-primary">{props.btnMsg}</NavLink>
                                    </div>
                                </div>


                                <div className="mt-5 pt-5 col-md-6 order-1 order-lg-2 header-img text-center">
                                    <img src={props.imgLink} className="img-fluid" width="300" height="500" alt="pics"/>
                                </div>

                            </div>          
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default CommonHomeAbout;
