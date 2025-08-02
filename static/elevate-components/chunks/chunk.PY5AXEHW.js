import {
  distance_styles_default
} from "./chunk.N5ECHOWP.js";
import {
  Gap
} from "./chunk.HDRIWQEP.js";
import {
  Padding
} from "./chunk.E3TEPSWS.js";
import {
  __decorateClass
} from "./chunk.S3NI7NKU.js";

// src/components/stack/stack.component.ts
import { property } from "lit/decorators.js";
import { html, LitElement, unsafeCSS } from "lit";

// src/components/stack/stack.styles.scss?inline
var stack_styles_default = `:host {
  --_stroke-color: var(--divider-stroke-color, var(--divider-color, var(--elvt-component-divider-stroke-color-default, rgb(213, 217, 225))));
  --_stroke-size: 1px;
  --overlap-indent-default: 60%;
  display: grid;
  grid-template: 1fr/1fr;
  break-inside: avoid;
}
:host slot {
  padding: var(--padding-top) var(--padding-right) var(--padding-bottom) var(--padding-left);
  gap: var(--gap-column) var(--gap-row);
  display: flex;
  break-inside: avoid;
}
:host slot.wrap {
  flex-wrap: wrap;
}
:host::slotted {
  align-self: stretch;
}

:host([direction=row]) > slot {
  flex-direction: row;
}

:host([direction=row]:not([alignment])) > slot {
  align-items: center;
}

:host([direction=row]:not([distribution])) > slot {
  justify-content: stretch;
}
:host([direction=row]:not([distribution])) ::slotted(*) {
  flex-grow: 1;
}

:host([direction=row-reverse]) > slot {
  flex-direction: row-reverse;
}

:host([direction=row-reverse]:not([alignment])) > slot {
  align-items: center;
}

:host([direction=row-reverse]:not([distribution])) > slot {
  justify-content: stretch;
}
:host([direction=row-reverse]:not([distribution])) ::slotted(*) {
  flex-grow: 1;
}

:host([direction=column]) > slot {
  flex-direction: column;
}

:host([direction=column]:not([alignment])) > slot {
  align-items: stretch;
}

:host([direction=column]:not([distribution])) > slot {
  justify-content: flex-start;
}

:host([direction=column-reverse]) > slot {
  flex-direction: column-reverse;
}

:host([direction=column-reverse]:not([alignment])) > slot {
  align-items: stretch;
}

:host([direction=column-reverse]:not([distribution])) > slot {
  justify-content: flex-start;
}

:host([direction=multi-column]) > slot {
  display: block;
  columns: 40;
  column-width: 300px;
  column-gap: calc(var(--gap-column) * 2);
  widows: 3;
  orphans: 3;
  column-rule: var(--_stroke-size) solid var(--_stroke-color);
}
:host([direction=multi-column]) > slot::slotted(*) {
  margin-bottom: var(--gap-row);
}

:host([alignment=start]) > slot {
  align-items: flex-start;
}

:host([alignment=center]) > slot {
  align-items: center;
}

:host([alignment=end]) > slot {
  align-items: flex-end;
}

:host([distribution=start]) > slot {
  justify-content: flex-start;
}

:host([distribution=center]) > slot {
  justify-content: center;
}

:host([distribution=end]) > slot {
  justify-content: flex-end;
}

:host([distribution=space-between]) > slot {
  justify-content: space-between;
}

:host([distribution=stretch]) > slot {
  justify-content: stretch;
}
:host([distribution=stretch]) ::slotted(*) {
  flex-grow: 1;
}

:host([distribution=stretch-start]) > slot {
  justify-content: stretch;
}
:host([distribution=stretch-start]) ::slotted(:first-child) {
  flex-grow: 1;
}

:host([distribution=stretch-end]) > slot {
  justify-content: stretch;
}
:host([distribution=stretch-end]) ::slotted(:last-child) {
  flex-grow: 1;
}

:host([distribution=overlap]) {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
:host([distribution=overlap]) > slot {
  justify-content: center;
  align-items: center;
  gap: 0;
  display: grid;
  grid-template: 1fr/1fr;
  grid-template-areas: "anchor";
  overflow: visible;
  position: relative;
}
:host([distribution=overlap]) > slot::slotted(*) {
  grid-area: anchor;
}
:host([distribution=overlap]) > slot::slotted(:first-child) {
  grid-area: anchor;
  position: relative;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(2)) {
  position: relative;
  top: 0;
  left: calc(1 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(2)) {
  right: calc(1 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(3)) {
  position: relative;
  top: 0;
  left: calc(2 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(3)) {
  right: calc(2 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(4)) {
  position: relative;
  top: 0;
  left: calc(3 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(4)) {
  right: calc(3 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(5)) {
  position: relative;
  top: 0;
  left: calc(4 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(5)) {
  right: calc(4 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(6)) {
  position: relative;
  top: 0;
  left: calc(5 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(6)) {
  right: calc(5 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(7)) {
  position: relative;
  top: 0;
  left: calc(6 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(7)) {
  right: calc(6 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(8)) {
  position: relative;
  top: 0;
  left: calc(7 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(8)) {
  right: calc(7 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(9)) {
  position: relative;
  top: 0;
  left: calc(8 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(9)) {
  right: calc(8 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(10)) {
  position: relative;
  top: 0;
  left: calc(9 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(10)) {
  right: calc(9 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(11)) {
  position: relative;
  top: 0;
  left: calc(10 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(11)) {
  right: calc(10 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(12)) {
  position: relative;
  top: 0;
  left: calc(11 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(12)) {
  right: calc(11 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(13)) {
  position: relative;
  top: 0;
  left: calc(12 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(13)) {
  right: calc(12 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(14)) {
  position: relative;
  top: 0;
  left: calc(13 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(14)) {
  right: calc(13 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(15)) {
  position: relative;
  top: 0;
  left: calc(14 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(15)) {
  right: calc(14 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(16)) {
  position: relative;
  top: 0;
  left: calc(15 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(16)) {
  right: calc(15 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(17)) {
  position: relative;
  top: 0;
  left: calc(16 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(17)) {
  right: calc(16 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(18)) {
  position: relative;
  top: 0;
  left: calc(17 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(18)) {
  right: calc(17 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(19)) {
  position: relative;
  top: 0;
  left: calc(18 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(19)) {
  right: calc(18 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(20)) {
  position: relative;
  top: 0;
  left: calc(19 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(20)) {
  right: calc(19 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(21)) {
  position: relative;
  top: 0;
  left: calc(20 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(21)) {
  right: calc(20 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(22)) {
  position: relative;
  top: 0;
  left: calc(21 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(22)) {
  right: calc(21 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(23)) {
  position: relative;
  top: 0;
  left: calc(22 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(23)) {
  right: calc(22 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(24)) {
  position: relative;
  top: 0;
  left: calc(23 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(24)) {
  right: calc(23 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(25)) {
  position: relative;
  top: 0;
  left: calc(24 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(25)) {
  right: calc(24 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(26)) {
  position: relative;
  top: 0;
  left: calc(25 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(26)) {
  right: calc(25 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(27)) {
  position: relative;
  top: 0;
  left: calc(26 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(27)) {
  right: calc(26 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(28)) {
  position: relative;
  top: 0;
  left: calc(27 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(28)) {
  right: calc(27 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(29)) {
  position: relative;
  top: 0;
  left: calc(28 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(29)) {
  right: calc(28 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(30)) {
  position: relative;
  top: 0;
  left: calc(29 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(30)) {
  right: calc(29 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(31)) {
  position: relative;
  top: 0;
  left: calc(30 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(31)) {
  right: calc(30 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(32)) {
  position: relative;
  top: 0;
  left: calc(31 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(32)) {
  right: calc(31 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(33)) {
  position: relative;
  top: 0;
  left: calc(32 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(33)) {
  right: calc(32 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(34)) {
  position: relative;
  top: 0;
  left: calc(33 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(34)) {
  right: calc(33 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(35)) {
  position: relative;
  top: 0;
  left: calc(34 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(35)) {
  right: calc(34 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(36)) {
  position: relative;
  top: 0;
  left: calc(35 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(36)) {
  right: calc(35 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(37)) {
  position: relative;
  top: 0;
  left: calc(36 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(37)) {
  right: calc(36 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(38)) {
  position: relative;
  top: 0;
  left: calc(37 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(38)) {
  right: calc(37 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(39)) {
  position: relative;
  top: 0;
  left: calc(38 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(39)) {
  right: calc(38 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(40)) {
  position: relative;
  top: 0;
  left: calc(39 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(40)) {
  right: calc(39 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(41)) {
  position: relative;
  top: 0;
  left: calc(40 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(41)) {
  right: calc(40 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(42)) {
  position: relative;
  top: 0;
  left: calc(41 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(42)) {
  right: calc(41 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(43)) {
  position: relative;
  top: 0;
  left: calc(42 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(43)) {
  right: calc(42 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(44)) {
  position: relative;
  top: 0;
  left: calc(43 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(44)) {
  right: calc(43 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(45)) {
  position: relative;
  top: 0;
  left: calc(44 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(45)) {
  right: calc(44 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(46)) {
  position: relative;
  top: 0;
  left: calc(45 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(46)) {
  right: calc(45 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(47)) {
  position: relative;
  top: 0;
  left: calc(46 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(47)) {
  right: calc(46 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(48)) {
  position: relative;
  top: 0;
  left: calc(47 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(48)) {
  right: calc(47 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}
:host([distribution=overlap]) > slot::slotted(:nth-child(49)) {
  position: relative;
  top: 0;
  left: calc(48 * var(--overlap-indent, var(--overlap-indent-default)));
}
:host([distribution=overlap]) > slot:dir(rtl)::slotted(:nth-child(49)) {
  right: calc(48 * var(--overlap-indent, var(--overlap-indent-default)));
  left: auto;
}

:host([distribution=overlap][direction=row-reverse]) {
  justify-content: flex-end;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(2)) {
  top: 0;
  left: calc(1 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(2)) {
  right: calc(1 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(3)) {
  top: 0;
  left: calc(2 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(3)) {
  right: calc(2 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(4)) {
  top: 0;
  left: calc(3 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(4)) {
  right: calc(3 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(5)) {
  top: 0;
  left: calc(4 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(5)) {
  right: calc(4 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(6)) {
  top: 0;
  left: calc(5 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(6)) {
  right: calc(5 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(7)) {
  top: 0;
  left: calc(6 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(7)) {
  right: calc(6 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(8)) {
  top: 0;
  left: calc(7 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(8)) {
  right: calc(7 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(9)) {
  top: 0;
  left: calc(8 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(9)) {
  right: calc(8 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(10)) {
  top: 0;
  left: calc(9 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(10)) {
  right: calc(9 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(11)) {
  top: 0;
  left: calc(10 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(11)) {
  right: calc(10 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(12)) {
  top: 0;
  left: calc(11 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(12)) {
  right: calc(11 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(13)) {
  top: 0;
  left: calc(12 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(13)) {
  right: calc(12 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(14)) {
  top: 0;
  left: calc(13 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(14)) {
  right: calc(13 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(15)) {
  top: 0;
  left: calc(14 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(15)) {
  right: calc(14 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(16)) {
  top: 0;
  left: calc(15 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(16)) {
  right: calc(15 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(17)) {
  top: 0;
  left: calc(16 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(17)) {
  right: calc(16 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(18)) {
  top: 0;
  left: calc(17 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(18)) {
  right: calc(17 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(19)) {
  top: 0;
  left: calc(18 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(19)) {
  right: calc(18 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(20)) {
  top: 0;
  left: calc(19 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(20)) {
  right: calc(19 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(21)) {
  top: 0;
  left: calc(20 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(21)) {
  right: calc(20 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(22)) {
  top: 0;
  left: calc(21 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(22)) {
  right: calc(21 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(23)) {
  top: 0;
  left: calc(22 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(23)) {
  right: calc(22 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(24)) {
  top: 0;
  left: calc(23 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(24)) {
  right: calc(23 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(25)) {
  top: 0;
  left: calc(24 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(25)) {
  right: calc(24 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(26)) {
  top: 0;
  left: calc(25 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(26)) {
  right: calc(25 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(27)) {
  top: 0;
  left: calc(26 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(27)) {
  right: calc(26 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(28)) {
  top: 0;
  left: calc(27 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(28)) {
  right: calc(27 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(29)) {
  top: 0;
  left: calc(28 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(29)) {
  right: calc(28 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(30)) {
  top: 0;
  left: calc(29 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(30)) {
  right: calc(29 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(31)) {
  top: 0;
  left: calc(30 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(31)) {
  right: calc(30 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(32)) {
  top: 0;
  left: calc(31 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(32)) {
  right: calc(31 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(33)) {
  top: 0;
  left: calc(32 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(33)) {
  right: calc(32 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(34)) {
  top: 0;
  left: calc(33 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(34)) {
  right: calc(33 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(35)) {
  top: 0;
  left: calc(34 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(35)) {
  right: calc(34 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(36)) {
  top: 0;
  left: calc(35 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(36)) {
  right: calc(35 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(37)) {
  top: 0;
  left: calc(36 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(37)) {
  right: calc(36 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(38)) {
  top: 0;
  left: calc(37 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(38)) {
  right: calc(37 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(39)) {
  top: 0;
  left: calc(38 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(39)) {
  right: calc(38 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(40)) {
  top: 0;
  left: calc(39 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(40)) {
  right: calc(39 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(41)) {
  top: 0;
  left: calc(40 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(41)) {
  right: calc(40 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(42)) {
  top: 0;
  left: calc(41 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(42)) {
  right: calc(41 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(43)) {
  top: 0;
  left: calc(42 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(43)) {
  right: calc(42 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(44)) {
  top: 0;
  left: calc(43 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(44)) {
  right: calc(43 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(45)) {
  top: 0;
  left: calc(44 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(45)) {
  right: calc(44 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(46)) {
  top: 0;
  left: calc(45 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(46)) {
  right: calc(45 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(47)) {
  top: 0;
  left: calc(46 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(47)) {
  right: calc(46 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(48)) {
  top: 0;
  left: calc(47 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(48)) {
  right: calc(47 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}
:host([distribution=overlap][direction=row-reverse]) > slot::slotted(:nth-child(49)) {
  top: 0;
  left: calc(48 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
}
:host([distribution=overlap][direction=row-reverse]) > slot:dir(rtl)::slotted(:nth-child(49)) {
  right: calc(48 * var(--overlap-indent, var(--overlap-indent-default)) * -1);
  left: auto;
}

:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(2)) {
  position: absolute;
  top: calc(1 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(3)) {
  position: absolute;
  top: calc(2 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(4)) {
  position: absolute;
  top: calc(3 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(5)) {
  position: absolute;
  top: calc(4 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(6)) {
  position: absolute;
  top: calc(5 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(7)) {
  position: absolute;
  top: calc(6 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(8)) {
  position: absolute;
  top: calc(7 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(9)) {
  position: absolute;
  top: calc(8 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(10)) {
  position: absolute;
  top: calc(9 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(11)) {
  position: absolute;
  top: calc(10 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(12)) {
  position: absolute;
  top: calc(11 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(13)) {
  position: absolute;
  top: calc(12 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(14)) {
  position: absolute;
  top: calc(13 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(15)) {
  position: absolute;
  top: calc(14 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(16)) {
  position: absolute;
  top: calc(15 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(17)) {
  position: absolute;
  top: calc(16 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(18)) {
  position: absolute;
  top: calc(17 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(19)) {
  position: absolute;
  top: calc(18 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(20)) {
  position: absolute;
  top: calc(19 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(21)) {
  position: absolute;
  top: calc(20 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(22)) {
  position: absolute;
  top: calc(21 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(23)) {
  position: absolute;
  top: calc(22 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(24)) {
  position: absolute;
  top: calc(23 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(25)) {
  position: absolute;
  top: calc(24 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(26)) {
  position: absolute;
  top: calc(25 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(27)) {
  position: absolute;
  top: calc(26 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(28)) {
  position: absolute;
  top: calc(27 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(29)) {
  position: absolute;
  top: calc(28 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(30)) {
  position: absolute;
  top: calc(29 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(31)) {
  position: absolute;
  top: calc(30 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(32)) {
  position: absolute;
  top: calc(31 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(33)) {
  position: absolute;
  top: calc(32 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(34)) {
  position: absolute;
  top: calc(33 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(35)) {
  position: absolute;
  top: calc(34 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(36)) {
  position: absolute;
  top: calc(35 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(37)) {
  position: absolute;
  top: calc(36 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(38)) {
  position: absolute;
  top: calc(37 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(39)) {
  position: absolute;
  top: calc(38 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(40)) {
  position: absolute;
  top: calc(39 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(41)) {
  position: absolute;
  top: calc(40 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(42)) {
  position: absolute;
  top: calc(41 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(43)) {
  position: absolute;
  top: calc(42 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(44)) {
  position: absolute;
  top: calc(43 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(45)) {
  position: absolute;
  top: calc(44 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(46)) {
  position: absolute;
  top: calc(45 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(47)) {
  position: absolute;
  top: calc(46 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(48)) {
  position: absolute;
  top: calc(47 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}
:host([distribution=overlap][direction=column]) > slot::slotted(:nth-child(49)) {
  position: absolute;
  top: calc(48 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
}

:host([distribution=overlap][direction=column-reverse]) {
  align-items: flex-end;
  min-height: 100%;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(2)) {
  bottom: calc(1 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(3)) {
  bottom: calc(2 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(4)) {
  bottom: calc(3 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(5)) {
  bottom: calc(4 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(6)) {
  bottom: calc(5 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(7)) {
  bottom: calc(6 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(8)) {
  bottom: calc(7 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(9)) {
  bottom: calc(8 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(10)) {
  bottom: calc(9 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(11)) {
  bottom: calc(10 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(12)) {
  bottom: calc(11 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(13)) {
  bottom: calc(12 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(14)) {
  bottom: calc(13 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(15)) {
  bottom: calc(14 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(16)) {
  bottom: calc(15 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(17)) {
  bottom: calc(16 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(18)) {
  bottom: calc(17 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(19)) {
  bottom: calc(18 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(20)) {
  bottom: calc(19 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(21)) {
  bottom: calc(20 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(22)) {
  bottom: calc(21 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(23)) {
  bottom: calc(22 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(24)) {
  bottom: calc(23 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(25)) {
  bottom: calc(24 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(26)) {
  bottom: calc(25 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(27)) {
  bottom: calc(26 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(28)) {
  bottom: calc(27 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(29)) {
  bottom: calc(28 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(30)) {
  bottom: calc(29 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(31)) {
  bottom: calc(30 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(32)) {
  bottom: calc(31 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(33)) {
  bottom: calc(32 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(34)) {
  bottom: calc(33 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(35)) {
  bottom: calc(34 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(36)) {
  bottom: calc(35 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(37)) {
  bottom: calc(36 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(38)) {
  bottom: calc(37 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(39)) {
  bottom: calc(38 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(40)) {
  bottom: calc(39 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(41)) {
  bottom: calc(40 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(42)) {
  bottom: calc(41 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(43)) {
  bottom: calc(42 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(44)) {
  bottom: calc(43 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(45)) {
  bottom: calc(44 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(46)) {
  bottom: calc(45 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(47)) {
  bottom: calc(46 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(48)) {
  bottom: calc(47 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}
:host([distribution=overlap][direction=column-reverse]) > slot::slotted(:nth-child(49)) {
  bottom: calc(48 * var(--overlap-indent, var(--overlap-indent-default)));
  left: 0;
  right: auto;
  top: auto;
}`;

