import {SubNavItem} from "../../types/navigation/SubNavItem";

export default function SubNavTile(subNavItem: SubNavItem) {
    return (<li>
        <button
            className="hover:bg-[var(--green)] text-[var(--text-on-dark-blue)] font-semibold text-lg px-1 pb-0.5 rounded-md w-full text-start flex items-center">
                                                            <span
                                                                className={"material-icons pr-2 text-sm"}>{subNavItem.icon}</span>
            <span className={"text-xs"}>{subNavItem.title}</span>
        </button>
    </li>);
}