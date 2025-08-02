import type { DefineComponent } from "vue";

import type { CheckboxComponent, CheckboxChangeEvent } from "../../components/checkbox/checkbox.component.js";
import type { SwitchComponent } from "../../components/switch/switch.component.js";
import type { ExpansionPanelComponent } from "../../components/expansion-panels/expansion-panel/expansion-panel.component.js";
import type { PaginatorComponent, PageChangeEvent } from "../../components/paginator/paginator.component.js";
import type {
  ResizeObserverComponent,
  ResizeObservationEvent,
} from "../../components/resize-observer/resize-observer.component.js";
import type {
  MutationObserverComponent,
  MutationObservationEvent,
} from "../../components/mutation-observer/mutation-observer.component.js";
import type { AvatarComponent } from "../../components/avatar/avatar.component.js";
import type { IconComponent } from "../../components/icon/icon.component.js";
import type { ChipComponent, CustomEvent } from "../../components/chip/chip.component.js";
import type { BadgeComponent } from "../../components/badge/badge.component.js";
import type { DropdownComponent } from "../../components/dropdown/dropdown.component.js";
import type { MenuComponent, MenuItemSelectEvent } from "../../components/menus/menu/menu.component.js";
import type { MenuItemComponent } from "../../components/menus/menu-item/menu-item.component.js";
import type { ApplicationComponent } from "../../components/application/application.component.js";
import type { CardComponent } from "../../components/card/card.component.js";
import type { DividerComponent } from "../../components/divider/divider.component.js";
import type { StackComponent } from "../../components/stack/stack.component.js";
import type { ToolbarComponent } from "../../components/toolbar/toolbar.component.js";
import type { LightboxComponent, CustomEvent } from "../../components/lightbox/lightbox.component.js";
import type { ExpansionPanelGroupComponent } from "../../components/expansion-panels/expansion-panel-group/expansion-panel-group.component.js";
import type { TabComponent, CustomEvent } from "../../components/tabs/tab/tab.component.js";
import type { TabPanelComponent } from "../../components/tabs/tab-panel/tab-panel.component.js";
import type { TabGroupComponent } from "../../components/tabs/tab-group/tab-group.component.js";
import type { FieldComponent } from "../../components/fields/field/field.component.js";
import type { InputComponent } from "../../components/input/input.component.js";
import type { RadioComponent } from "../../components/radios/radio/radio.component.js";
import type { RadioGroupComponent, Event } from "../../components/radios/radio-group/radio-group.component.js";
import type { SelectComponent, Event } from "../../components/select/select.component.js";
import type { TextareaComponent } from "../../components/textarea/textarea.component.js";
import type { BreadcrumbItemComponent } from "../../components/breadcrumbs/breadcrumb-item/breadcrumb-item.component.js";
import type { BreadcrumbComponent } from "../../components/breadcrumbs/breadcrumb/breadcrumb.component.js";
import type { ButtonComponent } from "../../components/buttons/button/button.component.js";
import type { IconButtonComponent } from "../../components/icon-button/icon-button.component.js";
import type { ButtonGroupComponent } from "../../components/buttons/button-group/button-group.component.js";
import type { LinkComponent } from "../../components/link/link.component.js";
import type { TooltipComponent } from "../../components/tooltip/tooltip.component.js";
import type { VisuallyHiddenComponent } from "../../components/visually-hidden/visually-hidden.component.js";
import type { IndicatorComponent } from "../../components/indicator/indicator.component.js";
import type { ProgressComponent } from "../../components/progress/progress.component.js";
import type { SkeletonComponent } from "../../components/skeleton/skeleton.component.js";
import type { NotificationComponent } from "../../components/notification/notification.component.js";
import type {
  TableComponent,
  TableRowEvent,
  TableSelectionChangeEvent,
} from "../../components/tables/table/table.component.js";
import type { TableColumnComponent } from "../../components/tables/table-column/table-column.component.js";
import type { TableCellComponent } from "../../components/tables/table-cell/table-cell.component.js";
import type { TableRowComponent, TableRowEvent } from "../../components/tables/table-row/table-row.component.js";

type CheckboxComponentProps = {
  /** The checkbox's help text.
If you need to display HTML, use the `help-text` slot instead. */
  "help-text"?: CheckboxComponent["helpText"];
  /** If `true`, the checkbox will visually appear as indeterminate. */
  indeterminate?: CheckboxComponent["indeterminate"];
  /** Size of the Checkbox Component. */
  size?: CheckboxComponent["size"];
  /** Sets the component in a checked/activated state if true */
  checked?: CheckboxComponent["checked"];
  /** The value returned by the value property if the control is checked */
  "checked-value"?: CheckboxComponent["checkedValue"];
  /** This will be the `checkedValue` if the checkbox is checked, otherwise `undefined` */
  value?: CheckboxComponent["value"];
  /** This will hide the label, a checkbox's label is highly recommended for Accessibility reasons. */
  "hide-label"?: CheckboxComponent["hideLabel"];
  /** If set to `true`, user can't interact with the component. */
  disabled?: CheckboxComponent["disabled"];
  /** Makes the control a required field. */
  required?: CheckboxComponent["required"];
  /** Form field name, used in form data */
  name?: CheckboxComponent["name"];
  /**  */
  touched?: CheckboxComponent["touched"];
  /**  */
  validators?: CheckboxComponent["validators"];
  /** Associated form if available. This is the nearest form on the same (Shadow) DOM */
  form?: CheckboxComponent["form"];
  /**  */
  validationMessage?: CheckboxComponent["validationMessage"];
  /** Return the current validity state */
  validity?: CheckboxComponent["validity"];
  /**  */
  willValidate?: CheckboxComponent["willValidate"];
  /** Emitted when the checked state changes. */
  onchange?: (e: CustomEvent<CheckboxChangeEvent>) => void;
  /** Emitted when the checkbox loses focus. */
  onblur?: (e: CustomEvent<never>) => void;
  /** Emitted when the checkbox receives input. */
  oninput?: (e: CustomEvent<never>) => void;
};

type SwitchComponentProps = {
  /** The checkbox's help text.
If you need to display HTML, use the `help-text` slot instead. */
  "help-text"?: SwitchComponent["helpText"];
  /** Allows to define the value returned if the control is checked */
  "checked-value"?: SwitchComponent["checkedValue"];
  /** Size of the Switch Component. */
  size?: SwitchComponent["size"];
  /** Sets the component in a checked/activated state if true */
  checked?: SwitchComponent["checked"];
  /** This will hide the label, a label is highly recommended for Accessibility reasons. */
  "hide-label"?: SwitchComponent["hideLabel"];
  /** The switch's tone (color). */
  tone?: SwitchComponent["tone"];
  /** If set to `true`, user can't interact with the component. */
  disabled?: SwitchComponent["disabled"];
  /** Makes the control a required field. */
  required?: SwitchComponent["required"];
  /** Form field name, used in form data */
  name?: SwitchComponent["name"];
  /**  */
  touched?: SwitchComponent["touched"];
  /** This will be the `checkedValue` if the checkbox is checked, otherwise `undefined` */
  value?: SwitchComponent["value"];
  /**  */
  validators?: SwitchComponent["validators"];
  /** Associated form if available. This is the nearest form on the same (Shadow) DOM */
  form?: SwitchComponent["form"];
  /**  */
  validationMessage?: SwitchComponent["validationMessage"];
  /** Return the current validity state */
  validity?: SwitchComponent["validity"];
  /**  */
  willValidate?: SwitchComponent["willValidate"];
  /** Emitted when the checked state changes. */
  onSwitchChangeEvent?: (e: CustomEvent<never>) => void;
  /** Emitted when the switch receives input. */
  oninput?: (e: CustomEvent<never>) => void;
  /** Triggers if the value is changed */
  onchange?: (e: CustomEvent<never>) => void;
  /** Trigger on focus out */
  onblur?: (e: CustomEvent<never>) => void;
};

