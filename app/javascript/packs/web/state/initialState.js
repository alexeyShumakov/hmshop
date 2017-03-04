import Immutable from 'immutable';
export default Immutable.fromJS({
  cart: {
    total_count: 0,
    line_items: {
      product: {}
    }
  },
  category: {
    category: {
      id: 1,
      title: ''
    },
    root_category_id: 0
  },
  products: [],
  fullProduct: {},
  modalProduct: {
    isOpen: false,
    isLoading: false,
    currentPicture: '/img.png',
    product: {
      pictures: []
    }
  }
});

