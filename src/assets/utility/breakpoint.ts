export class Breakpoint{

    static mobile = 768;
    static desktop = 1024;

    static subNavMaxWidth = 1280;
    static subNavMinWidth = 1024;

    static isMobile(){
        return window.innerWidth < this.mobile;
    }

    static isTablet(){
        return window.innerWidth > this.mobile && window.innerWidth < this.desktop;
    }

    static isDesktop() {
        return window.innerWidth > this.desktop;
    }

}