type ExpansionPanelComponentProps = {
  /** Size of the Expansion Panel Component. */
  size?: ExpansionPanelComponent["size"];
  /** The summary to show in the header. */
  summary?: ExpansionPanelComponent["summary"];
  /** Disables the panel so it can't be expanded. */
  disabled?: ExpansionPanelComponent["disabled"];
  /** Display a different background. */
  layer?: ExpansionPanelComponent["layer"];
  /** Indicates whether the details are open. You can toggle this attribute to show and hide the details. */
  open?: ExpansionPanelComponent["open"];

  /** Emitted when the panel opens or closes. */
  onExpansionPanelChangeEvent?: (e: CustomEvent<never>) => void;
};

type PaginatorComponentProps = {
  /**  */
  disabled?: PaginatorComponent["disabled"];
  /** Hide the page size label and select */
  "hide-page-size"?: PaginatorComponent["hidePageSize"];
  /** Hide the range status label */
  "hide-range-status"?: PaginatorComponent["hideRangeStatus"];
  /**  */
  "page-size-options"?: PaginatorComponent["pageSizeOptions"];
  /**  */
  size?: PaginatorComponent["size"];
  /** Whether to show the first/last buttons to the user. */
  "show-first-last-buttons"?: PaginatorComponent["showFirstLastButtons"];
  /**  */
  length?: PaginatorComponent["length"];
  /**  */
  "page-index"?: PaginatorComponent["pageIndex"];
  /** Number of items to display on a page. */
  "page-size"?: PaginatorComponent["pageSize"];

  /**  */
  "onpage-change"?: (e: CustomEvent<PageChangeEvent>) => void;
};

type ResizeObserverComponentProps = {
  /** Delay in milliseconds */
  delay?: ResizeObserverComponent["delay"];
  /** Disable the observer */
  disabled?: ResizeObserverComponent["disabled"];

  /**  */
  onresize?: (e: CustomEvent<ResizeObservationEvent>) => void;
};

type MutationObserverComponentProps = {
  /**  */
  "attribute-old-value"?: MutationObserverComponent["attributeOldValue"];
  /**  */
  "character-data"?: MutationObserverComponent["characterData"];
  /**  */
  "character-data-old-value"?: MutationObserverComponent["characterDataOldValue"];
  /**  */
  "child-list"?: MutationObserverComponent["childList"];
  /** Disable the observer */
  disabled?: MutationObserverComponent["disabled"];
  /**  */
  subtree?: MutationObserverComponent["subtree"];
  /**  */
  "attribute-filter"?: MutationObserverComponent["attributeFilter"];

  /**  */
  onmutation?: (e: CustomEvent<MutationObservationEvent>) => void;
};

type AvatarComponentProps = {
  /**  */
  shape?: AvatarComponent["shape"];
  /** Avatar image */
  image?: AvatarComponent["image"];
  /** Set the username for the avatar, without an image the initials will be extracted and
a fill color will be calculated from the name value. */
  name?: AvatarComponent["name"];
};

type IconComponentProps = {
  /** Set an aspect ratio for the icon element. The icon will be centered. */
  "aspect-ratio"?: IconComponent["aspectRatio"];
  /** Set a background color for the icon as a hexadecimal color code. The primary icon color will depend on the
lightness of the color. */
  fill?: IconComponent["fill"];
  /**  */
  selected?: IconComponent["selected"];
  /**  */
  image?: IconComponent["image"];
  /** The emblem is a second icon that will be put in a cutout in the lower right corner of the primary icon. */
  emblem?: IconComponent["emblem"];
  /** The icon can be provided as a svg path, and encoded JSON or a URL. */
  icon?: IconComponent["icon"];
};

type ChipComponentProps = {
  /** Chip tone (color). */
  tone?: ChipComponent["tone"];
  /** Size of the Chip Component. */
  size?: ChipComponent["size"];
  /** If set to shape `pill`, displays a chip with rounded edges (pill style). */
  shape?: ChipComponent["shape"];
  /** Shows a remove action and makes the chip removable. */
  removable?: ChipComponent["removable"];
  /**  */
  editable?: ChipComponent["editable"];
  /** A custom label for assistive devices, used in the remove button. */
  "remove-label"?: ChipComponent["removeLabel"];

  /** Emitted when the removable prop is enabled and chip icon remove area is clicked. */
  "onrequest-remove"?: (e: CustomEvent<CustomEvent>) => void;
  /** Emitted when the editable prop is enabled and chip content area is clicked. */
  "onrequest-edit"?: (e: CustomEvent<CustomEvent>) => void;
};

type BadgeComponentProps = {
  /** Allows to modify the default padding of the badge. */
  padding?: BadgeComponent["padding"];
  /**  */
  pulse?: BadgeComponent["pulse"];
  /** If set to shape `pill`, displays a chip with rounded edges (pill style). */
  shape?: BadgeComponent["shape"];
  /** The badge's tone (color). */
  tone?: BadgeComponent["tone"];
};

type DropdownComponentProps = {
  /** The hoist attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. */
  hoist?: DropdownComponent["hoist"];
  /** The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep
the panel inside the viewport. */
  placement?: DropdownComponent["placement"];
  /** Disables the dropdown so the panel will not open. */
  disabled?: DropdownComponent["disabled"];
  /** By default, the dropdown is closed when an item is selected. This attribute will keep it open instead.
Useful for dropdowns that allow for multiple interactions. */
  "stay-open-on-select"?: DropdownComponent["stayOpenOnSelect"];
  /** Indicates whether the dropdown is open. You can toggle thi s attribute to show and hide the dropdown,
or you can use the show() and hide() methods and this attribute will reflect the dropdown’s open state. */
  open?: DropdownComponent["open"];
};

type MenuComponentProps = {
  /**  */
  shape?: MenuComponent["shape"];
  /** Return all menu items (identified by the 'role' attribute) */
  items?: MenuComponent["items"];
  /**  */
  "onelvt-item-select"?: (e: CustomEvent<MenuItemSelectEvent>) => void;
};

type MenuItemComponentProps = {
  /** Disables the item */
  disabled?: MenuItemComponent["disabled"];
  /** Display the item as selected (for navigations) */
  selected?: MenuItemComponent["selected"];
  /** Set the type attribute to checkbox to create a menu item that will toggle on and off when selected. */
  type?: MenuItemComponent["type"];
  /** A value to store in the menu item. This can be used as a context when selected. */
  value?: MenuItemComponent["value"];
  /** When set, the menu item will open the url if clicked */
  href?: MenuItemComponent["href"];
  /** Tells the browser where to open the link. Only used when `href` is present. */
  target?: MenuItemComponent["target"];
  /** Draws the item in a checked state. */
  checked?: MenuItemComponent["checked"];
  /** Make it easy to recognize as a menu item. */
  isMenuItem?: MenuItemComponent["isMenuItem"];
};

