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
    @currentUser = user
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    currentUser.try(:reset_session_token!)
    session[:session_token] = nil
    @currentUser = nil
  end

  def require_login
    render :login unless logged_in?
  end
end
