import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Button from '../src/components/button/Button';

describe('btn', function () {
  it('btn test---------------', function () {
  	const data = { type: 'primary', size: 'normal', disabled: true };
    let btn = shallow(<Button {...data}/>);
    console.log(btn);
    // expect(btn.find('.button--normal').length).to.equal(1);
    expect(btn.hasClass('button--normal')).to.equal(true);
    // expect(btn.node.props.className.inclue('button--normal')).to.equal(true);
  });
});