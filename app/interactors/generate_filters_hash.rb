class GenerateFiltersHash
  include Interactor
  SORT = [ 'pricedown', 'priceup', 'popular' ]
  def call
    sort_param = SORT.include?(context.params[:sort]) ? context.params[:sort] : 'priceup'
    context.filters_hash = {
      filters: {
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
