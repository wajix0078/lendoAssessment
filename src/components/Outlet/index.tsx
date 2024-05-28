import React from "react";
import BottomLeftChartContainer from "./subComponents/bottomLeftChartContainer";
import BottomRightChartContainer from "./subComponents/bottomRightChartContainer";
import Faq from "./subComponents/faq";
import { Header } from "./subComponents/header";
import TopContainer from "./subComponents/topContainer";


const Outlet: React.FC = () => {
    return (
        <div
            style={{
                width: "669.75px",
                backgroundColor: "#ffffff",
                borderRadius: "9.922px",
                position: "absolute",
                top: "81.858px",
                bottom: "0px",
                left: "50%",
                transform: "translate(-33.43%, 0)",
                overflow: "hidden",
                zIndex: "1",
            }}
        >
            {/* Main Header  */}
            <Header />


            <TopContainer />

            {/* charts  */}
            <div
                style={{
                    display: "flex",
                    width: "590.372px",
                    height: "228.831px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "relative",
                    zIndex: "25",
                    margin: "19.844px 0 0 39.689px",
                }}
            >
                <BottomLeftChartContainer />
                <BottomRightChartContainer />
            </div>

            {/* faq's */}
            <Faq />
        </div>
    )
}

export default Outlet;