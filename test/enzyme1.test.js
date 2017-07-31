import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect,should} from 'chai';
import Button from '../src/components/button/Button';
import Checkbox from '../src/components/checkbox/Checkbox';
import CheckboxGroup from '../src/components/checkbox/CheckboxGroup';
// import styles from '../src/components/checkbox/Checkbox.css';
import styles from '../src/components/button/Button.css';
// console.log(styles,9999);
describe('test1111111',()=>{
  it('button0-----------',()=>{
    const data = { type: 'primary', size: 'normal', disabled: true };
    let btn = shallow(<Button {...data}>aaa</Button>);
    // console.log(btn,888);
    // expect(btn.find('.button--normal').length).to.equal(1);
    expect(btn.hasClass(styles['button--normal'])).to.equal(true);
    // expect(btn.node.props.className.contains('button--normal')).to.equal(true);
    // expect(btn.is('.button--normal')).to.equal(true);
    // expect(btn.text()).to.equal('aaa');
    // expect(btn.hasClass('Button__button--normal___rZQNI')).to.equal(true);
  });
  it('checkbox-------------',()=>{
  	const plainOptions = ['Apple', 'Pear', 'Orange'];
	const defaultCheckedList = ['Apple', 'Orange'];
	const data = {
		'options' : plainOptions
	}
	let checkbox = shallow(<Checkbox  {...data}/>);
	// console.log(checkbox,999);
	// expect(checkbox.find('.checked').length).to.equal(0);
  // expect(checkbox.find( '.${ styles.checkbox--wrapper}' )).to.equal(true);
  expect(checkbox.hasClass('checkbox--wrapper')).to.equal(true);
  // expect(checkbox.prop('className')).to.equal('checkbox--wrapper');
  // expect(checkbox.at(0).type()).to.equal('label');
  });
  it('checkboxGroup-----------',()=>{
    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const defaultCheckedList = ['Apple', 'Orange'];
    const data = {
      'options' : plainOptions
    }
    let checkboxgroup = shallow(<CheckboxGroup  {...data}/>);
    expect(checkboxgroup.children()).to.have.length(plainOptions.length);
  });
});

