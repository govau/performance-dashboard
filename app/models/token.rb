require 'securerandom'

class Token < ApplicationRecord

  before_create :set_token

  belongs_to :user

  def self.api
    where('session = false')
  end

  def self.session
    where('session = true')
  end

  def self.authenticate!(token)
    active.find_by!(:token => token.to_s)
  end

  def self.active
    where('expired_at IS NULL OR expired_at >= ?', Time.zone.now)
  end

  def self.expired
    where('expired_at <= ?', Time.zone.now)
  end

  def expire!
    update!(:expired_at => Time.zone.now)
  end

  def expired?
    expired_at.present? && expired_at <= Time.zone.now
  end

  def active?
    !expired?
  end

  def to_s
    token
  end

  def session?
    session == true
  end

  private

  def set_token
    self.token = generate_token if self.token.blank?
  end

  def generate_token
    2.times.collect{ SecureRandom.uuid.delete('-') }.join
  end

end
