import React, { useState, useMemo, useCallback } from "react";

import Layout from "components/layout";
import CountdownTimer from 'components/cloud-connect/CountdownTimer';
import LoadingScreen from "components/loading";
import { currentEventName } from "config";
import axios from "axios";
import { ToastProvider, useToasts } from 'react-toast-notifications';


const Register = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const eventType = useMemo(() => currentEventName, []);
  const { addToast } = useToasts();

  const handleChange = useCallback((event) => {
    let { name, value } = event.target;
    if (name === 'canReceiveFurtherEmail') {
      value = value == 'on';
    }
    setUserData(prev => ({ ...prev, [name]: value }));
  }, [setUserData]);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    setLoading(true);
    const { firstName, lastName, email } = userData;
    if (!firstName || !lastName || !email) {
      setLoading(false);
      addToast('Missing required fields!', { appearance: 'error' });
      return;
    }
    console.log(userData);
    await axios
      .post("/api/event/follow-up", { ...userData, eventType })
      .then((res) => {
        setLoading(false);
        if (!res.data.success) {
          addToast('Unable to process data, kindly reach out to our agent.', { appearance: 'error' });
        } else {
          addToast(`${res?.data?.message} Your registration has been well received, see you at the event.`, { appearance: 'success' });
          handleReset();
        }
        return;
      })
      .catch((err) => {
        setLoading(false);
        let errMessage = err?.response?.data?.message || 'Oops something went wrong. Please try again.';
        addToast(errMessage, { appearance: 'error' });
        console.log(err?.response?.data);
        return;
      });
  }, [eventType, userData]);

  const handleReset = useCallback((event) => {
    setUserData({});
  }, [setUserData]);

  const formView = useMemo(() => loading ?
    <LoadingScreen message={"Loading..."} />
    :
    (<form onSubmit={handleSubmit} onReset={handleReset}>
      <div className="mb-5 mt-5">
        <h4>Quick Registration</h4>
        <span className="text-secondary">
          Secure your spot and join us for an unforgettable learning experience: register for the Atlassian partner event to connect with industry experts and gain insights into the latest trends and development.
        </span>
      </div>

      {/* Basic Information Section */}
      <div className="mb-4">
        <h6>Basic Information</h6>
        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <label>First Name</label>
            <input type="text" className="form-control" value={userData?.firstName || ''} name="firstName" placeholder="First Name" required onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Last Name</label>
            <input type="text" className="form-control" value={userData?.lastName || ''} name="lastName" placeholder="Last Name" required onChange={handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Phone Number</label>
            <input type="tel" className="form-control" value={userData?.phone || ''} name="phone" placeholder="Phone Number" onChange={handleChange} />
          </div>
          <div className="col-md-6 mb-3">
            <label>Country of Residence</label>
            <input type="text" className="form-control" value={userData?.country || ''} name="country" placeholder="Country of Residence" onChange={handleChange} />
          </div>
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={userData?.email || ''} name="email" placeholder="Email" required onChange={handleChange} />
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="mb-4">
        <h6>Additional Information</h6>
        <label>How are you attending?</label>
        <div className="form-check">
          <input type="radio" className="form-check-input" id="inPerson" checked={userData?.modeOfAttendance == "In-Person"} name="modeOfAttendance" value="In-Person" required onChange={handleChange} />
          <label className="form-check-label" htmlFor="inPerson">In-Person</label>
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" id="online" checked={userData?.modeOfAttendance == "Online"} name="modeOfAttendance" value="Online" required onChange={handleChange} />
          <label className="form-check-label" htmlFor="online">Online</label>
        </div>
        <div className="mb-3">
          <label>I agree to receive email updates from Alluvium about future events, news, and announcements</label>
          <div className="form-check">
            <input type="radio" className="form-check-input" id="agreeYes" checked={userData?.canReceiveFurtherEmail === true} name="canReceiveFurtherEmail" required onChange={handleChange} />
            <label className="form-check-label" htmlFor="agreeYes">Yes</label>
          </div>
          <div className="form-check">
            <input type="radio" className="form-check-input" id="agreeNo" checked={userData?.canReceiveFurtherEmail === false} name="canReceiveFurtherEmail" required onChange={handleChange} />
            <label className="form-check-label" htmlFor="agreeNo">No</label>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-warning" disabled={loading}>Register</button>
      <button type="reset" className="btn btn-outline-danger ms-3" disabled={loading}>Clear</button>
    </form>), [loading, userData, handleChange, handleReset, handleSubmit]);

  return (
    <>
      <ToastProvider>
        <Layout>
          <div className="container-fluid p-3" style={{ backgroundColor: '#0F1922' }}>
            <div className="row container mx-auto align-items-center">
              <div className="col-md-4 text-center text-md-start">
                <h2 className="text-white">Cloud Connect</h2>
              </div>
              <div className="col-md-3 text-warning">

              </div>
              <div className="col-md-5 text-warning">
                <CountdownTimer targetDate="2023-11-30T23:59:59" />
              </div>
            </div>
          </div>


          <div className="container mt-4">
            <a href="/event/eventpage">
              <img src="/assets/back-arrow.png" alt="back to previous page" className="img-fluid" />
            </a>

            <hr />
            <div className="row pb-5">
              <div className="col-md-9 order-2 order-md-1">
                {/* Registration Form */}
                {
                  formView
                }

              </div>
              <div className="col-md-3 mt-5 order-1 order-md-2">
                {/* Event Picture */}
                {/* <div className="col-md-3"><CountdownTimer targetDate="2023-11-30T23:59:59" /></div> */}
                <img src="/assets/register_image.png" alt="Event Image" className="img-fluid" />
                <h3 className="mt-2">Cloud Connect</h3>
                <h6 className="text-secondary">Nov 30th, 10:00AM (WAT)</h6>
              </div>
            </div>
          </div>
        </Layout>
      </ToastProvider>
    </>
  )
};

export default Register;