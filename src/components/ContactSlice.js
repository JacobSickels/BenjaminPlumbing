import React from 'react';

const ContactSlice = () => (
    <div className="contact">
        <div className="container">
            <div className="row">
                <div className="col s12 m12 l12">
                    <h1 className="section-title">Contact</h1>
                    <h3 className="section-subhead">For more information or a free estimate, we invite you to contact us</h3>
                </div>
            </div>  
            <div className="row contact-form">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12 m4">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s12 m4">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                        <div className="input-field col s12 m4">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label htmlFor="textarea1">Comments</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default ContactSlice;