import React from 'react';
import Immutable from 'immutable';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import BasketButton from '../../../web/components/BasketButton';
import sinon from 'sinon';

describe('<BasketButton/>', () => {
  let wrapper, productId, klassName, clickCallback, create, tmp;

  beforeEach(() => {
    tmp = sinon.spy()
    create = () => {return Promise.resolve()};
    productId = 1;
    klassName = 'foo-class';
    clickCallback = sinon.spy();
    wrapper = shallow(<BasketButton {...{productId, klassName, clickCallback, create}}/>);
  });

  it('has button', () => {
    expect(wrapper.find(`.${klassName}`).length).to.eq(1);
  });

  it('exec create callaback on button click', ()=> {
    wrapper.find(`.${klassName}`).first().simulate('click');
    return create().then(()=>{
      expect(wrapper.find('.button-outline').length).to.equal(1);
      expect(wrapper.state('isAdded')).to.be.ok;
    })
  });

  it('exec clickCallaback on Link click', ()=> {
    wrapper.find(`.${klassName}`).first().simulate('click');
    return create().then(()=>{
      wrapper.find('.button-outline').simulate('click');
      expect(clickCallback).to.have.property('callCount', 1);
    })
  });

});
