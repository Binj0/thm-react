import {FormEvent, useEffect, useRef, useState} from "react";
import {gsap} from "gsap";

export default function Search() {

    const [searchOpen, setSearchOpen] = useState<boolean>(false);
    const [searchHasFocus, setSearchHasFocus] = useState<boolean>(false);

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
        console.log("toggle search");
        if(searchOpen) {
            gsap.to("#search-field", {duration: 0.5, opacity: 0, width: "0px", ease: "power4.out"});
        } else {
            gsap.to("#search-field", {duration: 0.5, opacity: 1, width: "200px", ease: "power4.out"});
        }
    }

    const onSearchInput = (event: FormEvent) => {
        console.log((event.target as HTMLInputElement).value);
    }

    const setSearchFocus = () => {
        setSearchHasFocus(true);
    }

    const setSearchBlur = () => {
        setSearchHasFocus(false);
    }

    return (<div className={"bg-[var(--light-grey)] rounded-full mr-2 overflow-clip flex active:border-2 h-[40px] border-2  " + (searchHasFocus? "border-[var(--dark-blue)]" : "border-transparent")}>
        <input id={"search-field"} type="text" className={"outline-0 bg-transparent w-0 " + (searchOpen? "pl-4" : "pl-1.5")} onFocus={setSearchFocus} onBlur={setSearchBlur} placeholder="Suche" onInput={event => onSearchInput(event)}/>
        <button className="hover:bg-[var(--light-grey)] flex items-center pr-1.5"
                onClick={toggleSearch}>
            <span className="material-icons text-[var(--dark-blue)]">{searchOpen? "close" : "search"}</span>
        </button>
    </div>);

}