// src/components/stack/stack.component.ts
import { classMap } from "lit/directives/class-map.js";
import { webComponent } from "@inform-elevate/elevate-cdk";
var StackAlignment = {
  Start: "start",
  End: "end",
  Center: "center",
  Stretch: "stretch"
};
var StackDistribution = {
  Start: "start",
  End: "end",
  Center: "center",
  Overlap: "overlap",
  Stretch: "stretch",
  StretchStart: "stretch-start",
  StretchEnd: "stretch-end",
  SpaceBetween: "space-between"
};
var StackDirection = {
  Row: "row",
  Column: "column",
  RowReverse: "row-reverse",
  ColumnReverse: "column-reverse",
  MultiColumn: "multi-column"
};
var StackComponent = class extends LitElement {
  constructor() {
    super(...arguments);
    this.direction = StackDirection.Row;
    this.wrap = false;
    this._gap = new Gap("s");
    this._padding = new Padding("0");
  }
  get gap() {
    return this._gap;
  }
  set gap(value) {
    this._gap = Gap.create(value, this._gap);
  }
  get padding() {
    return this._padding;
  }
  set padding(value) {
    this._padding = Padding.create(value, this._padding);
  }
  render() {
    this._gap.applyTo(this);
    this._padding.applyTo(this);
    const classes = classMap({
      wrap: this.wrap
    });
    return html`<slot class=${classes}></slot>`;
  }
};
StackComponent.styles = [unsafeCSS(distance_styles_default), unsafeCSS(stack_styles_default)];
__decorateClass([
  property({
    type: String,
    reflect: true
  })
], StackComponent.prototype, "alignment", 2);
__decorateClass([
  property({
    type: String,
    reflect: true
  })
], StackComponent.prototype, "distribution", 2);
__decorateClass([
  property({
    type: String,
    reflect: true
  })
], StackComponent.prototype, "direction", 2);
__decorateClass([
  property({ type: Boolean, reflect: true })
], StackComponent.prototype, "wrap", 2);
__decorateClass([
  property({
    type: String,
    reflect: true,
    converter: Gap.converter
  })
], StackComponent.prototype, "gap", 1);
__decorateClass([
  property({
    type: String,
    reflect: true,
    converter: Padding.converter
  })
], StackComponent.prototype, "padding", 1);
StackComponent = __decorateClass([
  webComponent({ name: "elvt-stack" })
], StackComponent);

export {
  StackAlignment,
  StackDistribution,
  StackDirection,
  StackComponent
};
