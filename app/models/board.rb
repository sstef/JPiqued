# == Schema Information
#
# Table name: boards
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :string
#  creator_id  :integer          not null
#  pin_ids     :integer          default([]), is an Array
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Board < ApplicationRecord
  validates :name, :creator_id, presence: true

  belongs_to :user,
    foreign_key: :creator_id,
    class_name: :User

  has_many :pins

end
