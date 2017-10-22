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

require 'test_helper'

class PinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
