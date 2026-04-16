import React from 'react'
import { FaChevronRight } from 'react-icons/fa6';
import styles from '../../../../styles/AlluviumRedesign2026/common/mobile-dropdown/produts.module.scss';

const MobileProductsNav = () => {
    const products = [
        {
            title: "Export & Count",
            description: "Lorem ipsum dolor sit amet consectetur. Vitae malesuada",
            image: "/assets/Alluvium-Redesign-2026/navbar/export&count.png",
            link: "https://marketplace.atlassian.com/apps/1224091/export-and-count-for-cloud-scrum-companion?tab=overview&hosting=cloud",
        },
        {
            title: "Resource Compare",
            description: "Lorem ipsum dolor sit amet consectetur. Vitae malesuada",
            image: "/assets/Alluvium-Redesign-2026/navbar/resource-compare.png",
            link: "https://marketplace.atlassian.com/apps/1223507/resource-compare-for-jira?tab=overview&hosting=cloud",
        },
    ];
    return (
        <div>
            <div className={styles.dropdownTitle}>our products</div>

            <div className={styles.childrenContainerParent}>


                {
                    products.map((product) => (
                        <a href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={product.title}

                        >
                            <div className={styles.childrenContainer}
                            >
                                <div className={styles.childrenImageContainer}
                                >
                                    <img src={product.image} alt={product.title} className={styles.childrenImage}
                                    />
                                </div>
                                <div
                                    className={product.title === 'Export & Count' ? styles.exportCount : styles.resourceCompare}>
                                    <div  >
                                        <div className={styles.childrenLinkTitle}>{product.title}
                                            <span> <FaChevronRight className={styles.childrenLinkIcon} /></span></div>
                                    </div>
                                    <p className={styles.childrenDescription}>
                                        {product.description}
                                    </p>
                                </div>

                            </div>
                            {/* </div> */}
                        </a>
                    ))
                }

            </div>
        </div>
    )
}

export default MobileProductsNav