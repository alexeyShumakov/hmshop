import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Spinner from '../../../web/components/Spinner';

describe('<Spinner/>', () => {
  it('render component', () => {
    const wrapper = shallow(<Spinner/>);
    expect(wrapper.hasClass('spinner')).to.be.ok;
  });

  it('have icon', () => {
    const wrapper = shallow(<Spinner/>);
    expect(wrapper.find('.fa.fa-spin').length).to.equal(1);
  });
});
