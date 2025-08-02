import { LitElement, type TemplateResult } from 'lit';
export type AvatarShape = 'circle' | 'square';
export declare const AvatarShape: {
    Circle: AvatarShape;
    Square: AvatarShape;
};
/**
 * Display an avatar icon
 *
 * @since 0.0.1
 * @status Unstable
 *
 * * if an image is set - display image
 * * no image, but name - display initial(s) on calculated fill
 * * no image, no name - display generic icon
 *
 * @cssproperty --avatar-size - The avatar icon size (default: `1em`)
 * @cssproperty --avatar-color-on-dark - Initials color on a dark fill color (default: `#fff`)
 * @cssproperty --avatar-color-on-light - Initials color on a light fill color (default: `#000`)
 * @slot icon - Set custom guest icon
 */
export declare class AvatarComponent extends LitElement {
    static styles: import("lit").CSSResult;
    private readonly GuestIcon;
    private _initials?;
    private _fillColor?;
    private _name;
    shape: AvatarShape;
    get name(): string;
    /**
     * Avatar image
     */
    image?: string;
    /**
     * Set the username for the avatar, without an image the initials will be extracted and
     * a fill color will be calculated from the name value.
     */
    set name(value: string);
    render(): TemplateResult | string;
    private getColorForString;
}
declare global {
    interface HTMLElementTagNameMap {
        'elvt-avatar': AvatarComponent;
    }
}
