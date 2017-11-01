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
#  category    :string
#  secret      :boolean          default(FALSE)
#

require 'test_helper'

class BoardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
