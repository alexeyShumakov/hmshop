class Administrate::OrdersController < Administrate::BaseController
  before_action :set_order, only: [:edit, :show]
  def edit
    @json = {
      orders: {
        fromServer: true,
        order: ActiveModelSerializers::SerializableResource
          .new(@order, {include: 'line_items.product' })
          .as_json[:order]
      }
    }.to_json
  end

  def show
    @json = {
      orders: {
        fromServer: true,
        order: ActiveModelSerializers::SerializableResource
          .new(@order, {include: 'line_items.product' })
          .as_json[:order]
      }
    }.to_json
  end

  def index
    @orders = Order.includes(line_items: :product).all.order('created_at DESC')
    @json = {
      orders: {
        fromServer: true,
        orders: ActiveModelSerializers::SerializableResource
          .new(@orders, {include: [], fields: [:total_price, :id, :name, :phone]})
          .as_json[:orders]
      }
    }.to_json
  end

  private

  def set_order
    @order = Order.includes(line_items: {product: :pictures}).find(params[:id])
  end
end
