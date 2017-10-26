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

<<<<<<< HEAD
  def destroy
    @user = User.find(params[:id])

    if @user.destroy
=======
  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
>>>>>>> master
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

<<<<<<< HEAD

=======
>>>>>>> master
  private

  def user_params
    params.require(:user).permit(:name, :password, :email)
  end
end
