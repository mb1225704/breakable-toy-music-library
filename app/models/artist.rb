class Artist < ApplicationRecord
    validate :artist_name
    has_many :songs
end