class Song < ApplicationRecord
    validate :name, :album_name
    # has_many :techniques
    belongs_to :artist
  end