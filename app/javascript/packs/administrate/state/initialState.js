import Immutable from 'immutable';
export default Immutable.fromJS({
  notifications: {
    isShow: false,
    text: ''
  },
  products: {
  },
  banners: {
    isLoading: false,
    fromServer: false,
    errors: {},
    banners: [],
    banner: {
      link: ''
    }
  }
});

