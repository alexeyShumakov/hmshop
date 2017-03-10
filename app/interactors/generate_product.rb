class GenerateProduct
  include Interactor::Organizer

  organize FindProduct, FindCategory, AddToHistory, GetHistory
end
