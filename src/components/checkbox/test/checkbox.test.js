import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect,should} from 'chai';
import Checkbox from '../Checkbox';
import CheckboxGroup from '../CheckboxGroup';
import styles from '../Checkbox.css';

describe('test-----checkbox-----',()=>{
  
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

