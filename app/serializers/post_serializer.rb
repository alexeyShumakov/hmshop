class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :preview, :body, :thumb_cover, :medium_cover
end
