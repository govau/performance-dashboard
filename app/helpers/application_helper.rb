module ApplicationHelper

  def is_production?
    !Rails.env.development?
  end

  def development_server?
    Rails.env.development? && ENV['DEV_SERVER'] == 'true'
  end

  # Sets the body data-route value on a per-page basis
  # Params:
  # - class_names: String of class names to append to class names string
  def body_route
    "#{controller_name}_#{action_name}"
  end

  # Sets the body class on a per-page basis
  # Params:
  # - class_names: {Array} Array of additional class names to append to body class
  # names
  def body_class(names)
    class_names = [body_route] << names
    class_names.flatten.join(' ')
  end

  def display_high_contrast_mode?
    controller_name == 'dashboards' && action_name == 'show'
  end

  def hashAsset(public_relative_path)
    public_relative_path + "?" + Digest::MD5.file(File.join(Rails.public_path, public_relative_path)).hexdigest
  end

  def getPublicImageSrc(relative_path)
    hashAsset('/images/' + relative_path)
  end

  def getPublicStylesheet(relative_path)
    tag('link', href: hashAsset('/stylesheets/' + relative_path), rel: 'stylesheet')
  end

  def getPublicJavascript(relative_path)
    opts = { src: hashAsset('/javascripts/' + relative_path), type: 'text/javascript' }
    tag('script', opts, true) + '</script>'.html_safe
  end

  def show_auth?
    $flipper[:auth].enabled? && !devise_controller?
  end
end
