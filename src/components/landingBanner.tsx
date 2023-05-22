import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useState} from "react";

export default function LandingBanner() {

    const [slideIndex, setSlideIndex] = useState(0);

    const slideCount = 2;

    const onSlideButton = (isForward: Boolean) => {
        console.log(slideIndex);
        if (isForward) {
            slideIndex === slideCount - 1 ? setSlideIndex(0) : setSlideIndex(slideIndex + 1);
        } else {
            slideIndex === 0 ? setSlideIndex(slideCount - 1) : setSlideIndex(slideIndex - 1);
        }
    }

    return (<div className="overflow-clip shadow-lg relative z-10">
            <div className="w-full h-full flex items-end justify-between p-4 absolute bottom-0 left-0">
                <button onClick={() => onSlideButton(false)}
                        className="shadow-2xl rounded-full bg-[var(--dark-blue-90)] hover:bg-[var(--green)] text-[var(--text-on-dark-blue)]">
                    <span className="material-icons text-3xl pt-1 px-3">navigate_before</span>
                </button>
                <button onClick={() => onSlideButton(true)}
                        className="shadow-2xl rounded-full bg-[var(--dark-blue-90)] hover:bg-[var(--green)] text-[var(--text-on-dark-blue)]">
                    <span className="material-icons text-3xl pt-1 px-3">navigate_next</span>
                </button>
            </div>
            <div className={"bg-[var(--dark-blue-90)] rounded-lg aspect-[22.3/9] p-2"}>
                <div className="overflow-hidden">
                    {slideIndex === 0 ?
                        <img src={require("../assets/images/Header_THMApp.jpg")} alt="THM Header"
                             className="w-full rounded-sm"/>
                        : <img src={require("../assets/images/Slider_GettingStarted1.jpg")} alt="THM Header"
                               className="w-full rounded-sm"/>
                    }
                </div>
            </div>
        </div>
    );
}