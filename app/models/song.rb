class Song < ApplicationRecord
    validate :name, :album_name

    belongs_to :artist
    has_many :techniques
  end