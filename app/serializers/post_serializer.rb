class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :preview, :body, :raw_body, :thumb_cover, :medium_cover
end
