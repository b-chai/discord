class AddDirectMessageArrayToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :rooms, :text, array: true, default: []
  end
end
