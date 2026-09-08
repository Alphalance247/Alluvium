import React from "react";
import Link from "next/link";
import Container from "../common/container";

const ArticleCard = ({ article }) => (
  <Link
    href={`/blogs/${article.slug}`}
    className="flex flex-col items-start gap-6"
  >
    <img
      src={article.img}
      alt={article.title}
      className="w-full h-48 rounded-lg object-cover"
    />

    <div className="w-full pt-4 border-t border-slate-200 flex flex-col items-start gap-4">
      <div className="flex items-center gap-2">
        <span className="w-5 h-1 bg-[#008DAF]" />
        <span className="text-[#1D2939] text-sm font-bold font-sans uppercase tracking-wide">
          {article.category}
        </span>
      </div>

      <h4 className="text-[#1D2939] text-2xl font-bold font-serif leading-snug">
        {article.title}
      </h4>

      <div className="text-sm font-bold font-sans">
        <span className="text-[#667085]">{article.date}</span>
        <span className="text-[#1D2939]"> - </span>
        <span className="text-[#1D2939]">{article.readTime}</span>
      </div>
    </div>
  </Link>
);

const ArticleGrid = ({ articles = [] }) => {
  if (!articles || articles.length === 0) {
    return null;
  }

  const transformedArticles = articles.map((item) => ({
    id: item.id || item.slug,
    category: item.tag_names?.[0] || "ARTICLE",
    date: item.formatted_published_at,
    readTime: `${item.read_time} MIN READ`,
    title: item.title,
    author: `${item.author?.first_name} ${item.author?.last_name}`.trim(),
    img: item.featured_image,
    slug: item.slug,
  }));

  return (
    <section className="w-full bg-white border-b border-slate-200 overflow-hidden">
      <Container className="flex flex-col items-start gap-12">
        <h3 className="text-[#1D2939] text-3xl font-bold font-serif leading-tight">
          Explore other news
        </h3>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {transformedArticles.map((item) => (
            <ArticleCard key={item.id} article={item} />
          ))}
        </div>

        <button
          type="button"
          className="self-center px-6 py-2.5 border border-slate-300 rounded-lg text-[#1D2939] text-base font-bold font-sans transition-colors hover:bg-slate-50"
        >
          Load More
        </button>
      </Container>
    </section>
  );
};

export default ArticleGrid;