type ApplicationComponentProps = {
  /** Setting `root` will disable inheritance and set the theme only for this container. */
  root?: ApplicationComponent["root"];
  /** The identifier/name of the theme. It needs to start with an ASCII letter and consists of only  ASCII letters and digits.

Setting this value will apply CSS classes to the body element to activate the theme. */
  theme?: ApplicationComponent["theme"];
  /**  */
  "[DependencyContainer.Symbol]"?: ApplicationComponent["[DependencyContainer.Symbol]"];
  /**  */
  providers?: ApplicationComponent["providers"];
};

type CardComponentProps = {
  /**  */
  border?: CardComponent["border"];
  /**  */
  layer?: CardComponent["layer"];
  /** The padding will apply to all parts of the card. For individual
paddings use stack elements inside the parts. */
  padding?: CardComponent["padding"];
};

type DividerComponentProps = {
  /** Let the divider direction matches the container direction */
  direction?: DividerComponent["direction"];
  /** Divider size adds distance before/after the separator depending on the direction.
If undefined it will add no distance. */
  size?: DividerComponent["size"];
  /** The padding will apply to all parts of the card. For individual
paddings use stack elements inside the parts. */
  padding?: DividerComponent["padding"];
};

type StackComponentProps = {
  /** Align the children against the direction axis, the default depends on the direction.
Rows use `center`, Columns use `stretch` */
  alignment?: StackComponent["alignment"];
  /** Distribute the children on the direction axis, the default depends on the direction.
Rows use `stretch`, Columns use `start` */
  distribution?: StackComponent["distribution"];
  /**  */
  direction?: StackComponent["direction"];
  /**  */
  wrap?: StackComponent["wrap"];
  /**  */
  gap?: StackComponent["gap"];
  /**  */
  padding?: StackComponent["padding"];
};

type ToolbarComponentProps = {
  /**  */
  border?: ToolbarComponent["border"];
  /**  */
  layer?: ToolbarComponent["layer"];
  /**  */
  direction?: ToolbarComponent["direction"];
  /** The gap will apply to the toolbar container. */
  gap?: ToolbarComponent["gap"];
  /** The padding will apply to the toolbar container. For individual
paddings use stack elements inside the parts. */
  padding?: ToolbarComponent["padding"];
};

type LightboxComponentProps = {
  /**  */
  "onbackdrop-click"?: (e: CustomEvent<CustomEvent>) => void;
  /**  */
  "onescape-keypress"?: (e: CustomEvent<CustomEvent>) => void;
};

type ExpansionPanelGroupComponentProps = {
  /** Indicates whether the panel group should allow multiple expanded expansion panel to be expanded simultaneously. */
  "allow-multiple-expanded"?: ExpansionPanelGroupComponent["allowMultipleExpanded"];
  /** A label to use for the expansion panel group. This won't be displayed on the screen, but it will be announced by assistive
devices when interacting with the control and is strongly recommended. */
  label?: ExpansionPanelGroupComponent["label"];
  /** Gap between the expansion panels */
  gap?: ExpansionPanelGroupComponent["gap"];
  /**  */
  defaultSlot?: ExpansionPanelGroupComponent["defaultSlot"];
};

type TabComponentProps = {
  /** The unique (per tab group) identifier of the corresponding tab panel. */
  panel?: TabComponent["panel"];
  /** Whether this tab is disabled, i.e. can't be activated. */
  disabled?: TabComponent["disabled"];
  /** Whether this tab can be closed by the user.
If true, a close button will be rendered on the tab. */
  closable?: TabComponent["closable"];
  /** A custom label for assistive devices, used in the close button. */
  "close-label"?: TabComponent["closeLabel"];
  /** Whether this tab is selected.
This property is set by the parent `elvt-tab-group` component. */
  selected?: TabComponent["selected"];

  /** Emitted when the tab is `closable` and the close button is clicked (or when closing the tab is requested programmatically). */
  "onrequest-close"?: (e: CustomEvent<CustomEvent>) => void;
  /** Emitted when the tab is selected. The event detail contains the `panel` attribute of the tab. */
  "onselection-change"?: (e: CustomEvent<never>) => void;
};

type TabPanelComponentProps = {
  /** The unique (per tab group) identifier of this tab panel used to associate it with the corresponding tab. */
  name?: TabPanelComponent["name"];
  /** When true, the tab panel will be shown. */
  selected?: TabPanelComponent["selected"];
};

type TabGroupComponentProps = {
  /** The name of the currently active tab. */
  "active-tab"?: TabGroupComponent["activeTab"];

  /** Emitted when the active tab changes. */
  onchange?: (e: CustomEvent<never>) => void;
};

type FieldComponentProps = {
  /** The forms label text, use slot for complex labels */
  label?: FieldComponent["label"];
  /** A descriptive text for the select, use the help-text slot for HTML. */
  "help-text"?: FieldComponent["helpText"];
  /** Show required indicator on label */
  required?: FieldComponent["required"];
  /** Show label / help text as disabled, this will not modify the control. */
  disabled?: FieldComponent["disabled"];
  /** Show label / help text in error state, this will not modify the control. */
  invalid?: FieldComponent["invalid"];
  /** Group mode for multiple form controls with own labels. This will replace the
internal `label` element with a `fieldset` and `legend` avoiding nested label elements. */
  group?: FieldComponent["group"];
  /** Visually hide field label */
  "hide-label"?: FieldComponent["hideLabel"];
  /** Size of the field. */
  size?: FieldComponent["size"];
};

type InputComponentProps = {
  /**  Indicating that an element should be focused on page load */
  autofocus?: InputComponent["autofocus"];
  /** Specify what if any permission the user agent has to provide automated assistance in filling
out the field value */
  autocomplete?: InputComponent["autocomplete"];
  /** Add a clear button if the value is set */
  clearable?: InputComponent["clearable"];
  /** A maximum value for date/number inputs */
  max?: InputComponent["max"];
  /** A maximum character length */
  maxlength?: InputComponent["maxlength"];
  /** A minimum value for date/number inputs */
  min?: InputComponent["min"];
  /** A minimum character length */
  minlength?: InputComponent["minlength"];
  /** A regular expression pattern to validate input against. */
  pattern?: InputComponent["pattern"];
  /** Input placeholder text */
  placeholder?: InputComponent["placeholder"];
  /** Size of the input. */
  size?: InputComponent["size"];
  /** A step value for date/number inputs */
  step?: InputComponent["step"];
  /** Input type (as provided by the browser) */
  type?: InputComponent["type"];
  /** If set to `true`, the input is readonly. */
  readonly?: InputComponent["readonly"];
  /** If set to `true`, the field will be invalid if empty */
  required?: InputComponent["required"];
  /**  */
  value?: InputComponent["value"];
  /** Automatically capitalize text input */
  autocapitalize?: InputComponent["autocapitalize"];
  /** Defines what action label (or icon) to present for the enter key on virtual keyboards */
  enterkeyhint?: InputComponent["enterKeyHint"];
  /** Input mode for virtual keyboards */
  inputmode?: InputComponent["inputMode"];
  /** Enables spell checking on the input */
  spellcheck?: InputComponent["spellcheck"];
  /** The forms label text, use slot for complex labels */
  label?: InputComponent["label"];
  /** A descriptive text for the select, use the help-text slot for HTML. */
  "help-text"?: InputComponent["helpText"];
  /** If set to `true`, user can't interact with the component. */
  disabled?: InputComponent["disabled"];
  /** Form field name, used in form data */
  name?: InputComponent["name"];
  /**  */
  touched?: InputComponent["touched"];
  /**  */
  validators?: InputComponent["validators"];
  /** Associated form if available. This is the nearest form on the same (Shadow) DOM */
  form?: InputComponent["form"];
  /**  */
  validationMessage?: InputComponent["validationMessage"];
  /** Return the current validity state */
  validity?: InputComponent["validity"];
  /**  */
  willValidate?: InputComponent["willValidate"];
  /** Triggers if the value is changed */
  onchange?: (e: CustomEvent<never>) => void;
  /** Emitted when the element control receives input. */
  oninput?: (e: CustomEvent<never>) => void;
  /** Trigger on focus out */
  onblur?: (e: CustomEvent<never>) => void;
};

