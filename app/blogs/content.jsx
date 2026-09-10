"use client";
import Layout from "components/layout";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { environment } from "env/env.local";
import PageIntro from "components/Alluvium-Redesign-2026/common/pageIntro";
import FeaturedArticle from "components/Alluvium-Redesign-2026/blogs/featuredArticle";
import ArticleGrid from "components/Alluvium-Redesign-2026/blogs/artcleGrid";
import WhitepaperSection from "components/Alluvium-Redesign-2026/home/whitepaperSection";

const Blogs = () => {
  const [data, setData] = useState([]);
  const [postOfTheWeek, setPostOfTheWeek] = useState(null);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const [postsRes, postOfTheWeekRes] = await Promise.all([
        axios.get(`${environment?.baseUrl}api/blog/posts/`),
        axios.get(`${environment?.baseUrl}api/blog/posts/post_of_the_week/`),
      ]);

      const postsData = postsRes.data;
      const postOfTheWeekData = postOfTheWeekRes.data;

      if (!postsRes || postsRes.status !== 200 || !postsData) {
        setError(true);
        return;
      }

      setData(postsData);
      setPostOfTheWeek(postOfTheWeekData);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    } finally {
      console.log("done");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Not fetched from the API — this is a lead-gen piece (routes to the
  // /blogs/aipolicy form) rather than a normal article detail page.
  const shadowAiArticle = {
    id: "shadow-ai",
    slug: "aipolicy",
    title: "The Invisible Threat: Shadow AI",
    tag_names: ["Artificial Intelligence"],
    formatted_published_at: "11-8-2025",
    read_time: "2",
    featured_image: "/assets/blogImages/strategic-ai.png",
    author: { first_name: "Taiwo", last_name: "Ojo" },
  };

  return (
    <Layout>
      <PageIntro
        title="News"
        subtitle="The latest from Alluvium: Atlassian, and the AI ecosystem."
      />

      <FeaturedArticle
        href="/blogs/opsgenie-is-going-away-the-migration-should-not-be-a-fire-drill"
        eyebrow="Opsgenie migration"
        title="Opsgenie Is Going Away. The Migration Should Not Be a Fire Drill."
        date="Jul 22, 2026"
        readTime="5 mins read"
        // authorName="Muhammad Zubairu"
        // authorRole="Product lead"
        image="https://d38rkvi67t4lhi.cloudfront.net/assets/1787731328047-image-5.png"
        imageAlt="Opsgenie to JSM Migration"
      />

      <ArticleGrid articles={[shadowAiArticle, ...(data?.results || [])]} />

      <WhitepaperSection
        theme="dark"
        eyebrow="White paper"
        title="Modernizing HR with a Strategic Framework for People Analytics"
        description="AI is only as useful as the systems and knowledge behind it. This whitepaper explores how enterprises can connect trusted knowledge, service workflows, and AI to create systems that teams actually use."
        meta="5 mins read"
        linkWholeCard
        ctaHref="/whitepaper/modernizing-hr-with-a-strategic-framework-for-people-analytics"
        image={
          "https://d38rkvi67t4lhi.cloudfront.net/assets/1788177319102-Vector-1.png"
        }
      />
    </Layout>
  );
};

export default Blogs;
