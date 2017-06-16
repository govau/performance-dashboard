class TokenDecorator < Draper::Decorator
  delegate_all

  def display_name
    "Token #{id}"
  end

  def to_short_s
    object.to_s[0,7]
  end

  def active?
    object.active? ? 'Yes' : 'No'
  end

end
