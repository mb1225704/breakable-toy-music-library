class Song < ApplicationRecord
    validate :name, :album_name, :artist
    # has_many :techniques
    belongs_to :artist
  end