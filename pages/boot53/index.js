import Head from "next/head";
// import styles from "../../styles/about.module.scss";
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

        <main>
        {/* hero */}

        {/* hero */}


        </main>
      </div>

<div className="" style={{backgroundImage: "url('/assets/b53hero.png')", backgroundPosition: 'center', backgroundSize: 'cover', height:"995px", display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
<div className="row">
        <div className="container col-md-5" style={{marginLeft:"", marginRight:"", marginTop:"150px"}}>
         <h1 className="text-white" style={{}}>Welcome to booth <span className="text-warning">53</span></h1>
         <h1 className="text-white" style={{}}>Unlock full potential of your Atlassian products</h1>
         <div className="row">
            <div className="col-md-5" style={{marginTop:"25px"}}><img src="/assets/part.png" width="207.5px" height="34.5px"/></div>
            <div className="col-md-5"><img src="/assets/mark.png" width="135.31px" height="94.546"/></div>
         </div>
        </div>
        <div className="container col-md-5 bg-white" style={{borderRadius:"10px"}}>
            <div className="" style={{ marginLeft:"100px", marginRight:"100px", paddingBlock:"20px"}}>
                <form style={{}}>
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
                    <input type="text" className="form-control" id="companyName" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="companyName" className="form-label">Company Email Address</label>
                    <input type="text" className="form-control" id="companyName" placeholder="yourname@example.com" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="companyName" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="companyName" placeholder="0810000000" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="companyName" className="form-label">Company Email Address</label>
                    <input type="text" className="form-control" id="companyName" placeholder="Enter your company name" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message to Alluvium</label>
                    <textarea className="form-control" id="message" rows="5"></textarea>
                    </div>
                    <div className="d-grid">
                    <button type="submit" className="btn btn-warning">Submit</button>
                    </div>
                </form>
            </div>
        </div>
</div>
</div>

{/* comprehensive site audit */}

<div className="row ">
    <div className="container col-md-5" style={{ height: "676px" }}>
        <img src="/assets/audit.png" width={556} height={417} className="img-fluid" alt="Audit" />
    </div>
    <div className="col-md-6">
        <h1>Comprehensive Site Audit</h1>
        <p style={{ width: "676px" }}>
            Unlock the Full Potential of Your Atlassian Products with Our Comprehensive Site Audit! Discover Hidden Opportunities, Streamline Operations, and Elevate Performance Across Your Platform. Our Expert Health Check Ensures Your Setup is Fine-Tuned for Success, Regardless of Your Project's Scope or Complexity. Don't Wait – Schedule Your Audit Today and Take Your Atlassian Products to the Next Level!"
        </p>
        <button type="submit" className="btn btn-warning" style={{ borderRadius: "17px" }}>Request a demo</button>
    </div>
</div>

{/* case studies */}
<CaseStudies />

{/* brochure */}
<div className="row">
    <div className="col-md-6">
    <h1>Discover more with Our Brochure!</h1>

    <p>
    Discover Hidden Opportunities, Streamline Operations, and Elevate Performance Across Your Platform. Our Expert Health Check Ensures Your Setup is Fine-Tuned for Success, Regardless of Your Project's Scope or Complexity. Don't Wait – Get to know us Today and Take Your Atlassian Products to the Next Level!"
    </p>
    <button type="submit" className="btn btn-warning" style={{borderRadius:"5px"}}>Download Brochure</button>
    </div>

    <div className="container col-md-5">
        <img src="/assets/book.png" width={585.33} height={439} />
    </div>
</div>

    </Layout>
  );
}
