import { InjectionToken } from '@inform-elevate/elevate-cdk';
import { type TemplateResult } from 'lit';
export declare const ELVT_DIALOG: InjectionToken<any>;
export declare class DialogContext<Type = any> {
    _close: (context: DialogContext, responseData?: any) => void;
    readonly data?: Type | undefined;
    constructor(_close: (context: DialogContext, responseData?: any) => void, data?: Type | undefined);
    confirm(responseData?: any): Promise<void>;
    cancel(): Promise<void>;
}
export interface Dialog extends HTMLElement {
    dialog: DialogContext;
}
export type DialogFunction = (context: DialogContext) => TemplateResult;
type DialogConstructor<T = Dialog> = {
    new (): T;
};
export declare class DialogManager {
    private _dialogs;
    open<T = any>(dialogTagOrClass: DialogConstructor | string | DialogFunction, opener: HTMLElement, data?: any): Promise<T>;
    private createDialogContent;
    cancelAll(): Promise<void>;
}
export {};
