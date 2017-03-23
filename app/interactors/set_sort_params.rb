class SetSortParams
  include Interactor
  # haha lol
  SORT = {
    'pricedown' => 'price DESC',
    'priceup'  => 'price ASC',
    'popular' => 'RANDOM()'
  }
  def call
    context.order_rule = SORT.fetch(context.params[:sort], 'price ASC')
    sort_param = SORT.has_key?(context.params[:sort]) ? context.params[:sort] : 'priceup'
    page = context.params[:page] || 1

    context.filters_hash = {
      filters: {
        pageFilter: {
          page: page
        },
        sortFilter: {
          currentValue: sort_param,
          items: [
            { title: 'популярные', value: 'popular' },
            { title: 'сначала дорогие', value: 'pricedown' },
            { title: 'сначала дешевые', value: 'priceup' },
          ]
        }
      }
    }
  end
end
