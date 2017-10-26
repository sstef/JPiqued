require 'test_helper'

class BoardsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get boards_create_url
    assert_response :success
  end

  test "should get update" do
    get boards_update_url
    assert_response :success
  end

  test "should get show" do
    get boards_show_url
    assert_response :success
  end

  test "should get destroy" do
    get boards_destroy_url
    assert_response :success
  end

end
