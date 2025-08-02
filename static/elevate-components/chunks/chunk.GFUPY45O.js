// src/components/tone.ts
var TONE_NEUTRAL = "neutral";
var TONE_PRIMARY = "primary";
var TONE_SUCCESS = "success";
var TONE_WARNING = "warning";
var TONE_DANGER = "danger";
var TONE_EMPHASIZED = "emphasized";
var TONE_SUBTLE = "subtle";
var Tone = {
  Neutral: TONE_NEUTRAL,
  Primary: TONE_PRIMARY,
  Success: TONE_SUCCESS,
  Warning: TONE_WARNING,
  Danger: TONE_DANGER
};
function getShoelaceVariantForTone(tone) {
  const map = {
    [TONE_NEUTRAL]: "default",
    [TONE_PRIMARY]: "primary",
    [TONE_SUCCESS]: "success",
    [TONE_WARNING]: "warning",
    [TONE_DANGER]: "danger",
    [TONE_EMPHASIZED]: "neutral",
    [TONE_SUBTLE]: "text"
  };
  return map[tone] || Tone.Neutral;
}

export {
  TONE_NEUTRAL,
  TONE_PRIMARY,
  TONE_SUCCESS,
  TONE_WARNING,
  TONE_DANGER,
  TONE_EMPHASIZED,
  TONE_SUBTLE,
  Tone,
  getShoelaceVariantForTone
};
