class CreateSkill < ActiveRecord::Migration[5.2]
  def change
    create_table :skills do |t|
      t.belongs_to :technique, null: false
      t.belongs_to :song, null: false

      t.timestamps
    end
  end
end
