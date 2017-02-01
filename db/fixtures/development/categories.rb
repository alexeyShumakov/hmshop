1.upto(5) do |i|
  Category.seed do |s|
    s.id = i
    s.title = Faker::Hipster.word
  end
end
