console.log(1111111111);
import React from 'react';
console.log(2222222);
import {shallow, mount, render} from 'enzyme';
import {expect,should} from 'chai';
import Button from '../Button';
import styles from '../Button.css';

describe('btn---------test',()=>{
  it('button============',()=>{
    const data = { type: 'primary', size: 'normal', disabled: true };
    let btn = shallow(<Button {...data}>aaa</Button>);
    
    expect(btn.hasClass(styles['button--normal'])).to.equal(true);
   
  });
 
});