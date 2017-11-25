class Api::UsersController < ApplicationController
  def create
    # user: { username, password }
    @user = User.new(user_params)

    if @user.save
      Board.create!(description: 'This is my first board! =)', creator_id: @user.id, name: 'Your first board!', category: 'Other')
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by_id(params[:id])
    debugger
    render :show
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def follow_user
    @user = User.find(params[:id])
    if current_user.follow(@user.id)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def unfollow_user
    @user = User.find(params[:id])
    if current_user.unfollow(@user.id)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :password, :email, :avatar)
  end
end
