import LandingBanner from "./components/landingBanner";
import LandingGrid from "./components/landingGrid";
import React from "react";

export default function LandingPage() {
    return (<div>
        <LandingBanner></LandingBanner>
        <div className={"h-4"}></div>
        <LandingGrid></LandingGrid>
    </div>);
}