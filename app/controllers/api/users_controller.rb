class Api::UsersController < ApplicationController
  def create
    # user: { username, password }
    @user = User.new(user_params)

    if @user.save && (@user.avatar.present? && @user.avatar.url.exists?)
      Board.create!(description: '', creator_id: @user.id, name: 'Your first board!')
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params) && (@user.avatar.present? && @user.avatar.url.exists?)
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
