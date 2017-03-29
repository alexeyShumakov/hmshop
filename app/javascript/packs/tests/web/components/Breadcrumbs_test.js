import React from 'react';
import Immutable from 'immutable';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Breadcrumbs from '../../../web/components/Breadcrumbs';
import Ancestor from '../../../web/components/BreadcrumbsAncestor';
import sinon from 'sinon';

const node = Immutable.fromJS({
  id: 1,
  title: 'foo',
  ancestors: [
    { id: 2, title: 'bar' },
    { id: 3, title: 'baz' }
  ]
});

describe('<Breadcrumbs/>', () => {
  let fetchCategory, wrapper;

  beforeEach(() => {
    fetchCategory = sinon.spy();
    wrapper = shallow(<Breadcrumbs {...{node, fetchCategory}}/>);
  });

  it('render component', () => {
    expect(wrapper.hasClass('breadcrumbs')).to.be.ok;
  });

  it('has 1 Ancestor component', () => {
    expect(wrapper.find(Ancestor).length).to.equal(2);
  })
});
