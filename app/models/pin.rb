# == Schema Information
#
# Table name: pins
#
#  id                 :integer          not null, primary key
#  description        :text             not null
#  link_url           :string
#  board_id           :integer
#  creator_id         :integer          not null
#  keywords           :string           default([]), is an Array
#  title              :string
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Pin < ApplicationRecord
  validates :description, :creator_id, presence: true
  has_attached_file :image, default_url: "missing.png"
  validates_attachment :image, presence: true,
    content_type: { content_type: /\Aimage\/.*\Z/ }

  belongs_to :user,
    foreign_key: :creator_id,
    class_name: :User

  belongs_to :board

  has_many :comments

end
