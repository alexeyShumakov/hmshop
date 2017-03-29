import React from 'react';
import Immutable from 'immutable';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Ancestor from '../../../web/components/BreadcrumbsAncestor';
import sinon from 'sinon';

describe('<Breadcrumbs/>', () => {
  let fetchCategory, wrapper;

  beforeEach(() => {
    fetchCategory = sinon.spy();
    wrapper = shallow(<Ancestor id={1} title='title' fetch={fetchCategory}/>);
  });

  it('has 2 breadcrumbs__item classes', () => {
    expect(wrapper.find('.breadcrumbs__item').length).to.equal(2);
  })

  it('fetch category on click to link', () => {
    wrapper.find('.breadcrumbs__item').first().simulate('click');
    expect(fetchCategory).to.have.property('callCount', 1);
  })
});
