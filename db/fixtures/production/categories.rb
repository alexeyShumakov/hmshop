1.upto(5) do |i|
  Category.seed do |s|
    s.id = i
    s.title = "category title #{i}"
  end
end
