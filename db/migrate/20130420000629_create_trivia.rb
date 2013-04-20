class CreateTrivia < ActiveRecord::Migration
  def change
    create_table :trivia do |t|
      t.string :title
      t.text :fact
      t.string :image_url
      t.integer :difficulty

      t.timestamps
    end
  end
end
