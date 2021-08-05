class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :body
      t.integer :author_id, null:false
    end

    add_index :messages, :author_id
    add_index :messages, :body
  end
end
