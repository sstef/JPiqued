class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :currentUser, :logged_in?

  def currentUser
    @currentUser ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!currentUser
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end

  def require_login
    redirect_to new_session_url unless logged_in?
  end
end
