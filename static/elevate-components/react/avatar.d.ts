import { AvatarComponent } from '../components/avatar/avatar.component.js';
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
export declare const ElvtAvatar: import("@lit/react").ReactWebComponent<AvatarComponent, {}>;
