import React from "react";

import UseExternalScript from "../custom-hooks/UseExternalScript";


const CustomerDetails = props => {

    // UseExternalScript("https://core.spreedly.com/iframe/express-2.min.js", function(){
    //     window.SpreedlyExpress.init("4PavvEpD8U8mLX7FeKEPcasacaY", {
    //         "amount": "$9.83",
    //         "company_name": "Acme Widgets",
    //         "sidebar_top_description": "Providing quality widgets since 2015",
    //         "sidebar_bottom_description": "Your order total today",
    //         "full_name": "First Last"
    //     }, {
    //         "email": "customer@gmail.com"
    //     });
    // });




    return (
        <div>
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h3>Enter your details</h3>
            </div>

            <div className="row">
                <div className="col-md-6 order-md-2 mb-6">
                    <form className="needs-validation">
                        <div className="mb-3 w-100">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" value=""
                                   required="" />
                            <div className="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" value=""
                                   required="" />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomerDetails;