# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string           not null
#  avatar_url      :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, presence:true, uniqueness:true
    validates :password_digest, presence:true
    validates :password, length: {minimum: 6}, allow_nil:true
    after_validation :ensure_session_token

    # has_many :messages,
    # foreign_key: :author_id,
    # class_name: :Message

    # SPIRE

    def self.find_by_credentials(username,password)
        user = User.find_by(username: username)

        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    attr_reader :password
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        temp = BCrypt::Password.new(self.password_digest)
        temp.is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
