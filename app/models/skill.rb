class Skill < ApplicationRecord
    belongs_to :song
    belongs_to :technique
end