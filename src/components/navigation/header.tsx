import {useEffect, useState} from "react";
import {navigationData} from "../../data/navigationData";
import {SubNav} from "../../types/navigation/SubNav";
import {SubNavItem} from "../../types/navigation/SubNavItem";
import Search from "./search";
import LocaleSelector from "./localeSelector";
import {gsap} from "gsap";
import SubNavTile from "./subNavTile";
import ProfileMenu from "./profileMenu";
import {Breakpoint} from "../../assets/utility/breakpoint";

export default function Header() {

    const [navHoverIndex, setNavHoverIndex] = useState(-1);
    const [previousNavHoverIndex, setPreviousNavHoverIndex] = useState(-1);
    const [navSelectedIndex, setNavSelectedIndex] = useState(-1);
    const [headerPaddingMultiplicator, setHeaderPaddingMultiplicator] = useState(1);

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    let handleMouseOver = (navIndex: number) => {
        setNavHoverIndex(navIndex);
        setPreviousNavHoverIndex(navIndex);
    }

    let handleMouseLeave = () => {
        setNavHoverIndex(-1);
        console.log(navHoverIndex);
    }

    let handleNavClick = (index: number) => {
        //TODO
        setNavSelectedIndex(index);
    }

    let handleSubNavClick = () => {
        //TODO
        console.log("subnav click");
    }

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        console.log(document.body.scrollTop + " " + document.documentElement.scrollTop);
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            setHeaderPaddingMultiplicator(0);
        } else {
            setHeaderPaddingMultiplicator(1 - (document.documentElement.scrollTop / 50));
        }
        gsap.to("#headerNavigation", {
            duration: 0,
            paddingBottom: (headerPaddingMultiplicator) + "rem",
            paddingTop: (headerPaddingMultiplicator) + "rem",
            ease: "power4.out"
        });
        gsap.to("#thmLogo", {duration: 0, padding: 0.5 - (headerPaddingMultiplicator * 0.5) + "rem"});
        console.log(headerPaddingMultiplicator);
    }

    //TODO header machen

    return (
        <header className={"bg-[var(--background)] sticky top-0 z-20"}>
            <nav className={""}>
                <div id={"headerNavigation"} className={"flex justify-between shadow-md p-4"}>
                    <a href={"/"}>{Breakpoint.isMobile() ?
                        <img id={"thmLogo"} src={"/thm_small.svg"} alt="THM Logo" className="h-14 mr-4"/>
                        : <img id={"thmLogo"} src={"/thm.svg"} alt="THM Logo" className="h-14 mr-4"/>}</a>
                    {Breakpoint.isDesktop() ? <ul className="flex items-center">
                        {navigationData.map((navItem, index) => <li key={"navItem" + index} className={"pr-2"}>
                            <a onMouseOver={() => handleMouseOver(index)} onMouseLeave={handleMouseLeave}
                               onClick={() => handleNavClick(index)} href={navItem.pagePath}
                               className={"text-sm hover-underline-animation cursor-pointer mx-3"}>{navItem["navTitle"].toUpperCase()}</a>
                        </li>)}
                    </ul> : <div></div>}
                    <div className="flex items-center">
                        <Search></Search>
                        <ProfileMenu></ProfileMenu>
                        <LocaleSelector></LocaleSelector>
                    </div>
                </div>
                <div className={"flex justify-center absolute z-10"}>
                    <div
                        className={"shadow-lg origin-top ease-in-out transition-transform " + (navHoverIndex === -1 ? 'scale-y-0 max-h-0 delay-500' : 'scale-y-1 delay-0')}>
                        <div onMouseEnter={() => handleMouseOver(previousNavHoverIndex)} onMouseLeave={handleMouseLeave}
                             className="bg-[var(--dark-blue-90)] w-[100vw] flex backdrop-blur-md justify-center">
                            <div className={"max-w-[" + Breakpoint.subNavMaxWidth + "] min-w-[" + Breakpoint.subNavMinWidth +  "]  p-4 flex justify-stretch"}>
                                {previousNavHoverIndex >= 0 &&
                                    (navigationData[previousNavHoverIndex].subNavs.map((subNav: SubNav) => {
                                        return (<div className={"pr-4 flex-grow"}>
                                                <h3 className={"text-sm font-semibold mb-2 p-1 rounded-md text-[var(--text-on-dark-blue)] bg-[var(--dark-blue)]"}>{subNav.subNavTitle}</h3>
                                                <ul>
                                                    {subNav.subNavItems.map((subNavItem: SubNavItem) => {
                                                        return (SubNavTile(subNavItem));
                                                    })}
                                                </ul>
                                            </div>
                                        )
                                    }))}</div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}