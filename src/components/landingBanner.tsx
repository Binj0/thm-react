import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LandingBanner() {
    return (<div className={"overflow-clip z-10 shadow-lg"}>
        <img src={require("../assets/images/Header_THMApp.jpg")} alt="THM Header" className={"w-full z-0"}/>
    </div>);
}