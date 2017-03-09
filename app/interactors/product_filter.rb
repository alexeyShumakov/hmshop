class ProductFilter
  include Interactor
  # haha lol
  SORT = {
    'pricedown' => 'price DESC',
    'priceup'  => 'price ASC',
    'popular' => 'RANDOM()'
  }
  def call
    sort_param = SORT.fetch(context.params[:sort], 'price ASC')
    context.products = context.products.order(sort_param)
  end
end
