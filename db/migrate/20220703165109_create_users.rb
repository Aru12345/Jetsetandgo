class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :admin
      t.password_digest :string
      t.timestamps
    end
  end
end
