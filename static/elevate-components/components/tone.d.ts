export declare const TONE_NEUTRAL = "neutral";
export declare const TONE_PRIMARY = "primary";
export declare const TONE_SUCCESS = "success";
export declare const TONE_WARNING = "warning";
export declare const TONE_DANGER = "danger";
export declare const TONE_EMPHASIZED = "emphasized";
export declare const TONE_SUBTLE = "subtle";
export type Tone = typeof TONE_NEUTRAL | typeof TONE_PRIMARY | typeof TONE_SUCCESS | typeof TONE_WARNING | typeof TONE_DANGER;
export declare const Tone: {
    Neutral: Tone;
    Primary: Tone;
    Success: Tone;
    Warning: Tone;
    Danger: Tone;
};
export declare function getShoelaceVariantForTone(tone: string): string;
