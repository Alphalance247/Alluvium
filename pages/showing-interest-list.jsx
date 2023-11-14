import Head from "next/head";
import Image from "next/image";
import styles from "../styles/onboardingList.module.scss";
import Layout from "components/layout";
import { productData } from "data";
import { CSVLink } from "react-csv";
import { useState, useMemo, useEffect } from "react";
// import { connectToDatabase, saveToDB } from "lib/mongo";
import axios from "axios";
import { currentEventName } from "config";
import Login from "components/Interested-cloudConnect/LogIn";

const ShowingInterestLink = ({ products }) => {
  const [data, setData] = useState(null);
  const [usersInfo, setUsersInfo] = useState(null);
  const [usersInfoPrint, setUsersInfoPrint] = useState(null);
  const [loading, setLoading] = useState(false);
  const [access, setAccess] = useState(false);
  const eventType = useMemo(() => currentEventName, []);

  const headers = [
    // { label: "Full Name", key: "fullname" },
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Email", key: "email" },
    { label: "Phone Number", key: "phone" },
    { label: "Country", key: "country" },
    // { label: "Current Engagement", key: "currentEngagement" },
    // { label: "Applying For Trainee Program?", key: "traineeProgram" },
    { label: "Mode Of Attendance", key: "modeOfAttendance" },
    { label: "Can Receive Further Email", key: "canReceiveFurtherEmail" },
    // { label: "date", key: "createdAt" },
    // { label: 'Date', key: 'date' },
  ];

  useEffect(() => {
    if (access) {
      setData(null);
      setUsersInfo(null);
      setLoading(true);
      axios
        .get(`/api/event/follow-up?eventType=${eventType}`)
        .then((res) => {
          // console.log(res);
          setData(res.data);
          setUsersInfo(res.data.users);
          setLoading(false);
        })
        .catch((err) => {
          // console.log(err);
          setUsersInfo(null);
          setData({ message: err.response.data.message, success: false });
          setLoading(false);
        });
    }
  }, [access]);

  useEffect(() => {
    if (usersInfo) {
      const tempData = usersInfo.map(
        ({
          email,
          firstName,
          lastname,
          phone,
          country,
          modeOfAttendance,
          canReceiveFurtherEmail
        }) => ({
          email,
          firstName,
          lastname,
          phone,
          country,
          modeOfAttendance,
          canReceiveFurtherEmail: canReceiveFurtherEmail ? 'Yes' : 'No'
        })
      );
      setUsersInfoPrint(tempData);
    }
  }, [usersInfo]);

  // const deleteUser = async (id) => {
  //   await axios
  //     .delete(`/api/user/${id}`)
  //     .then((res) => {
  //       // console.log(res);
  //       setUsersInfo((prev) => prev.filter((user) => user._id !== id));
  //       setData(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       // console.log(err);
  //       // setUsersInfo(null);
  //       setData({ message: err.response.data.message, success: false });
  //       setLoading(false);
  //     });
  // };

  return (
    <Layout>
      <div>
        <Head>
          <title>Showing Interest List | Alluvium University</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."
          />
          <meta
            name="keywords"
            content="alluvium, team alluvium, atlassian products migration lab, atlassian, jira"
          />
        </Head>
        <main id={styles.main}>
          <div className={styles.header}>
            <div>
              <Image
                priority
                alt="Alluvium university logo"
                src="/assets/AULogoWhite.svg"
                quality={100}
                height={74}
                width={79.69}
              />
            </div>
            <div>
              <h1>Showing Interest List</h1>
            </div>
          </div>
          {
            !access && <Login setAccess={setAccess} />
          }
          {(data || loading) && (
            <div
              className={`${styles.response} ${data ? (data.success ? styles.success : styles.danger) : ""
                }`}
            >
              <div
                className={`${styles.responseData} ${data
                    ? data.success
                      ? styles.successBG
                      : styles.dangerBG
                    : ""
                  }`}
              >
                <h3>{loading ? "Loading..." : data.message}</h3>{" "}
                <button onClick={() => setData(null)}>x</button>
              </div>
            </div>
          )}

          {access && usersInfo && (
            <>
              {usersInfoPrint && (
                <div
                  className="container"
                  style={{ width: "80%", margin: "10px auto" }}
                >
                  <div style={{ width: "max-content", marginLeft: "auto" }}>
                    <CSVLink
                      data={usersInfoPrint}
                      headers={headers}
                      filename="Showing-Interest.csv"
                    >
                      {/* Download Data */}
                      <button
                        className="btn btn-primary text-decoration-none"
                        style={{
                          padding: "10px",
                          outline: "none",
                          backgroundColor: "skyblue",
                          borderRadius: "4px",
                          fontWeight: "700",
                        }}
                      >
                        Download Data
                      </button>
                    </CSVLink>
                  </div>
                </div>
              )}
              <div className={styles.tableHolder}>
                <table style={{ margin: "0px auto" }}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>FirstName</th>
                      <th>LastName</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Country</th>
                      <th>Mode Of Attendance</th>
                      <th>Can Receive Further Email</th>
                      {/* <th></th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {usersInfo.map((user, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.country}</td>
                        <td>{user.modeOfAttendance}</td>
                        <td>{user.canReceiveFurtherEmail}</td>
                        {/* <td>
                          <button onClick={() => deleteUser(user._id)}>
                            Delete
                          </button>
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </main>
      </div>
    </Layout>
  );
};

export default ShowingInterestLink;

export const getStaticProps = async () => {
  return {
    props: {
      products: productData,
      //   responseData
    },
  };
};
