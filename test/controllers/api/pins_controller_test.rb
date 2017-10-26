require 'test_helper'

class Api::PinsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_pins_create_url
    assert_response :success
  end

  test "should get update" do
    get api_pins_update_url
    assert_response :success
  end

  test "should get show" do
    get api_pins_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_pins_destroy_url
    assert_response :success
  end

end
