/**
 * Button Component
 * @author ryan.bian
 */
import React,{ PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import { allowMultiple } from '../../constants';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
  }

  render() {
    
    const { children, type, size, disabled, ...otherProps } = this.props;
    const btnProps = {
      ...otherProps,
      className: classnames(
        styles[`button--${disabled ? 'disabled' : type}`],
        styles[`button--${size}`],
      ),
      
    };
    const aa = classnames(
        [`button--${disabled ? 'disabled' : type}`],
        [`button--${size}`],
      );
   
    return (
      <button {...otherProps} styleName={aa}>{children}</button>
    );
  }
}

export default Button;
