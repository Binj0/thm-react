import {SubNav} from "./SubNav";

export interface NavItem {

    navTitle: string,
    iconSrc?: string,
    pagePath: string,
    subNavs: SubNav[]

}