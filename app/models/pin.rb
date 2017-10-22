# == Schema Information
#
# Table name: pins
#
#  id          :integer          not null, primary key
#  description :text             not null
#  image_url   :string           not null
#  link_url    :string
#  creator_id  :integer          not null
#  keywords    :string           default([]), is an Array
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Pin < ApplicationRecord
  validates :description, :image_url, :creator_id, presence: true

  belongs_to :user
  belongs_ to :board
end
