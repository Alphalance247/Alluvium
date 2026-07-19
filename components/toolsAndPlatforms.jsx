import React, { useState } from "react";
import styles from "../styles/toolsAndPlatforms.module.scss";
import { toolsAndPlatforms } from "data";
import Image from "next/legacy/image";

export const Hexagon = ({ children }) => {
  return (
    <div className={styles.hexagon}>
      <div className={styles.hexagonUpper}></div>
      <div className={styles.hexagonInner}>{children}</div>
      <div className={styles.hexagonLower}></div>
    </div>
  );
};

const ToolsAndPlatforms = () => {
  const [selectedItem, setSelectedItem] = useState(toolsAndPlatforms[0]);
  return (
    <>
      <div className={`container-fluid ${styles.cover}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h3 className={styles.title}>Our Tools and Platforms</h3>
            </div>
            <div className="col"></div>
            <div className="col-lg-7">
              <p className={styles.subTitle}>
                At Alluvium, we believe in utilizing the best tools and
                technologies to deliver exceptional results for our clients. Our
                team of experts is proficient in the latest programming
                languages and platforms, allowing us to provide customized and
                innovative solutions for each project.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-10 mx-auto col-sm-12 mt-5">
              <div className={styles.icons}>
                {toolsAndPlatforms.map((tool, id) => (
                  <div key={id}>
                    <Hexagon key={id}>
                      <Image
                        src={tool.icon}
                        width={40 / 1.4}
                        height={40 / 1.4}
                        alt={tool.name}
                      />
                    </Hexagon>
                    <p className="mt-2">{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolsAndPlatforms;
