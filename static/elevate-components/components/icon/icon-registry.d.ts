import { type IconDetail } from './icon.js';
type IconResolver = (name: string) => IconDetail | string | undefined;
declare class IconRegistry {
    private _libraries;
    private _resolvers;
    readonly DefaultLibrary = "_";
    getIcon(name: string, library?: string): IconDetail | string | undefined;
    registerIcon(name: string, definition: string | IconDetail, library?: string): boolean;
    registerIcons(definitions: Record<string, string | IconDetail>, library?: string): void;
    registerResolver(library: string, resolver: IconResolver): void;
    clear(): void;
    private validateLibraryName;
}
declare const _default: IconRegistry;
export default _default;
