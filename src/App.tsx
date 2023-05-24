import React from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/navigation/header";
import LandingBanner from "./pages/landingPage/components/landingBanner";
import LandingGrid from "./pages/landingPage/components/landingGrid";
import LandingPage from "./pages/landingPage/landingPage";
import TopicPage from "./pages/topicPage/topicPage";
import StudyPage from "./pages/studyPage/studyPage";

export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header></Header>
                <main className={"flex justify-center"}>
                    <div className={"w-full lg:w-[1024px] w-full m-4"}>
                        <Routes>
                            <Route path="/" element={<LandingPage/>}/>
                            <Route path="/studium" element={<StudyPage/>}/>
                        </Routes>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
}