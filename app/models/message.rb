# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  body       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer          not null
#  channelId  :integer
#
class Message < ApplicationRecord
    validates :author_id, presence:true

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
