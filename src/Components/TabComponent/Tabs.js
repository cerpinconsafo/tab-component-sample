import React, { useState } from "react";
import TabNavItem from "../AllTabs/TabNavItem";
import TabContent from "../AllTabs/TabContent";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div className="Tabs">

            <ul className="nav">
                <TabNavItem title="Apples" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabNavItem title="Bananas" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
                <TabNavItem title="Grapes" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} />



            </ul>
            <div className="content">
                <TabContent id="tab1" activeTab={activeTab}>
                    <p>Apples was clicked!</p>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                    <p>Bananas was clicked!</p>
                </TabContent>
                <TabContent id="tab3" activeTab={activeTab}>
                    <p>Grapes was clicked!</p>
                </TabContent>

            </div>
        </div>
    );
};
export default Tabs;