type RadioComponentProps = {
  /** Size of the Radio Component.
Add the size attribute to the Field's Group to change the radios’ size. */
  size?: RadioComponent["size"];
  /**  */
  checked?: RadioComponent["checked"];
  /** The radio's value. When selected, the field's group will get this value. */
  value?: RadioComponent["value"];
  /** This will hide the label, a radio's label is highly recommended for Accessibility reasons. */
  "hide-label"?: RadioComponent["hideLabel"];
  /** If set to `true`, user can't interact with the component. */
  disabled?: RadioComponent["disabled"];
  /** Makes the control a required field. */
  required?: RadioComponent["required"];
  /** Form field name, used in form data */
  name?: RadioComponent["name"];
  /**  */
  touched?: RadioComponent["touched"];
  /**  */
  validators?: RadioComponent["validators"];
  /** Associated form if available. This is the nearest form on the same (Shadow) DOM */
  form?: RadioComponent["form"];
  /**  */
  validationMessage?: RadioComponent["validationMessage"];
  /** Return the current validity state */
  validity?: RadioComponent["validity"];
  /**  */
  willValidate?: RadioComponent["willValidate"];
  /** Triggers if the value is changed */
  onchange?: (e: CustomEvent<never>) => void;
  /** Emitted when the element control receives input. */
  oninput?: (e: CustomEvent<never>) => void;
  /** Trigger on focus out */
  onblur?: (e: CustomEvent<never>) => void;
};

type RadioGroupComponentProps = {
  /** If set to `true`, one child has to be checked for the group to be valid */
  required?: RadioGroupComponent["required"];
  /** Size of the Radio (Group) Component.
Add the size attribute to the Field's Group to change the radios’ size. */
  size?: RadioGroupComponent["size"];
  /** The radio's value. */
  value?: RadioGroupComponent["value"];
  /** The forms label text, use slot for complex labels */
  label?: RadioGroupComponent["label"];
  /** A descriptive text for the select, use the help-text slot for HTML. */
  "help-text"?: RadioGroupComponent["helpText"];
  /** If set to `true`, user can't interact with the component. */
  disabled?: RadioGroupComponent["disabled"];
  /** Form field name, used in form data */
  name?: RadioGroupComponent["name"];
  /**  */
  touched?: RadioGroupComponent["touched"];
  /**  */
  validators?: RadioGroupComponent["validators"];
  /** Associated form if available. This is the nearest form on the same (Shadow) DOM */
  form?: RadioGroupComponent["form"];
  /**  */
  validationMessage?: RadioGroupComponent["validationMessage"];
  /** Return the current validity state */
  validity?: RadioGroupComponent["validity"];
  /**  */
  willValidate?: RadioGroupComponent["willValidate"];
  /**  */
  ontype?: (e: CustomEvent<Event>) => void;
  /** Triggers if the value is changed */
  onchange?: (e: CustomEvent<never>) => void;
  /** Emitted when the element control receives input. */
  oninput?: (e: CustomEvent<never>) => void;
  /** Trigger on focus out */
  onblur?: (e: CustomEvent<never>) => void;
};

type SelectComponentProps = {
  /** Add a clear button if the value is set */
  clearable?: SelectComponent["clearable"];
  /** Select placeholder text */
  placeholder?: SelectComponent["placeholder"];
  /** If set to `true`, the field will be invalid if empty */
  required?: SelectComponent["required"];
  /** Size of the control. */
  size?: SelectComponent["size"];
  /**  */
  multiple?: SelectComponent["multiple"];
  /**  */
  value?: SelectComponent["value"];
  /** The forms label text, use slot for complex labels */
  label?: SelectComponent["label"];
  /** A descriptive text for the select, use the help-text slot for HTML. */
  "help-text"?: SelectComponent["helpText"];
  /** If set to `true`, user can't interact with the component. */
  disabled?: SelectComponent["disabled"];
  /** Form field name, used in form data */
  name?: SelectComponent["name"];
  /**  */
  touched?: SelectComponent["touched"];
  /**  */
  options?: SelectComponent["options"];
  /**  */
  validators?: SelectComponent["validators"];
  /** Associated form if available. This is the nearest form on the same (Shadow) DOM */
  form?: SelectComponent["form"];
  /**  */
  validationMessage?: SelectComponent["validationMessage"];
  /** Return the current validity state */
  validity?: SelectComponent["validity"];
  /**  */
  willValidate?: SelectComponent["willValidate"];
  /** Emitted when the element control receives input. */
  oninput?: (e: CustomEvent<Event>) => void;
  /** Triggers if the value is changed */
  onchange?: (e: CustomEvent<Event>) => void;
  /** Trigger on focus out */
  onblur?: (e: CustomEvent<never>) => void;
};

type TextareaComponentProps = {
  /**  Indicating that an element should be focused on page load */
  autofocus?: TextareaComponent["autofocus"];
  /** If set to `true`, the textarea is readonly. */
  readonly?: TextareaComponent["readonly"];
  /** If set to `true`, the textarea is mandatory. */
  required?: TextareaComponent["required"];
  /** Resize mode */
  resize?: TextareaComponent["resize"];
  /** Textarea placeholder text */
  placeholder?: TextareaComponent["placeholder"];
  /** Size of the textarea. */
  size?: TextareaComponent["size"];
  /**  */
  value?: TextareaComponent["value"];
  /** Automatically capitalize text textarea */
  autocapitalize?: TextareaComponent["autocapitalize"];
  /** Defines what action label (or icon) to present for the enter key on virtual keyboards */
  enterkeyhint?: TextareaComponent["enterKeyHint"];
  /** Input mode for virtual keyboards */
  inputmode?: TextareaComponent["inputMode"];
  /** Enables spell checking on the textarea */
  spellcheck?: TextareaComponent["spellcheck"];
  /** The forms label text, use slot for complex labels */
  label?: TextareaComponent["label"];
  /** A descriptive text for the select, use the help-text slot for HTML. */
  "help-text"?: TextareaComponent["helpText"];
  /** If set to `true`, user can't interact with the component. */
  disabled?: TextareaComponent["disabled"];
  /** Form field name, used in form data */
  name?: TextareaComponent["name"];
  /**  */
  touched?: TextareaComponent["touched"];
  /**  */
  validators?: TextareaComponent["validators"];
  /** Associated form if available. This is the nearest form on the same (Shadow) DOM */
  form?: TextareaComponent["form"];
  /**  */
  validationMessage?: TextareaComponent["validationMessage"];
  /** Return the current validity state */
  validity?: TextareaComponent["validity"];
  /**  */
  willValidate?: TextareaComponent["willValidate"];
  /** Triggers if the value is changed */
  onchange?: (e: CustomEvent<never>) => void;
  /** Emitted when the element control receives input. */
  oninput?: (e: CustomEvent<never>) => void;
  /** Trigger on focus out */
  onblur?: (e: CustomEvent<never>) => void;
};

