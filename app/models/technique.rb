class Technique < ApplicationRecord
    validate :technique_name
    belongs_to :song

    has_many :skills
    has_many :songs, through: :skills

  end