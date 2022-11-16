class CreateSong < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :name, null: false
      t.string :album_name, null: false
      t.string :youtube_link
      t.string :youtube_timestamp
      t.belongs_to :artist, null: false
      # t.has_many :techniques, null: false
    end
  end
end
