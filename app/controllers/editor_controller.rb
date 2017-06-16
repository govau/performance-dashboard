class EditorController < ApplicationController

  before_action :authenticate_user!
  before_action :generate_session_token!
  helper_method :session_token

  def index
    @slices = current_user.widgets.select {|widget|
      widget.has_data?
    }.collect {|widget|
      widget.data_table.slices(widget)
    }.flatten
  end

  protected

  def session_token
    current_user.session_token
  end

  def generate_session_token!
    if session_token.present?
      session[:session_token] = session_token
    else
      session[:session_token] = current_user.generate_session_token!
    end
  end
end
