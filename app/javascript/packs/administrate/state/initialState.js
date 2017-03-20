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
    search: {
      keyword: '',
      products: []
    },
    product: {
      title: '',
      price: 0,
      description: '',
      pictures: []
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
  collections: {
    isLoading: false,
    fromServer: false,
    errors: {},
    collections: [],
    collection: {
      title: '',
      description: '',
      products: []
    }
  },
  categories: {
    isLoading: false,
    fromServer: false,
    errors: {},
    categories: [],
    category: {
      title: '',
      parent: null

    }
  }
});

