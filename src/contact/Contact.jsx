import React, { useState } from 'react';
const Contact = ()=>{
    const [data,setData]=useState({
        fullName:"",
        phone:"",
        emailId:"",
        messsage:""
    });
    const inputEvent=(event)=>{
        const {name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value
            };
        });        
    }
    const submitEvent=(e)=>{
        e.preventDefault();
        alert(
            `My name is ${data.fullName}. My Mobile number is ${data.phone} and Email is ${data.emailId}. Message is ${data.message}`
        );
    }
    return(
        <>
            <div className="mt-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={submitEvent}>
                        <div className="form-group mb-2">
                            <label>Full Name</label>
                            <input type="text" className="form-control" name="fullName" value={data.fullName} onChange={inputEvent} id="fullName"/>
                        </div>
                        <div className="form-group mb-2">
                            <label>Mobile No.</label>
                            <input type="text" className="form-control" name="phone" value={data.phone} onChange={inputEvent} id="phone"/>
                        </div>
                        <div className="form-group mb-2">
                            <label>Email address</label>
                            <input type="email" className="form-control" name="emailId" value={data.emailId} onChange={inputEvent} id="emailId" placeholder="example@gmail.com"/>
                        </div>
                        <div className="form-group mb-2">
                            <label>Message</label>
                            <textarea className="form-control" name="message" id="message" onChange={inputEvent} rows="3"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>

        </>
    );
}
export default Contact;