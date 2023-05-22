import {FormEvent, useRef, useState} from "react";
import {gsap} from "gsap";
import {navigationData} from "../../data/navigationData";
import {SubNavItem} from "../../types/navigation/SubNavItem";
import SubNavTile from "./subNavTile";

export default function Search() {

    const [searchOpen, setSearchOpen] = useState<boolean>(false);
    const [searchHasFocus, setSearchHasFocus] = useState<boolean>(false);
    const [searchContent, setSearchContent] = useState<SubNavItem[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
        if (searchOpen) {
            gsap.to("#search-field", {duration: 0.5, opacity: 0, width: "0px", ease: "power4.out"});
            setSearchHasFocus(false);
        } else {
            gsap.to("#search-field", {duration: 0.5, opacity: 1, width: "200px", ease: "power4.out"});
            setSearchHasFocus(true);
        }
    }

    const onSearchInput = (event: FormEvent) => {
        setSearchContent([]);
        let newSearchContent: SubNavItem[] = [];
        if ((event.target as HTMLInputElement).value.length === 0) return;
        navigationData.forEach((navItem) => {
            navItem.subNavs.forEach((subNav) => {
                subNav.subNavItems.forEach((subNavItem) => {
                    if (subNavItem.title.toLowerCase().includes((event.target as HTMLInputElement).value.toLowerCase())) {
                        newSearchContent.push(subNavItem);
                    }
                });
            });
        });
        setSearchContent(newSearchContent);
    }

    const setSearchFocus = () => {
        setSearchHasFocus(true);
    }

    const setSearchBlur = () => {
        setSearchHasFocus(false);
        setSearchContent([]);
        if(inputRef.current != null){
            inputRef.current.value = "";
        }
    }

    return (<div>
        <div
            className={"bg-[var(--light-grey)] rounded-full mr-2 overflow-clip flex active:border-2 h-[40px] border-2  " + (searchHasFocus ? "border-[var(--dark-blue)]" : "border-transparent")}>
            <input id={"search-field"} type="text" ref={inputRef}
                   className={"outline-0 bg-transparent w-0 " + (searchOpen ? "pl-4" : "pl-1.5")}
                   onFocus={setSearchFocus} onBlur={setSearchBlur} placeholder="Suche"
                   onInput={event => onSearchInput(event)}/>
            <button className="hover:bg-[var(--light-grey)] flex items-center pr-1.5"
                    onClick={toggleSearch}>
                <span className="material-icons text-[var(--dark-blue)]">{searchOpen ? "close" : "search"}</span>
            </button>
        </div>
        {searchContent.length > 0 ? <div>
            <ul className={"absolute min-w-[238px] bg-[var(--dark-blue-90)] backdrop-blur-md rounded-lg p-4 mt-8 shadow-xl"}>
                {searchContent.map((subNavItem) => {
                    return (SubNavTile(subNavItem));
                })}
            </ul>
        </div> : <div/>
        }
    </div>);

}
