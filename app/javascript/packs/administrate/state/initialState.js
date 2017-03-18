import Immutable from 'immutable';
export default Immutable.fromJS({
  pictures: {
    isLoading: false
  },
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
      title: '',
      price: 0,
      description: ''
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

