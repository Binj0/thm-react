import {navigationData} from "../../data/navigationData";
import {SubNav} from "../../types/navigation/SubNav";
import {SubNavItem} from "../../types/navigation/SubNavItem";

export default function SubNavigation(previousNavHoverIndex: number, navHoverIndex: number, handleMouseOver: any, handleMouseLeave: any, handleSubNavClick: any){
    return(<div className={"flex justify-center absolute"}>
        <div
            className={" shadow-lg origin-top ease-in-out transition-transform " + (navHoverIndex === -1 ? 'scale-y-0 delay-5' : 'scale-y-1 delay-0')}>
            <div onMouseEnter={() => handleMouseOver(previousNavHoverIndex)} onMouseLeave={handleMouseLeave}
                 className="bg-[var(--dark-blue-90)] flex w-full backdrop-blur-md">
                <div className={"w-[100vw] p-4 flex justify-stretch pl-[16%] pr-[16%]"}>
                    {previousNavHoverIndex >= 0 &&
                        (navigationData[previousNavHoverIndex].subNavs.map((subNav: SubNav) => {
                            return (<div className={"pr-4 flex-grow"}>
                                    <h3 className={"text-sm font-semibold mb-2 p-1 rounded-md text-[var(--text-on-dark-blue)] bg-[var(--dark-blue)]"}>{subNav.subNavTitle}</h3>
                                    <ul>
                                        {subNav.subNavItems.map((subNavItem: SubNavItem) => {
                                            return (<li>
                                                <button
                                                    className="hover:bg-[var(--green)] text-[var(--text-on-dark-blue)] font-semibold text-lg px-1 pb-0.5 rounded-md w-full text-start flex items-center">
                                                    <span className={"material-icons pr-2 text-sm"}>{subNavItem.icon}</span>
                                                    <span className={"text-xs"}>{subNavItem.title}</span>
                                                </button>
                                            </li>)
                                        })}
                                    </ul>
                                </div>
                            )
                        }))}</div>
            </div>
        </div>
    </div>);
}