class CreateAirlines < ActiveRecord::Migration[6.1]
  def change
    create_table :airlines do |t|
      t.string :name
      t.string :image
      t.string :slogan
      t.string :wlink

      t.timestamps
    end
  end
end
