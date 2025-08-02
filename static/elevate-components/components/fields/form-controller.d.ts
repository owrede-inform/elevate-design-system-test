export declare class FormController {
    readonly form: HTMLFormElement;
    constructor(form: HTMLFormElement);
    reset(submitter: HTMLElement): void;
    submit(submitter: HTMLElement): void;
    private doAction;
}
