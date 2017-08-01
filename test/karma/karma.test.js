import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect,should} from 'chai';
// import {expect,should} from 'jasmine';
import Button from '../../src/components/button/Button';
import Checkbox from '../../src/components/checkbox/Checkbox';
import CheckboxGroup from '../../src/components/checkbox/CheckboxGroup';
import styles from '../../src/components/button/Button.css';

describe('test1111111',()=>{
  it('button0-----------',()=>{
    const data = { type: 'primary', size: 'normal', disabled: true };
    let btn = shallow(<Button {...data}>aaa</Button>);
    
    expect(btn.hasClass(styles['button--normal'])).to.equal(true);
   
  });
  it('checkbox-------------',()=>{
  	const plainOptions = ['Apple', 'Pear', 'Orange'];
	const defaultCheckedList = ['Apple', 'Orange'];
	const data = {
		'options' : plainOptions
	}
	let checkbox = shallow(<Checkbox  {...data}/>);
	
  expect(checkbox.hasClass('checkbox--wrapper')).to.equal(true);
 
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

