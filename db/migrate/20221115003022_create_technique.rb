class CreateTechnique < ActiveRecord::Migration[5.2]
  def change
    create_table :techniques do |t|
      t.string :technique_name, null: false
      t.belongs_to :song, null: false
      t.timestamps 
    end
  end
end
