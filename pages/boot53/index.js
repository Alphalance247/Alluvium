import Head from "next/head";
import styles from "../../styles/boot53.module.scss";
import Image from "next/image";
import CaseStudies from "components/case-studies/case-studies";
import Layout from "components/layout";

export default function Boot53() {
  const imagePath = "/assets/about/";
  let achievemnetKeys = 0;
  return (
    <Layout>
      <div>
        <Head>
          <title>Team | Alluvium</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>

      <div className="" style={{backgroundImage: "url('/assets/b53hero.png')", backgroundPosition: 'center', backgroundSize: 'cover', height:"995px", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="" style={{marginTop:"150px"}}>
                    <h1 className="text-white">Welcome to booth <span className="text-warning">53</span></h1>
                    <h1 className="text-white">Unlock the full potential of your Atlassian products</h1>
                    <div className="row">
                        <div className="col-md-6" style={{marginTop:"60px"}}>
                            <img src="/assets/part.png" className="img-fluid" />
                        </div>
                        <div className="col-md-6" style={{paddingLeft:""}}>
                            <img src="/assets/mark.png" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 bg-white" style={{borderRadius:"10px"}}>
                <div className="container" style={{marginLeft:"20px", marginRight:"20px", paddingTop:"20px", paddingBottom:"20px"}}>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="John" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Doe" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="companyName" className="form-label">Company Name</label>
                            <input type="text" className="form-control" id="companyName" placeholder="Enter your company name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" placeholder="yourname@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="phoneNumber" placeholder="0810000000" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message to Alluvium</label>
                            <textarea className="form-control" id="message" rows="5"></textarea>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn" style={{backgroundColor:"#E37915", color:"#fff"}}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


{/* comprehensive site audit */}

<div className="row justify-content-center align-items-center">
    <div className="col-md-5 d-flex justify-content-center align-items-center" style={{ height: "auto" }}>
        <img src="/assets/audit.png" className="img-fluid" alt="Audit" />
    </div>
    <div className="col-md-6 d-flex justify-content-center align-items-center">
        <div className="text-center">
            <h1 style={{fontSize:"3rem", fontWeight:"bold" }}>Comprehensive Site Audit</h1>
            <p style={{ maxWidth: "676px", fontWeight:"500"}}>
                Unlock the Full Potential of Your Atlassian Products with Our Comprehensive Site Audit! Discover Hidden Opportunities, Streamline Operations, and Elevate Performance Across Your Platform. Our Expert Health Check Ensures Your Setup is Fine-Tuned for Success, Regardless of Your Project's Scope or Complexity. Don't Wait – Schedule Your Audit Today and Take Your Atlassian Products to the Next Level!
            </p>
            <button type="submit" className="btn" style={{backgroundColor:"#E37915", color:"#fff"}}>Request a demo</button>
        </div>
    </div>
</div>



{/* case studies */}
<CaseStudies />

{/* brochure */}
<div className="row align-items-center">
    <div className="col-md-6">
        <div className="container" style={{ paddingLeft: "100px" }}>
            <h1>Discover more with Our Brochure!</h1>
            <p>Discover Hidden Opportunities, Streamline Operations, and Elevate Performance Across Your Platform. Our Expert Health Check Ensures Your Setup is Fine-Tuned for Success, Regardless of Your Project's Scope or Complexity. Don't Wait – Get to know us Today and Take Your Atlassian Products to the Next Level!</p>
            <button type="submit" className="btn" style={{backgroundColor:"#E37915", color:"#fff", borderRadius:"5px"}}>Download Brochure</button>
        </div>
    </div>
    <div className="container col-md-6 d-flex justify-content-center align-items-center">
        <img src="/assets/book.png" className="img-fluid" alt="Book Image" />
    </div>
</div>

{/* sourvenirs */}
<div className="row align-items-center" style={{backgroundColor:"#11202D"}}>
<div className="col-md-6">
    <div className="container d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column align-items-center">
            <img src="assets/fila.png" className="img-fluid" alt="Fila Image" />
        </div>
    </div>
</div>

    <div className="col-md-6">
    <div className="container d-flex justify-content-center align-items-center" style={{backgroundImage: "url('/assets/sourvbg.png')", backgroundSize: "cover", minHeight:"392px", marginTop:"50px", marginBottom:"50px"}}>
        <div className="d-flex flex-column align-items-center">
            <button type="submit" className="btn" style={{backgroundColor:"#E37915", color:"#fff", borderRadius:"5px"}}>Send me souvenirs</button>
        </div>
    </div>          
</div>

</div>




    </Layout>
  );
}
