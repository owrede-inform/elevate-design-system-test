import type { ComplexAttributeConverter } from 'lit';
export interface GapDetail {
    column: string;
    row: string;
}
export declare class Gap implements GapDetail {
    private readonly ValuePattern;
    readonly column: string;
    readonly row: string;
    constructor(values: string | string[] | GapDetail);
    private fromString;
    private fromArray;
    private equal;
    toString(): string;
    toJSON(): {
        column: string;
        row: string;
    };
    applyTo(target: HTMLElement): void;
    static converter: ComplexAttributeConverter;
    static create(values: string | string[] | GapDetail, applyTo?: Gap): Gap;
}
