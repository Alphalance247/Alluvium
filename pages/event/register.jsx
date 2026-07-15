import React, { useState, useMemo, useCallback, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/eventpage.module.scss";

import Layout from "components/layout";
import CountdownTimer from 'components/cloud-connect/CountdownTimer';
import LoadingScreen from "components/loading";
import { currentEventName } from "config";
import axios from "axios";
import { ToastProvider, useToasts } from "lib/toast";
import { Country } from 'country-state-city';
import { getCountryByCode } from "country-phonenumber";
import countries, { NG } from "country-flag-icons/react/3x2";
import { useRouter } from "next/router";
import { getUsersCount } from "pages/api/event/follow-up";
import { connectToDatabaseOnly } from "lib/mongo";

const Register = ({ lockInPersonRegistrations, message, messageStatus }) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const allCountries = Country.getAllCountries();
  const eventType = useMemo(() => currentEventName, []);
  const { addToast } = useToasts();
  const [selectedIcon, setSelectedIcon] = useState({ icon: <NG title="Nigeira" className={styles.country_icon} />, code: "NG" });
  const [phoneCode, setPhoneCode] = useState('');
  const countryCodes = useMemo(() => Object.keys(countries), [countries]);
  const [showOther, setShowOther] = useState(false);
  const attendeeTypes = useMemo(() => ["IT Professional", "Remote Workers", "Business / NBA Leader", "Other"], []);
  const rounter = useRouter();

  useEffect(() => {
    addToast('Sorry, We are no longer accepting registerations for this event has the event is over.', { appearance: 'error' });
  }, [])

  useEffect(() => {
    if (message !== null) {
      addToast(message, { appearance: messageStatus });
    }
  }, [message, messageStatus])

  const handleChange = useCallback((event) => {
    let { name, value } = event.target;
    if (name === 'canReceiveFurtherEmail') {
      value = value == 'true';
    }
    if (name === 'phone') {
      if (value?.length > 10) {
        addToast("Maximum phone number legth is 10. Kindly exclude country code", { appearance: 'error' });
        return;
      }
      if (parseInt(value) < 0) {
        return;
      }
    }
    if (name === 'attendeeType') {
      if (value == 'Other') {
        setShowOther(true);
      } else {
        setShowOther(false);
        setUserData(prev => ({ ...prev, altAttendeeType: '' }))
      }

    }
    setUserData(prev => ({ ...prev, [name]: value }));
  }, [setUserData, setShowOther]);

  useEffect(() => {
    setPhoneCode(getCountryByCode(selectedIcon.code)?.phone);
  }, [selectedIcon]);

  useEffect(() => {
    if (Object.keys(userData).length < 1) {
      setPhoneCode('');
      setSelectedIcon({ icon: <NG title="Nigeira" className={styles.country_icon} />, code: "NG" });
    }
  }, [userData]);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    addToast('Sorry, We are no longer accepting registerations for this event has the event is over.', { appearance: 'error' });
    return;
    // setLoading(true);
    const { firstName, lastName, email } = userData;

    if (!firstName || !lastName || !email) {
      setLoading(false);
      addToast('Missing required fields!', { appearance: 'error' });
      return;
    }

    const data = userData;
    if (lockInPersonRegistrations) {
      data.modeOfAttendance = "Online";
    }
    data.phone = `(+${phoneCode}) ${data.phone}`;

    // await axios
    //   .post("/api/event/follow-up", { ...data, eventType })
    //   .then((res) => {
    //     setLoading(false);
    //     if (!res.data.success) {
    //       addToast('Unable to process data, kindly reach out to our agent.', { appearance: 'error' });
    //     } else {
    //       addToast(`${res?.data?.message} Your registration has been well received, see you at the event.`, { appearance: 'success', autoDismiss: true });
    //       handleReset();
    //       rounter.push("/event/cloud-connect");
    //     }
    //     return;
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     let errMessage = err?.response?.data?.message || 'Oops something went wrong. Please try again.';
    //     addToast(errMessage, { appearance: 'error' });
    //     return;
    //   });
  }, [eventType, userData, phoneCode]);

  const handleReset = useCallback((event) => {
    setUserData({});
    setSelectedIcon({ icon: <NG title="Nigeira" className={styles.country_icon} />, code: "NG" });
  }, [setUserData, setSelectedIcon]);

  const formView = useMemo(() => loading ?
    <LoadingScreen message={"Loading..."} />
    :
    (<form className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>
      <div className={styles.form_header}>
        <h4>Quick Registration</h4>
        <span className={styles.form_description}>
          Secure your spot and join us for an unforgettable learning experience: Register for the <span>Cloud Connect</span> event to connect with industry experts and gain Insights into the latest trends and developments.
        </span>
      </div>

      {/* Basic Information Section */}
      <div className="">
        <h6 className={styles.form_row}>Basic Information</h6>
        <div className={`row ${styles.form_row}`}>
          <div className="col-md-6">
            <label>First Name</label>
            <input type="text" className="form-control" value={userData?.firstName || ''} name="firstName" placeholder="First Name" required onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label>Last Name</label>
            <input type="text" className="form-control" value={userData?.lastName || ''} name="lastName" placeholder="Last Name" required onChange={handleChange} />
          </div>
        </div>
        <div className={`row ${styles.form_row}`}>
          <div className="col-md-6">
            <label>Phone Number</label>
            <div className="w-100 d-flex ms-0">
              <div className="px-0">
                <div className="dropdown">
                  <button className={`btn btn-outline-secondary text-black dropdown-toggle rounded-0 rounded-start m-0 px-2 ${styles.btn_drop}`} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectedIcon.icon} {` (+${phoneCode})`}
                  </button>
                  <ul className={`dropdown-menu ${styles.dropdown_menu}`} aria-labelledby="dropdownMenuButton1">
                    {
                      countryCodes.map((countryCode, index) => {
                        let Comp = countries[countryCode];
                        return (
                          <li key={index} className="d-flex justify-content-center" aria-label={countryCode} title={countryCode} onClick={() => setSelectedIcon({ icon: <Comp title={countryCode} className={styles.country_icon} />, code: countryCode })} style={{ cursor: 'pointer', width: '100%' }}>
                            <Comp key={countryCode} title={countryCode} className={styles.country_icon} /> {` ${countryCode}`}
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
              <div className="px-0 flex-grow-1">
                <input type="number" value={userData?.phone || ''} className="form-control rounded-0 rounded-end" id="phone" name="phone" onChange={handleChange} required />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <label>Country of Residence</label>
            <select type="text" className="form-control" value={userData?.country || ''} name="country" onChange={handleChange}>
              <option value="" disabled>Country of Residence</option>
              {
                allCountries.map(country => (<option key={country?.name} value={country?.name}>{country?.name}</option>))
              }
            </select>
          </div>
        </div>
        <div className={styles.form_row}>
          <label>Email</label>
          <input type="email" className="form-control" value={userData?.email || ''} name="email" placeholder="Email" required onChange={handleChange} />
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="mb-4">
        <h6 className={styles.form_row}>Additional Information</h6>
        {
          !lockInPersonRegistrations && (
            <div className={styles.form_row}>
              <label>How are you attending?</label>
              <div className={styles.form_check}>
                <input type="radio" className="form-check-input" id="inPerson" checked={userData?.modeOfAttendance == "In-Person"} name="modeOfAttendance" value="In-Person" required onChange={handleChange} />
                <label className="form-check-label" htmlFor="inPerson">In-Person</label>
              </div>
              <div className={styles.form_check}>
                <input type="radio" className="form-check-input" id="online" checked={userData?.modeOfAttendance == "Online"} name="modeOfAttendance" value="Online" required onChange={handleChange} />
                <label className="form-check-label" htmlFor="online">Online</label>
              </div>
            </div>
          )
        }
        <div className={styles.form_row}>
          <label>Which attendee type best describes you?</label>
          <div className={styles.form_check}>
            <select type="text" className="form-control" value={userData?.attendeeType || ''} name="attendeeType" onChange={handleChange} required>
              {/* <option value="" disabled>Country of Residence</option> */}
              {
                attendeeTypes.map(attendee => (<option key={attendee} value={attendee}>{attendee}</option>))
              }
            </select>
            {showOther && <input type="text" className="form-control mt-3" value={userData?.altAttendeeType || ''} name="altAttendeeType" placeholder="Others" required onChange={handleChange} />}
          </div>
        </div>
        <div className={styles.form_row}>
          <label>Tell us about yourself</label>
          <div className={styles.form_check}>
            <textarea className="form-control" value={userData?.description || ''} name="description" required onChange={handleChange} rows="7"></textarea>
          </div>
        </div>
        <div className={styles.form_row}>
          <label>I agree to receive email updates from Alluvium about future events, news, and announcements</label>
          <div className={styles.form_check}>
            <input type="radio" className="form-check-input" id="agreeYes" checked={userData?.canReceiveFurtherEmail === true} name="canReceiveFurtherEmail" required onChange={handleChange} value={true} />
            <label className="form-check-label" htmlFor="agreeYes">Yes</label>
          </div>
          <div className={styles.form_check}>
            <input type="radio" className="form-check-input" id="agreeNo" checked={userData?.canReceiveFurtherEmail === false} name="canReceiveFurtherEmail" required onChange={handleChange} value={false} />
            <label className="form-check-label" htmlFor="agreeNo">No</label>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-warning" disabled={loading || true}>Register</button>
      <button type="reset" className="btn btn-outline-danger ms-3" disabled={loading}>Clear</button>
    </form>), [loading, userData, countryCodes, phoneCode, selectedIcon, lockInPersonRegistrations, allCountries, showOther, attendeeTypes, handleChange, handleReset, handleSubmit]);

  return (
    <>
      <ToastProvider autoDismissTimeout={5000} autoDismiss={true}>
        <Layout>
          <div className={`container-fluid p-3`} style={{ backgroundColor: '#0F1922' }}>
            <div className="row container mx-auto align-items-center">
              <div className="col-md-4 text-center text-md-start">
                <Link href="/event/cloud-connect">
                  <h2 className="text-white" style={{ cursor: 'pointer' }}>Cloud Connect</h2>
                </Link>
              </div>
              <div className="col-md-3 text-warning">

              </div>
              <div className="col-md-5 text-warning">
                <CountdownTimer targetDate="2023-11-30T10:00:00" />
              </div>
            </div>
          </div>


          <div className={`container mt-4 ${styles.registraion}`}>
            <Link href="/event/cloud-connect">
              <div className="d-flex align-items-center">
                <img src="/assets/back-arrow.png" alt="back to previous page" style={{ cursor: 'pointer' }} className="img-fluid" />
                <span className="ms-2" style={{ cursor: 'pointer' }}>Back</span>
              </div>
            </Link>

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
                <Link href="/event/cloud-connect">
                  <>
                    <img src="/assets/register_image.png" alt="Event Image" className="img-fluid" />
                    <h3 className="mt-2" style={{cursor: 'pointer'}}>Cloud Connect</h3>
                    <h6 className="text-secondary" style={{cursor: 'pointer'}}>Nov 30th, 10:00AM (WAT)</h6>
                  </>
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </ToastProvider>
    </>
  )
};

export default Register;

export async function getServerSideProps() {
  let lockInPersonRegistrations = true, message = null, messageStatus = 'info';
  //Check DB connection
  const dbStatus = connectToDatabaseOnly();
  if (dbStatus == undefined) {
    message = "DB connection is not established, Please connect support";
    messageStatus = 'error';
  }
  if (!dbStatus.success) {
    message = dbStatus.message;
    messageStatus = 'error';
  }
  if (dbStatus.success) {
    // Fetch data from external API
    await getUsersCount(currentEventName, 'In-Person').then((response) => {
      if (response !== undefined) {
        const {
          success,
          usersLength
        } = response;
        if (!success) lockInPersonRegistrations = true;
        if (usersLength != null && usersLength >= 90) {
          message = "We have exceeded our capacity for In-person registration, all further registrations will be online by default. Thank you.";
          lockInPersonRegistrations = true;
        } else {
          lockInPersonRegistrations = false;
        }
      }
    }).catch((err) => {
      console.log(err);
      message = err?.response?.data?.message || 'I can only get online attendee form. Please refresh the page or reach out for support if you want to attend physically.';
    });
  }


  // Pass data to the page via props
  return { props: { lockInPersonRegistrations, message, messageStatus } }
}