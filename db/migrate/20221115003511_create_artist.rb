class CreateArtist < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :artist_name, null: false
      # t.has_many :songs, null: false
    end
  end
end
