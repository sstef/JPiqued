class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:email], params[:password])
    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid Email/Password"], status: 401
    end
  end

  def destroy
    if currentUser
      logout!
      render json: {}
    else
      render json: {}, status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
