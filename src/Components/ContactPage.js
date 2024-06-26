import React from "react";
import '../Styles/ContactPage.css';

const ContactPage=()=>{
    return(
        <div>
            <div>
                <p className="contact-title">Contact Us</p>
            </div>
            <div >
                <form className="forms">
                    <input type="text" className="form01" placeholder="Your Name *"></input>
                    <input type="text" className="form01" placeholder="Your Email "></input>
                    <input type="text" className="form01" placeholder="Your Phone Number *"></input>
                    <input type="text" className="form02" placeholder="Message *"></input>
                    <button className="form-btn">SEND MESSAGE</button>
                </form>
            </div>

            <div>
            <hr className="line"></hr>
            </div>

            <div className="details">
                <div>
                    <p className="detail01">Address</p>
                    <p className="detail02">345,Anna Nagar 
Chennai</p>
                </div>
                <div>
                  <p className="detail01">Phone</p>

                  <p className="detail02">1234567890</p>
                  <p className="detail02">0987654321</p>
                </div>
                <div>
                    <p className="detail01">Email</p>
                    <p className="detail02">raycafe@gmail.com</p>
                </div>

            </div>
        </div>
    )
}

export default ContactPage