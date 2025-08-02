import type { ComplexAttributeConverter } from 'lit';
export interface PaddingDetail {
    top: string;
    right: string;
    bottom: string;
    left: string;
}
export declare class Padding implements PaddingDetail {
    private readonly ValuePattern;
    readonly top: string;
    readonly right: string;
    readonly bottom: string;
    readonly left: string;
    constructor(values: string | string[] | PaddingDetail);
    private fromString;
    private fromArray;
    private equal;
    toString(): string;
    toJSON(): {
        top: string;
        right: string;
        bottom: string;
        left: string;
    };
    static converter: ComplexAttributeConverter;
    applyTo(target: HTMLElement): void;
    static create(values: string | string[] | PaddingDetail, applyTo?: Padding): Padding;
}
