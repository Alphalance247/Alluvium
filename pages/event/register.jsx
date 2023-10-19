import React, { useState, useEffect } from "react";

import Layout from "components/layout";
import CountdownTimer from 'components/CountdownTimer';
import EventHero from 'components/EventHero';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import axios from "axios";
import moment from "moment";
import { ToastProvider, useToasts } from 'react-toast-notifications';


const Register = () => {
    return (
        <>
        <Layout>
        <div className="container mt-2">
      <div className="row">
        <div className="col-md-9">
          {/* Registration Form */}
          <form>
            <div className="mb-3 mt-5">
              <h4>Quick Registration</h4>

              <span className="text-secondary">
                Secure your spot and join us for an unforgettable learning experience: register for the Atlassian partner<br />
                event to connect with industry experts and gain insights into the latest trends and development.

              </span>
            </div>

            {/* Basic Information Section */}
            <div className="mb-3">
  <h6>Basic Information</h6>
  <div className="row mt-4">
    <div className="col-md-6 mb-3">
        <label>First Name</label>
      <input type="text" className="form-control" placeholder="First Name" />
    </div>
    <div className="col-md-6 mb-3">
    <label>Last Name</label>
      <input type="text" className="form-control" placeholder="Last Name" />
    </div>
  </div>
  <div className="row">
    <div className="col-md-6 mb-3">
    <label>Phone Number</label>
      <input type="tel" className="form-control" placeholder="Phone Number" />
    </div>
    <div className="col-md-6 mb-3">
    <label>Country of Residence</label>
      <input type="text" className="form-control" placeholder="Country of Residence" />
    </div>
  </div>
  <div className="mb-3">
  <label>Email</label>
    <input type="email" className="form-control" placeholder="Email" />
  </div>
</div>


            {/* Additional Information Section */}
            <div className="mb-3">
              <h6>Additional Information</h6>
              <div className="form-check">
                <input type="radio" className="form-check-input" id="inPerson" name="attendanceType" value="In-Person" />
                <label className="form-check-label" htmlFor="inPerson">In-Person</label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" id="online" name="attendanceType" value="Online" />
                <label className="form-check-label" htmlFor="online">Online</label>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input type="radio" className="form-check-input" id="agreeYes" name="agreeReceiveEmails" value="Yes" />
                  <label className="form-check-label" htmlFor="agreeYes">Yes</label>
                </div>
                <div className="form-check">
                  <input type="radio" className="form-check-input" id="agreeNo" name="agreeReceiveEmails" value="No" />
                  <label className="form-check-label" htmlFor="agreeNo">No</label>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-warning">Register</button>
          </form>
        </div>
        <div className="col-md-3 mt-5">
          {/* Event Picture */}
          {/* <div className="col-md-3"><CountdownTimer targetDate="2023-11-30T23:59:59" /></div> */}
          <img src="/assets/register_image.png" alt="Event Image" className="img-fluid" />
          <h3 className="mt-2">Cloud Connect</h3>
          <h6 className="text-secondary">Nov 30th, 10:00AM (WAT)</h6>
        </div>
      </div>
    </div>
        </Layout>
        </>
    )
};

export default Register;