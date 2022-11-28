class Song < ApplicationRecord
    validate :name, :album_name

    belongs_to :artist
    has_many :skills
    has_many :techniques, through: :skills
  end