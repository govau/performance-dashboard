class UsersController < ApplicationController

  layout 'editor'

  before_action :authenticate_user!

end
