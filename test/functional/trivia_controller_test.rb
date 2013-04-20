require 'test_helper'

class TriviaControllerTest < ActionController::TestCase
  setup do
    @trivium = trivia(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:trivia)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create trivium" do
    assert_difference('Trivium.count') do
      post :create, trivium: { difficulty: @trivium.difficulty, fact: @trivium.fact, image_url: @trivium.image_url, title: @trivium.title }
    end

    assert_redirected_to trivium_path(assigns(:trivium))
  end

  test "should show trivium" do
    get :show, id: @trivium
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @trivium
    assert_response :success
  end

  test "should update trivium" do
    put :update, id: @trivium, trivium: { difficulty: @trivium.difficulty, fact: @trivium.fact, image_url: @trivium.image_url, title: @trivium.title }
    assert_redirected_to trivium_path(assigns(:trivium))
  end

  test "should destroy trivium" do
    assert_difference('Trivium.count', -1) do
      delete :destroy, id: @trivium
    end

    assert_redirected_to trivia_path
  end
end
