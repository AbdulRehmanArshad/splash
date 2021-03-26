import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./contact.css";

class ContactUs extends Component {
  render() {
    return (
      <div
        className="contact2"
        style={{
          backgroundImage:
            "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/map.jpg)",
        }}
        id="contact"
      >
        <div className="container">
          <div className="row contact-container">
            <div className="col-lg-12">
              <div className="card card-shadow border-0 mb-4">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="contact-box p-4">
                      <h4 className="title">Contact Us</h4>
                      <form>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="email"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="phone"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="location"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mt-3">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="message"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <button
                              type="submit"
                              className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"
                            >
                              <span>
                                {" "}
                                SUBMIT NOW <i className="ti-arrow-right"></i>
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 bg-image"
                    style={{
                      backgroundImage:
                        "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg)",
                    }}
                  >
                    <div className="detail-box p-4">
                      <h5 className="text-white font-weight-light mb-3">
                        ADDRESS
                      </h5>
                      <p className="text-white op-7">
                        Ghazi Plaza
                        <br /> College Road Lahore
                      </p>
                      <h5 className="text-white font-weight-light mb-3 mt-4">
                        CALL US
                      </h5>
                      <p className="text-white op-7">
                        03311428218
                        <br /> 03035509881
                      </p>
                      <div className="round-social light">
                        <Link
                          to="#"
                          className="ml-0 text-decoration-none text-white border border-white rounded-circle"
                        >
                          <i
                            className="fa fa-facebook-square"
                            style={{
                              fontSize: "1.5rem",
                              color: "white",
                            }}
                          ></i>
                        </Link>
                        <Link
                          to="#"
                          className="text-decoration-none text-white border border-white rounded-circle"
                        >
                          <i
                            className="fa fa-twitter"
                            style={{
                              fontSize: "1.5rem",
                              color: "white",
                            }}
                          ></i>
                        </Link>
                        <Link
                          to="#"
                          className="text-decoration-none text-white border border-white rounded-circle"
                        >
                          <i
                            className="	fa fa-youtube"
                            style={{
                              fontSize: "1.5rem",
                              color: "white",
                            }}
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
