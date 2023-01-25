import React, { useEffect, useState } from "react";
import styles from "../styles/toolsAndPlatforms.module.scss";
import { toolsAndPlatforms } from "data";
import Image from "next/image";

const ToolsAndPlatforms = () => {
    const [selectedItem, setSelectedItem] = useState(toolsAndPlatforms[0]);
    // const [toolsToDisplay, setToolsToDisplay] = useState(toolsAndPlatforms[0].tools);

    // useEffect(()=>{
    //     setToolsToDisplay(selectedItem.tools);
    // })
    return (
        <>
            <div className={`container-fluid ${styles.cover}`}>
                <div className="container">
                    <h3>Our Tools and Platforms</h3>
                    <div className="row">
                        <div className="col-lg-4 pe-5">

                            <div className={styles.buttons}>
                                {
                                    toolsAndPlatforms.map(platform => (
                                        <>
                                            <button type="button" key={platform.name} onClick={() => setSelectedItem(platform)} className={`list-group-item list-group-item-action ${selectedItem.name == platform.name ? styles.active : 'disabled'}`} aria-current="true">
                                                {platform.name}
                                                {(selectedItem.name == platform.name) && (<div></div>)}
                                            </button>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className={styles.icons}>
                                {
                                    selectedItem.tools.map(tool => (
                                        <div>
                                            <Image src={tool.icon} width={86} height={86} alt={tool.name} />
                                            <p>{tool.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ToolsAndPlatforms;