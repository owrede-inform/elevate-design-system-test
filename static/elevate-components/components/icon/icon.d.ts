interface IconPathDetail {
    height?: number;
    path: string;
    width?: number;
}
interface IconSvgDetail {
    height?: number;
    svg: string;
    width?: number;
}
export type IconDetail = IconPathDetail | IconSvgDetail;
export declare class Icon {
    private static DefaultHeight;
    private static DefaultWidth;
    readonly height: number;
    readonly width: number;
    private readonly _path;
    constructor(detail: string | IconDetail);
    private _svg?;
    get svg(): string;
    private _url?;
    get url(): string;
    toString(): string;
    private loadDataUrl;
    private parseDetailString;
    dispose(): void;
}
export {};
