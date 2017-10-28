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

require 'test_helper'

class PinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
