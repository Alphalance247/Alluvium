import React from 'react'
import styles from "styles/AlluviumRedesign2025/SoftwareDevelopment/solution.module.scss"
const Solutions = () => {
    const data = [
        {
            title: "Hybrid Solution",
            description1: "Our Hybrid Solution seamlessly integrates your on-premises infrastructure with the power and scalability of AWS cloud services, providing a flexible and balanced approach to cloud adoption. This solution is ideal for businesses that require a gradual transition to the cloud or need to maintain certain workloads on-premises due to regulatory, security, or performance considerations.",
            description2: "By combining the best of both worlds, our Hybrid Solution ensures that your business can scale efficiently, optimize costs, and maintain high availability, all while securely managing data and applications across environments.Experience a smoother, more controlled cloud journey with our tailored hybrid approach"
        },
        {
            title: "Full Cloud Solution",
            description1: "Our Full Cloud Solution is designed to help your business fully embrace the power of AWS, enabling you to migrate all your infrastructure, applications, and data to the cloud. By moving entirely to the cloud, you gain unmatched scalability, flexibility, and cost-efficiency, while eliminating the limitations of traditional on-premises systems.",
            description2: "Our solution covers every aspect of your cloud journey, from planning and migration to ongoing management and optimization, ensuring a smooth transition and maximizing the benefits of cloud technology.With our Full Cloud Solution, your business can innovate faster, respond to market changes more effectively, and focus on what truly matters—growth and success."
        },
        {
            title: "Apps & Services Deployment",
            description1: "Our App & Services Deployment solution streamlines the process of launching your applications and services on AWS, ensuring they are set up for optimal performance, security, and scalability. We handle everything from initial setup and configuration to continuous integration and deployment, allowing your development teams to focus on innovation rather than infrastructure.",
            description2: "Whether you're deploying a single application or a complex multi-service architecture, our solution ensures a smooth, efficient rollout with minimal downtime. Experience faster time-to-market, enhanced reliability, and simplified management with our expert deployment services on AWS."
        },


    ]
    return (
        <div className={styles.solutionLayout}>
            <div className={styles.container}>
                {data.map((item, index) => {
                    return (
                        <div key={index} className={`${styles.content} ${data.length - 2 === index ? styles.reverse : null}`}>

                            <div className={styles.firstColumn}>
                                <div className={styles.firstColumnContent}>
                                    <div>
                                        <h4 className={styles.title}>{item.title}</h4>
                                    </div>
                                    <div>
                                        <p className={styles.description}>{item.description1}</p>
                                        <p className={styles.description}>{item.description2}</p>

                                    </div>
                                </div>
                            </div>
                            <div className={styles.secondColumn}></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Solutions