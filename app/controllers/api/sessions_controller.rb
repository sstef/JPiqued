class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:username], params[:password])
    if @user
      login!(@user)
      render '/api/users/show'
    else
      render json: ["Invalid Username/Password"], status: 401
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: {}, status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