type BreadcrumbItemComponentProps = {
  /** Optional URL to direct the user to when the breadcrumb item is activated.
When set, a link will be rendered internally. */
  href?: BreadcrumbItemComponent["href"];
  /** Indicates whether the breadcrumb item is clickable.
When set, a button will be rendered internally. */
  clickable?: BreadcrumbItemComponent["clickable"];
  /** The target attribute for the link, if `href` is set.
This determines where the linked document will open.
Defaults to `_self`, which opens the link in the same frame as it was clicked. */
  target?: BreadcrumbItemComponent["target"];
  /** Indicates whether the breadcrumb item is selected.
This can be used to visually indicate the current page or section. */
  selected?: BreadcrumbItemComponent["selected"];
};

type BreadcrumbComponentProps = {};

type ButtonComponentProps = {
  /** If set to `true`, user can't interact with the component. */
  disabled?: ButtonComponent["disabled"];
  /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
  download?: ButtonComponent["download"];
  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  href?: ButtonComponent["href"];
  /**  */
  name?: ButtonComponent["name"];
  /** Allows to modify the default padding of the button. */
  padding?: ButtonComponent["padding"];
  /** When using `href`, this attribute will map to the underlying link's `rel` attribute. Unlike regular links, the
internal default is `noreferrer noopener` to prevent security exploits. However, if you're using `target` to point to a
specific tab/window, this will prevent that from working correctly. You can remove or change the default value by
setting the attribute to an empty string or a value of your choice, respectively. */
  rel?: ButtonComponent["rel"];
  /** Display the button as selected */
  selected?: ButtonComponent["selected"];
  /** Size of the Button Component. */
  size?: ButtonComponent["size"];
  /** Tells the browser where to open the link. Only used when `href` is present. */
  target?: ButtonComponent["target"];
  /** Button tone (color). */
  tone?: ButtonComponent["tone"];
  /** The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
`<button>` elements behave. When the type is `submit`, the button will submit the surrounding form. */
  type?: ButtonComponent["type"];
  /**  */
  value?: ButtonComponent["value"];
};

type IconButtonComponentProps = {
  /** Disables the button. */
  disabled?: IconButtonComponent["disabled"];
  /** Tells the browser to download the linked file (set as `href`) as this filename. */
  download?: IconButtonComponent["download"];
  /** The name of the icon to draw. Use the 'icon' slot for more flexibility. */
  icon?: IconButtonComponent["icon"];
  /** Use a link element instead of the button to allow for browser navigation. */
  href?: IconButtonComponent["href"];
  /** A description that gets read by assistive devices. For optimal accessibility, you should always include a label
that describes what the icon button does. */
  label?: IconButtonComponent["label"];
  /** Show as selected. */
  selected?: IconButtonComponent["selected"];
  /** Sets the shape of the icon button, this will be applied to the focus ring */
  shape?: IconButtonComponent["shape"];
  /** If set it applies a font-size to the icon, otherwise it will inherit the font-size. */
  size?: IconButtonComponent["size"];
  /** Target for the `href` if defined. */
  target?: IconButtonComponent["target"];
};

type ButtonGroupComponentProps = {
  /** A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive
devices when interacting with the control and is strongly recommended. */
  label?: ButtonGroupComponent["label"];
};

type LinkComponentProps = {
  /** How the link is used, e.g. if it's an external link.
Determines the visual style of the link. */
  usage?: LinkComponent["usage"];
  /** The URL the link is referring to */
  href?: LinkComponent["href"];
  /** Tells the browser where to open the link. */
  target?: LinkComponent["target"];
};

type TooltipComponentProps = {
  /**  */
  content?: TooltipComponent["content"];
  /**  */
  hoist?: TooltipComponent["hoist"];
};

type VisuallyHiddenComponentProps = {};

type IndicatorComponentProps = {
  /**  */
  position?: IndicatorComponent["position"];
  /**  */
  tone?: IndicatorComponent["tone"];
};

type ProgressComponentProps = {
  /** shape the component will display. */
  shape?: ProgressComponent["shape"];
  /** The current progress, the value should be between [0, 1] */
  value?: ProgressComponent["value"];
  /** When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state. */
  indeterminate?: ProgressComponent["indeterminate"];
  /** A custom label for assistive devices. */
  label?: ProgressComponent["label"];
  /** Size of the Progress Indicator in Circular Shape. If not set it will depend on the font-size. */
  size?: ProgressComponent["size"];
};

type SkeletonComponentProps = {
  /** The effect the skeleton will have. */
  effect?: SkeletonComponent["effect"];
  /** The width of the skeleton component, it takes by default 100% of its container.
the value will display as a percentage, 0 to 100 */
  width?: SkeletonComponent["width"];
};

type NotificationComponentProps = {
  /** Enables a close button that allows the user to dismiss the notification. */
  closable?: NotificationComponent["closable"];
  /** The notification's tone (color). */
  tone?: NotificationComponent["tone"];
  /** The length of time, in milliseconds, the notification will show before closing itself.
If the user interacts with the notification before it closes (e.g. moves the mouse over it), the timer will restart.
Defaults to `Infinity`, meaning the notification will not close on its own. */
  duration?: NotificationComponent["duration"];
  /** Indicates whether or not the notification is open. You can toggle this attribute to show and hide the notification. */
  open?: NotificationComponent["open"];

  /** Emitted when the alert opens or closes. Note: it provides only rtl direction when the duration is set, ltr will be added later ;) */
  onchange?: (e: CustomEvent<never>) => void;
};

type TableComponentProps = {
  /**  */
  "scroll-mode"?: TableComponent["scrollMode"];
  /**  */
  "row-height"?: TableComponent["rowHeight"];
  /**  */
  selectable?: TableComponent["selectable"];
  /**  */
  columns?: TableComponent["columns"];
  /**  */
  displayedColumns?: TableComponent["displayedColumns"];
  /**  */
  row?: TableComponent["row"];
  /**  */
  selection?: TableComponent["selection"];
  /**  */
  trackBy?: TableComponent["trackBy"];
  /**  */
  provider?: TableComponent["provider"];
  /**  */
  sortBy?: TableComponent["sortBy"];
  /**  */
  rowOffset?: TableComponent["rowOffset"];
  /**  */
  rows?: TableComponent["rows"];
  /**  */
  "ontable-row-click"?: (e: CustomEvent<TableRowEvent>) => void;
  /**  */
  "ontable-selection-change"?: (e: CustomEvent<TableSelectionChangeEvent>) => void;
};

