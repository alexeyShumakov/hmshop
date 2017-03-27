import banners from './banners';
import products from './products';
import notifications from './notifications';
import modal from './modal'
import categories from './categories';
import pictures from './pictures';
import collections from './collections';
import searchProducts from './searchProduct';
import orders from './orders';
import posts from './posts';
import shop from './shop';
export default Object.assign({}, shop, posts, orders, searchProducts, collections,
  pictures, categories, modal, products, banners, notifications)
