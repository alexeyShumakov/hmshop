import banners from './banners';
import products from './products';
import notifications from './notifications';
import modal from './modal'
import categories from './categories';
import pictures from './pictures';
import collections from './collections';
import searchProducts from './searchProduct';
import orders from './orders'
export default Object.assign({}, orders, searchProducts, collections,
  pictures, categories, modal, products, banners, notifications)
