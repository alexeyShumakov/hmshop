import Immutable from 'immutable';
export default Immutable.fromJS({
  modal: {
    isOpen: false
  },
  notifications: {
    isShow: false,
    text: ''
  },
  products: {
    isLoading: false,
    fromServer: false,
    errors: {},
    products: [],
    product: {
      title: ''
    }
  },
  banners: {
    isLoading: false,
    fromServer: false,
    errors: {},
    banners: [],
    banner: {
      link: ''
    }
  },
  categories: {
    isLoading: false,
    fromServer: false,
    errors: {},
    categories: [],
    category: {
      title: ''
    }
  }
});