type TableColumnComponentProps = {
  /**  */
  alignment?: TableColumnComponent["alignment"];
  /**  */
  sortable?: TableColumnComponent["sortable"];
  /**  */
  sorted?: TableColumnComponent["sorted"];
  /**  */
  width?: TableColumnComponent["width"];
};

type TableCellComponentProps = {
  /**  */
  alignment?: TableCellComponent["alignment"];
  /**  */
  width?: TableCellComponent["width"];
};

type TableRowComponentProps = {
  /** The label is used in the selection checkbox (accessibility). It will be prefixed
with the select/deselect intl text. */
  label?: TableRowComponent["label"];
  /** A clickable row can receive the focus and trigger 'table-row-click' events */
  clickable?: TableRowComponent["clickable"];
  /** The item represented by the row. */
  item?: TableRowComponent["item"];
  /**  */
  selected?: TableRowComponent["selected"];
  /**  */
  "ontable-row-click"?: (e: CustomEvent<TableRowEvent>) => void;
};

export type CustomElements = {
  /**
   * A checkbox allows the user to toggle an option on or off.
   *
   * Unlike the standard HTML checkbox it will change the value property depending on the checked status. So
   * it can be treated like other form fields.
   * ---
   *
   *
   * ### **Events:**
   *  - **change** - Emitted when the checked state changes.
   * - **blur** - Emitted when the checkbox loses focus.
   * - **input** - Emitted when the checkbox receives input.
   *
   * ### **Slots:**
   *  - _default_ - The checkbox's label.
   * - **help-text** - Text that describes how to use the checkbox. Alternatively, you can use the `help-text` attribute.
   *
   * ### **CSS Parts:**
   *  - **form-control-help-text** - The help text's wrapper.
   */
  "elvt-checkbox": DefineComponent<CheckboxComponentProps>;

  /**
   * Switches allow the user to toggle an option on or off.
   * ---
   *
   *
   * ### **Events:**
   *  - **SwitchChangeEvent** - Emitted when the checked state changes.
   * - **input** - Emitted when the switch receives input.
   * - **change** - Triggers if the value is changed
   * - **blur** - Trigger on focus out
   *
   * ### **Slots:**
   *  - _default_ - The switch's label.
   * - **help-text** - Text that describes how to use the switch. Alternatively, you can use the `help-text` attribute.
   *
   * ### **CSS Parts:**
   *  - **form-control-help-text** - The help text's wrapper.
   */
  "elvt-switch": DefineComponent<SwitchComponentProps>;

  /**
   * Provides an expandable details view.
   * ---
   *
   *
   * ### **Events:**
   *  - **ExpansionPanelChangeEvent** - Emitted when the panel opens or closes.
   *
   * ### **Slots:**
   *  - _default_ - The details' main content.
   * - **expand-icon** - expand icon to use instead of the default (optional).
   * - **collapse-icon** - expand icon to use instead of the default (optional).
   */
  "elvt-expansion-panel": DefineComponent<ExpansionPanelComponentProps>;

  /**
   * Paging Control Bar
   * ---
   *
   *
   * ### **Events:**
   *  - **page-change**
   */
  "elvt-paginator": DefineComponent<PaginatorComponentProps>;

  /**
   * Triggers a resize event if its size changes.
   *
   * If the delay is greater than 0, the event will trigger after the defined time.
   * Any observed resize will restart that timer. The event will only trigger for
   * the last observed resize.
   * ---
   *
   *
   * ### **Events:**
   *  - **resize**
   */
  "elvt-resize-observer": DefineComponent<ResizeObserverComponentProps>;

  /**
   * Trigger an event for DOM changes.
   * ---
   *
   *
   * ### **Events:**
   *  - **mutation**
   */
  "elvt-mutation-observer": DefineComponent<MutationObserverComponentProps>;

  /**
   * Display an avatar icon
   * ---
   *
   *
   * ### **Slots:**
   *  - **icon** - Set custom guest icon
   *
   * ### **CSS Properties:**
   *  - **--avatar-size** - The avatar icon size (default: `1em`) _(default: undefined)_
   * - **--avatar-color-on-dark** - Initials color on a dark fill color (default: `#fff`) _(default: undefined)_
   * - **--avatar-color-on-light** - Initials color on a light fill color (default: `#000`) _(default: undefined)_
   */
  "elvt-avatar": DefineComponent<AvatarComponentProps>;

  /**
   * Display an icon
   *
   * Icons are expected to be defined as an SVG path on a raster of 24 by 24.
   * ---
   *
   *
   * ### **CSS Properties:**
   *  - **--icon-size** - The icon size (default: `1em`) _(default: undefined)_
   * - **--icon-scale** - Scale icon motive (with transform filter) _(default: undefined)_
   * - **--icon-alignment** - Vertical alignment _(default: undefined)_
   * - **--icon-color** - The icon color _(default: undefined)_
   * - **--icon-color-on-dark** - Icon color on a dark fill color (default: `#fff`) _(default: undefined)_
   * - **--icon-color-on-light** - Icon color on a light fill color (default: `#000`) _(default: undefined)_
   * - **--emblem-padding** - Cutout padding for the emblem (default: `1px`) _(default: undefined)_
   *
   * ### **CSS Parts:**
   *  - **icon** - The icon container element
   * - **emblem** - The emblem container element
   * - **icon-svg** - The icon `<svg/>` element (not in mask mode)
   * - **emblem-svg** - The emblem `<svg/>` element (not in mask mode)
   * - **icon-mask** - The icon span with the mask image (only in mask mode)
   * - **emblem-mask** - The emblem span with the mask image (only in mask mode)
   */
  "elvt-icon": DefineComponent<IconComponentProps>;

  /**
   * A chip component is used as labels to organize things or to indicate a selection.
   * ---
   *
   *
   * ### **Events:**
   *  - **request-remove** - Emitted when the removable prop is enabled and chip icon remove area is clicked.
   * - **request-edit** - Emitted when the editable prop is enabled and chip content area is clicked.
   *
   * ### **Slots:**
   *  - _default_ - The chip's content.
   * - **remove-icon** - The chip's icon.
   */
  "elvt-chip": DefineComponent<ChipComponentProps>;

  /**
   * A badge component that is used to draw attention and display statuses or counts.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The badge's content.
   */
  "elvt-badge": DefineComponent<BadgeComponentProps>;

  /**
   * A dropdown uses a trigger component to show an container with additional content
   * ---
   *
   *
   * ### **Methods:**
   *  - **show()** - Show the menu
   * - **hide()** - Hide the menu
   * - **reposition()** - Reposition the open menu
   *
   * ### **Slots:**
   *  - _default_ - The dropdown menu content.
   * - **trigger** - The dropdown menu trigger.
   */
  "elvt-dropdown": DefineComponent<DropdownComponentProps>;

  /**
   * Menus provide a list of options for the user to choose from.
   *
   * ! Nesting menus is not possible yet.
   * ---
   *
   *
   * ### **Events:**
   *  - **elvt-item-select**
   *
   * ### **Slots:**
   *  - _default_ - The menu content (items, labels, dividers, ...).
   */
  "elvt-menu": DefineComponent<MenuComponentProps>;

  /**
   * Menu-Items provide a list of options for the user to choose from.
   *
   * ! Nesting menus is not possible yet.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The menu item's label
   * - **prefix** - Prepend an icon or similar element to the menu item.
   * - **suffix** - Append an icon or similar element to the menu item.
   * - **submenu** - A nested menu
   */
  "elvt-menu-item": DefineComponent<MenuItemComponentProps>;

  /**
   * Application acts as a main container providing services to its children and maintaining state.
   *
   * - It has slot for basic positions.
   * - The `header` and `footer` slots will align their children horizontally, all others vertically.
   * - The `side-start` and `side-end` will be positioned depending on the reading direction
   * - Padding and gap have to be defined inside the slots.
   * - Nested `elvt-application` instances will inherit theme and services from their ancestor.
   * ---
   *
   *
   * ### **Methods:**
   *  - **getAsAncestor(descendant: _Element_)** - Fetches the nearest ApplicationComponent instance on the ancestor axis of its descendant.
   *
   * ### **Slots:**
   *  - _default_ - content area
   * - **header** - At the top of the component
   * - **footer** - At the bottom of the component
   * - **side-start** - At the start side of the component (in reading direction)
   * - **side-end** - At the end side of the component (in reading direction)
   */
  "elvt-application": DefineComponent<ApplicationComponentProps>;

  /**
   * A card is a visual container for related subjects. The content of a
   * card will stretch if the height is set.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Content
   * - **header** - Card header content
   * - **footer** - Card footer content
   */
  "elvt-card": DefineComponent<CardComponentProps>;

  /**
   * The divider acts as a separator in a stack of items. By default
   * it will separate the items of a column with a horizontal line.
   * ---
   *
   */
  "elvt-divider": DefineComponent<DividerComponentProps>;

  /**
   * A container for a stack of child elements.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Stack items
   *
   * ### **CSS Properties:**
   *  - **--overlap-indent** - Modify indent for overlap mode, default '40%' _(default: undefined)_
   */
  "elvt-stack": DefineComponent<StackComponentProps>;

  /**
   * A toolbar defines a row of actions and context information.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Content, positioned after the start slot content
   * - **start** - At the start of the toolbar
   * - **end** - At the end of the toolbar
   */
  "elvt-toolbar": DefineComponent<ToolbarComponentProps>;

  /**
   * The lightbox fill the whole window with a backdrop and displays
   * a content above it.
   *
   * The slots are transparent by default for maximum flexibility. Card work well as
   * a visible container inside.
   * ---
   *
   *
   * ### **Events:**
   *  - **backdrop-click**
   * - **escape-keypress**
   */
  "elvt-lightbox": DefineComponent<LightboxComponentProps>;

  /**
   * Provides a grouping to behave as an accordion for the expansion panels.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The expansion panels elements.
   */
  "elvt-expansion-panel-group": DefineComponent<ExpansionPanelGroupComponentProps>;

  /**
   * A tab component that can be used inside tab groups to display
   * the selection status of a tab and toggle it.
   *
   * The component will only render correctly if used in conjunction with `elvt-tab-group`.
   * ---
   *
   *
   * ### **Events:**
   *  - **request-close** - Emitted when the tab is `closable` and the close button is clicked (or when closing the tab is requested programmatically).
   * - **selection-change** - Emitted when the tab is selected. The event detail contains the `panel` attribute of the tab.
   *
   * ### **Slots:**
   *  - _default_ - The tab's label.
   * - **close-icon** - The tab's close icon.
   * - **prefix** - A slot for a prefix icon or element, displayed before the tab label.
   * - **suffix** - A slot for a suffix icon or element, displayed after the tab label.
   */
  "elvt-tab": DefineComponent<TabComponentProps>;

  /**
   * A tab panel component that wraps the content of a single tab
   * inside a tab group.
   *
   * The component will only render correctly if used in conjunction with `elvt-tab-group`.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The tab's content.
   */
  "elvt-tab-panel": DefineComponent<TabPanelComponentProps>;

  /**
   * A control that renders a number of tabs (`elvt-tab`) and the content of the active tab (`elvt-tab-panel`).
   * ---
   *
   *
   * ### **Events:**
   *  - **change** - Emitted when the active tab changes.
   *
   * ### **Slots:**
   *  - _default_ - The tab-panels for the tabs.
   * - **nav** - The tabs for the tab group.
   */
  "elvt-tab-group": DefineComponent<TabGroupComponentProps>;

  /**
   * Outer frame of a form field, with the label and help text.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Form control
   * - **label** - Field label. Alternatively, you can use the `help-text` attribute.
   * - **help-text** - Text that describes how to use the form field. Alternatively, you can use the `help-text` attribute.
   * - **status** - Show a status (like character count and limit)
   */
  "elvt-field": DefineComponent<FieldComponentProps>;

  /**
   * An input field
   * ---
   *
   *
   * ### **Events:**
   *  - **change** - Triggers if the value is changed
   * - **input** - Emitted when the element control receives input.
   * - **blur** - Trigger on focus out
   *
   * ### **Slots:**
   *  - **prefix** - Prefix icon or similar element
   * - **suffix** - Suffix icon or similar element
   * - **label** - The input’s label. Alternatively, you can use the label attribute.
   * - **help-text** - Text that describes how to use the input. Alternatively, you can use the help-text attribute.
   */
  "elvt-input": DefineComponent<InputComponentProps>;

  /**
   * A radio component that allows the user to select a single option from a group.
   *
   * Be aware that the radio is not a form field by itself. It needs a radio group.
   * ---
   *
   *
   * ### **Events:**
   *  - **change** - Triggers if the value is changed
   * - **input** - Emitted when the element control receives input.
   * - **blur** - Trigger on focus out
   *
   * ### **Slots:**
   *  - _default_ - The radio's label.
   */
  "elvt-radio": DefineComponent<RadioComponentProps>;

  /**
   * A radio component that allows the user to select a single option from a group.
   * ---
   *
   *
   * ### **Events:**
   *  - **type**
   * - **change** - Triggers if the value is changed
   * - **input** - Emitted when the element control receives input.
   * - **blur** - Trigger on focus out
   *
   * ### **Slots:**
   *  - _default_ - The radio elements
   * - **label** - The input’s label. Alternatively, you can use the label attribute.
   * - **help-text** - Text that describes how to use the input. Alternatively, you can use the help-text attribute.
   */
  "elvt-radio-group": DefineComponent<RadioGroupComponentProps>;

  /**
   * A select field
   * ---
   *
   *
   * ### **Events:**
   *  - **input** - Emitted when the element control receives input.
   * - **change** - Triggers if the value is changed
   * - **blur** - Trigger on focus out
   *
   * ### **Slots:**
   *  - **prefix** - Prefix icon or similar element
   * - **suffix** - Suffix icon or similar element
   * - **label** - The input’s label. Alternatively, you can use the label attribute.
   * - **help-text** - Text that describes how to use the input. Alternatively, you can use the help-text attribute.
   */
  "elvt-select": DefineComponent<SelectComponentProps>;

  /**
   * A textarea field
   * ---
   *
   *
   * ### **Events:**
   *  - **change** - Triggers if the value is changed
   * - **input** - Emitted when the element control receives input.
   * - **blur** - Trigger on focus out
   *
   * ### **Slots:**
   *  - **label** - The input’s label. Alternatively, you can use the label attribute.
   * - **help-text** - Text that describes how to use the input. Alternatively, you can use the help-text attribute.
   */
  "elvt-textarea": DefineComponent<TextareaComponentProps>;

  /**
   * Breadcrumb Items are used inside [breadcrumbs] to represent a route path.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The breadcrumb item's label.
   */
  "elvt-breadcrumb-item": DefineComponent<BreadcrumbItemComponentProps>;

  /**
   * Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The breadcrumb items to display.
   * - **separator** - To be used between breadcrumb items.
   */
  "elvt-breadcrumb": DefineComponent<BreadcrumbComponentProps>;

  /**
   * Buttons represent actions that are available to the user.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The button's label.
   * - **prefix** - A presentational prefix icon or similar element.
   * - **suffix** - A presentational suffix icon or similar element.
   */
  "elvt-button": DefineComponent<ButtonComponentProps>;

  /**
   * A clickable icon
   * ---
   *
   *
   * ### **Methods:**
   *  - **blur()** - Removes focus from the icon button.
   * - **click()** - Simulates a click on the icon button.
   * - **focus(options: _FocusOptions_)** - Sets focus on the icon button.
   *
   * ### **Slots:**
   *  - **icon** - Provide icon elements, use `icon` property for a basic icon
   */
  "elvt-icon-button": DefineComponent<IconButtonComponentProps>;

  /**
   * Button groups can be used to group related buttons into sections.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - One or more buttons to display in the button group.
   */
  "elvt-button-group": DefineComponent<ButtonGroupComponentProps>;

  /**
   * A link that redirects to a URL if clicked
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - The link label
   */
  "elvt-link": DefineComponent<LinkComponentProps>;

  /**
   *
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Inner elements
   * - **content** - Tooltip HTML content, use content property for basic text tooltips
   */
  "elvt-tooltip": DefineComponent<TooltipComponentProps>;

  /**
   * Makes content accessible to assistive devices without displaying it on the screen. If an element inside has
   * the focus the component will be visible.
   * ---
   *
   */
  "elvt-visually-hidden": DefineComponent<VisuallyHiddenComponentProps>;

  /**
   * Attach an indicator to the enclosed component
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Component to attach the indicator to.
   *
   * ### **CSS Properties:**
   *  - **--indicator-offset-column** - horizontal indicator offset (default: `8px`) _(default: undefined)_
   * - **--indicator-offset-row** - vertical indicator offset (default: `12px`) _(default: undefined)_
   */
  "elvt-indicator": DefineComponent<IndicatorComponentProps>;

  /**
   * Show the progress of an ongoing operation.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - A label to show inside the progress indicator.
   */
  "elvt-progress": DefineComponent<ProgressComponentProps>;

  /**
   * Skeletons are used to provide a visual representation of where content will eventually load.
   * ---
   *
   *
   * ### **CSS Properties:**
   *  - **--skeleton-min-width** - The skeleton's min width value. _(default: undefined)_
   */
  "elvt-skeleton": DefineComponent<SkeletonComponentProps>;

  /**
   * Used to display important messages inline or as toast notifications.
   * ---
   *
   *
   * ### **Events:**
   *  - **change** - Emitted when the alert opens or closes. Note: it provides only rtl direction when the duration is set, ltr will be added later ;)
   *
   * ### **Methods:**
   *  - **hide()** - Hides the notification.
   * - **show()** - Shows the notification.
   *
   * ### **Slots:**
   *  - _default_ - The alert's main content.
   * - **icon** - An icon to show in the alert.
   */
  "elvt-notification": DefineComponent<NotificationComponentProps>;

  /**
   * Table
   *
   * Table can be defined in two ways. You can create a table using the `elvt-table-*` elements or
   * using a data provider and a columns definition. If you add child elements, the columns definition and
   * data provider will be ignored.
   *
   * ```html
   * <elvt-table>
   *     <elvt-table-column slot="head">Column Label</elvt-table-column>
   *     <elvt-table-row>
   *         <elvt-table-cell>Content</elvt-table-cell>
   *     <elvt-table-row>
   * </elvt-table>
   * ```
   *
   * Dynamic tables need a column definition and a data provider. These need to be set as properties. Only
   * tables defined this way can use virtual scroll.
   *
   * ```ts
   * const columns = [
   *     {
   *         id: 'name',
   *         label: 'Name',
   *         data: (item: TableItem) => html`${item.first_name} ${item.last_name}`,
   *     },
   *     {
   *         id: 'email',
   *         label: 'Email',
   *         data: (item: TableItem) => item.email,
   *     },
   *     {
   *         id: 'company',
   *         label: 'Company',
   *         data: (item: TableItem) => item.email,
   *     },
   * ];
   * const provider = new ArrayDataProvider(records);
   * ```
   *
   * ### ArrayTableDataProvider
   *
   * A basic table data provider that takes and array with all records and optionally a compare function (for sorting).
   *
   * ```ts
   *     const provider = new ArrayTableDataProvider(accounts.slice(0, 5), { compare: columnCompare });
   * ```
   *
   * ### PagedTableDataProvider
   *
   * Allow to use an asynchronous function to fetch slices of data from an API.
   *
   * ```ts
   * const provider = new PagedTableDataProvider(
   *     // page size
   *     10,
   *     // asynchronous fetcher
   *     async (pageIndex: number, pageSize: number, sortBy?: TableItemSort) => {
   *         const offset = pageIndex * pageSize;
   *         let url = `http://example.com/api/endpoint?offset=${offset}&limit=${limit}`;
   *         if (sortBy) {
   *           url += `&sortBy=${sortBy.column}|${sortBy.direction}`
   *         }
   *         const response = await fetch(url);
   *         return {
   *             items: response.arrayOfItems,
   *             length: response.absoluteCountOfItems,
   *         };
   *     }
   * );
   * ```
   *
   * ### Custom Table Data Providers
   *
   * If implementing an own data provider it must extend the abstract TableDataProvider class.
   *
   * ```ts
   * import { BehaviourSubject, Subject } from '@inform-elevate/elevate-cdk';
   * import { TableData, TableProviderStatus } from './table-data-provider';
   * export abstract class TableDataProvider {
   *     public readonly status = new BehaviourSubject<TableProviderStatus>(TableProviderStatus.Created);
   *
   *     public readonly changes = new Subject<void>();
   *
   *     public abstract slice(start?: number, end?: number, sortBy?: string): Promise<TableData>;
   * }
   * ```
   * ---
   *
   *
   * ### **Events:**
   *  - **table-row-click**
   * - **table-selection-change**
   *
   * ### **Slots:**
   *  - _default_ - Table Rows
   * - **head** - Table Columns
   */
  "elvt-table": DefineComponent<TableComponentProps>;

  /**
   * A table column - used inside `elvt-table`
   * ---
   *
   */
  "elvt-table-column": DefineComponent<TableColumnComponentProps>;

  /**
   * A table cell - used inside `elvt-table`
   * ---
   *
   */
  "elvt-table-cell": DefineComponent<TableCellComponentProps>;

  /**
   * A table row - used inside `elvt-table`
   * ---
   *
   *
   * ### **Events:**
   *  - **table-row-click**
   *
   * ### **Slots:**
   *  - **label** - Checkbox Label (for accessibility)
   */
  "elvt-table-row": DefineComponent<TableRowComponentProps>;
};

declare module "vue" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface GlobalComponents extends CustomElements {}
}

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements extends CustomElements {}
  }
}
