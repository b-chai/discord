class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :server_name, null:false
      t.string :server_icon
      t.integer :owner_id, null:false

      t.timestamps
    end

    add_index :servers, :owner_id
  end
end