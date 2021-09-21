class AddChannelIdToMessage < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :channelId, :integer
    add_index :messages, :channelId
  end
end