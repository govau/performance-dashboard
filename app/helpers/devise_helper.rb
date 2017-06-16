module DeviseHelper
  def devise_error_messages!
    if devise_error_messages?
      resource.errors.full_messages.collect { |message|
        render partial: 'alert', locals: { alert_type: 'warning', message: message }
      }.join.html_safe
    end
  end

  def devise_error_messages?
    !resource.errors.empty?
  end

end
