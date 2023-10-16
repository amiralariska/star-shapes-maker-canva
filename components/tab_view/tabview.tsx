import React, { useState, Fragment } from "react";
import { MainApp } from "components/main_app/mainapp";
import { MainEditor } from "components/main_editor/maineditor";
import styles from "styles/components.css"

export const TabView = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };
    return (
        <Fragment>
            <div className={styles.tabs}>
                <div className={styles.firsttab} onClick={() => handleTabClick(0)}>Design</div>
                <div className={styles.secondtab} onClick={() => handleTabClick(1)}>Editor</div>
            </div>
            {activeTab ? <MainEditor /> : <MainApp />}
        </Fragment>
    )
}