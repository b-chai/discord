# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  server_name :string           not null
#  server_icon :string
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Server < ApplicationRecord
    validates :server_name, presence:true

    belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User
end
