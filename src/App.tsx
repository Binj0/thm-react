import React from 'react';
import './styles/App.css';
import Navigation from "./components/navigation/navigation";
import LandingBanner from "./components/landingBanner";
import LandingGrid from "./components/landingGrid";

export default function App() {
  return (
    <div className="App">
        <Navigation></Navigation>
        <main className={"flex justify-center"}>
            <div className={"w-full lg:w-[1024px] w-full m-4"}>
                <LandingBanner></LandingBanner>
                <div className={"h-4"}></div>
                <LandingGrid></LandingGrid>
            </div>
        </main>
    </div>
  );
}