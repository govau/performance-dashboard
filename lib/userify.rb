class Userify
  attr_reader :opts, :user

  def initialize(opts)
    @opts = OpenStruct.new(opts)
  end

  def create!
    clean
    create_user
    create_token
  end

  def create_user
    @user = User.new(
      :email => opts.email,
      :password => opts.password,
      :password_confirmation => opts.password,
      :organisation => organisation,
      :dashboards => [dashboard],
      :admin => opts.admin)

    user.skip_confirmation!
    user.save!
  end

  def create_token
    user.tokens.create!(:token => opts.token)
  end

  def clean
    User.where(:email => opts.email).delete_all
    Token.where(:token => opts.token).delete_all
  end

  def dashboard
    if opts.dashboard_id
      Dashboard.find(opts.dashboard_id)
    else
      Dashboard.first
    end
  end

  def organisation
    Organisation.find_or_create_by!(:name => opts.org_name, :url => opts.org_url)
  end
end
