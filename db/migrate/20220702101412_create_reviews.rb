class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :image
      t.datetime :date
      t.string :destination
      t.string :class
      t.text :description
      t.integer :likes
      t.integer :dislikes
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :airline, null: false, foreign_key: true

      t.timestamps
    end
  end
end
