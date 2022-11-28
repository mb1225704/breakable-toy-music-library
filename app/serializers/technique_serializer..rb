class TechniqueSerializer < ActiveModel::Serializer
    attributes :technique_name
    belongs_to :song
  end