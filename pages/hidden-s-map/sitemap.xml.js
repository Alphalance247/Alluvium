// pages/sitemap.xml.js
import { Articledata } from "components/blog-component/informationItem"; // Import the local blog data

const EXTERNAL_DATA_URL = "https://alluvium.net"; // Your base URL

// Generate the XML for the sitemap
function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Manually add static URLs -->
     <url>
       <loc>${EXTERNAL_DATA_URL}/about</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/case-studies</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/contact-us</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/aws-services</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/atlassian-services/support</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/software-development</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/atlassian-services</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/atlassian-services/DevOps-consulting</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/atlassian-services/agile-at-scale</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/atlassian-services/cloud-migration</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/atlassian-services/training</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/atlassian-services/itsm-services</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/atlassian-services/consulting</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/event/event-blog</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/case-studies</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/project-reel</loc>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/cloud-connect</loc>
     </url>
     <!-- Dynamically add blog post URLs -->
     ${posts
       .map((post) => {
         return `
       <url>
           <loc>${EXTERNAL_DATA_URL}/blogs/${
           post.pageTitle
         }</loc> <!-- Assuming the blog posts have a 'slug' field -->
           <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

// The component itself won't render anything
function SiteMap() {
  return null;
}

export async function getServerSideProps({ res }) {
  // Fetch blog data from the local file (blogData.js)
  const posts = Articledata; // No need to fetch, just import the local file

  // Generate the sitemap
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // Send the XML sitemap
  res.write(sitemap);
  res.end();

  return {
    props: {}, // No props needed for this page
  };
}

export default SiteMap;
