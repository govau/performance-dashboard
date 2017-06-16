class User < ApplicationRecord
  devise :invitable, :two_factor_authenticatable, :database_authenticatable,
    :confirmable, :lockable, :recoverable, :rememberable, :timeoutable,
    :trackable, :validatable

  has_one_time_password(encrypted: true)

  has_many :tokens do
    def expire
      update(:expired_at => Time.zone.now)
    end
  end

  belongs_to :organisation

  has_many :permissions, dependent: :destroy
  has_many :dashboards, through: :permissions, source: :resource,
    source_type: 'Dashboard'
  has_many :widgets, through: :dashboards
  has_many :organisations, through: :dashboards

  def self.by_email
    order(:email => 'ASC')
  end

  def self.authenticate!(token)
    Token.authenticate!(token).user
  end

  def expire_session_tokens
    tokens.session.expire
  end

  def generate_api_token!
    tokens.create!(:session => false)
  end

  def generate_session_token!
    expire_session_tokens
    tokens.create!(:session => true)
  end

  def token
    tokens.active.first
  end

  def api_token
    tokens.api.active.first
  end

  def session_token
    tokens.session.active.first
  end

  def to_s
    email
  end

  def datasets
    dashboards.collect {|dashboard|
      dashboard.datasets.to_a
    }.flatten.uniq
  end

  def need_two_factor_authentication?(_request)
    $flipper[:two_factor].enabled?
  end

  def send_two_factor_authentication_code(code)
    # Send code via SMS, etc.
  end
end
