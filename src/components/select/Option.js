/**
 * Select Component
 * @author heifade
 */

import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Select.css';

export default class Option extends PureComponent {
  static displayName = 'Option';

  static defaultProps = {
    value: '',
    text: '',
    children: null,
  };
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    value: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element),
  };

  static contextTypes = {
    childContext: PropTypes.any,
  };

  click = () => {
    const { context } = this;
    const { childContext } = context;
    const { value, text } = this.props;
    childContext.onOptionSelected(value, text);
  };

  render() {
    const { children, text, value } = this.props;
    const { context } = this;
    const { childContext } = context;

    const isActived = childContext.getSelectedValue() === value;

    return (
      <li
        className={classnames(styles.option, isActived ? styles.active : '')}
        onClick={this.click}
      >
        {children || text}
      </li>
    );
  }
}