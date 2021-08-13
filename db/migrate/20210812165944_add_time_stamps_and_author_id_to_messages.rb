class AddTimeStampsAndAuthorIdToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :created_at, :datetime, null: false
    add_column :messages, :updated_at, :datetime, null: false
    add_column :messages, :author_id, :integer, null:false
    add_index :messages, :author_id
  end
end
