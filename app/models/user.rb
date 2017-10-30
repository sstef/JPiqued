# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  email               :string           not null
#  name                :string           not null
#  session_token       :string
#  password_digest     :string           not null
#  follows             :integer          default([]), is an Array
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class User < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, presence: true
  has_attached_file :avatar, default_url: "app/assets/images/default_avatar.png",
    styles: { large: "150x150>", medium: "50x50>", thumb: "32x32>" }
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  # has_many :follows
  has_many :boards,
    class_name: :Board,
    primary_key: :id,
    foreign_key: :creator_id

  has_many :pins,
    class_name: :Pin,
    primary_key: :id,
    foreign_key: :creator_id

  has_many :comments,
    foreign_key: :author_id,
    class_name: :Comment

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  private

  attr_reader :password

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
