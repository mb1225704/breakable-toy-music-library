class Technique < ApplicationRecord
    validate :technique_name
    belongs_to :song

  end