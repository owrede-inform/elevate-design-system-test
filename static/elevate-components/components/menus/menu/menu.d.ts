export interface MenuItem {
    focus: () => void;
    setFocusable: (value: boolean) => void;
    isMenuItem: true;
}
export interface Menu {
    setCurrentItem: (item: MenuItem) => void;
    get items(): MenuItem[];
}
export declare class MenuItemSelectEvent extends CustomEvent<{
    item: MenuItem;
}> {
}
