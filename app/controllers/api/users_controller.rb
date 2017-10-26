class Api::UsersController < ApplicationController
  def create
    # user: { username, password }
    @user = User.new(user_params)

    if @user.save
      Board.create!(description: '', creator_id: @user.id, title: 'Your first board!')
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def destroy
    @user = User.find(params[:id])

    if @user.destroy
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:name, :password, :email)
  end
end
