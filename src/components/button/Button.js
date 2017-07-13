/**
 * Button Component
 * @author ryan.bian
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import styles from './Button.css';

@CSSModules(styles, { allowMultiple })
class Button extends PureComponent {

  static displayName = 'Button'

  static defaultProps = {
    type: 'primary',
    size: 'normal',
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    type: PropTypes.oneOf([
      'primary',
      'secondary',
      'dashed',
      'danger',
    ]),
    size: PropTypes.oneOf([
      'normal',
      'large',
      'small',
    ]),
    children: PropTypes.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, type, size, disabled, ...otherProps } = this.props;
    const btnProps = {
      ...otherProps,
      styleName: `button--${disabled ? 'disabled' : type} button--${size}`,
    };
    return (
      <button {...btnProps}>{children}</button>
    );
  }
}

export default Button;
