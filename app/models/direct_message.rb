# == Schema Information
#
# Table name: direct_messages
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  reader_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class DirectMessage < ApplicationRecord
    validates :author_id, presence:true

    belongs_to :dm_author,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :dm_reader,
    foreign_key: :reader_id,
    class_name: :User

end
