id = 1
1.upto(5) do |i|
  1.upto(4) do
    Product.seed do |s|
      s.id = id
      s.category_id = i
      s.title = "product title #{id}"
    end
    id += 1
  end
end
