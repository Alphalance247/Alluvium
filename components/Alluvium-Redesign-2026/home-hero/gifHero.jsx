import React from "react";

const GifHero = ({
  gifUrl = "/assets/Alluvium-Redesign-2026/home/atlassian-gif.gif",
  altText = "Hero Animation",
}) => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        // background: "#000",
      }}
    >
      {/* GIF Background Container */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <img
          src={gifUrl}
          alt={altText}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />

        {/* Overlay for content readability */}
        {/* <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: 1,
          }}
        /> */}
      </div>

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        {/* You can add your hero content here */}
      </div>
    </section>
  );
};

export default GifHero;
