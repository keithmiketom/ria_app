class CreateCats < ActiveRecord::Migration
  def change
    create_table :cats do |t|
      t.integer :age
      t.string :color
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
