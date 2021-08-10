# == Schema Information
#
# Table name: messages
#
#  id   :bigint           not null, primary key
#  body :string
#
class Message < ApplicationRecord
    # validates :author_id, presence:true

    # belongs_to :author,
    # foreign_key: :author_id,
    # class_name: :User
end
