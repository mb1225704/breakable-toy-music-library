class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :album_name, :artist
  belongs_to :artist
end
