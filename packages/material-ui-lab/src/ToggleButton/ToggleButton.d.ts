import {
  ButtonBaseClassKey,
  ExtendButtonBase,
  ExtendButtonBaseTypeMap,
} from '@material-ui/core/ButtonBase';
import { OverrideProps } from '@material-ui/core/OverridableComponent';

export type ToggleButtonTypeMap<
  P = {},
  D extends React.ElementType = 'button'
> = ExtendButtonBaseTypeMap<{
  props: P & {
    color?: 'default' | 'primary' | 'secondary';
    disableFocusRipple?: boolean;
    selected?: boolean;
    size?: 'small' | 'medium' | 'large';
    value?: any;
  };
  defaultComponent: D;
  classKey: ToggleButtonClassKey;
}>;

/**
 *
 * Demos:
 *
 * - [Toggle Button](https://material-ui.com/components/toggle-button/)
 *
 * API:
 *
 * - [ToggleButton API](https://material-ui.com/api/toggle-button/)
 * - inherits [ButtonBase API](https://material-ui.com/api/button-base/)
 */
declare const ToggleButton: ExtendButtonBase<ToggleButtonTypeMap>;

export type ToggleButtonProps<
  D extends React.ElementType = ToggleButtonTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<ToggleButtonTypeMap<P, D>, D>;

export type ToggleButtonClassKey =
  | 'root'
  | 'disabled'
  | 'selected'
  | 'default'
  | 'primary'
  | 'secondary'
  | 'label'
  | 'sizeSmall'
  | 'sizeLarge';

export default ToggleButton;
