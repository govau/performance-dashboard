class NonApiBasicAuth < Rack::Auth::Basic
  EXCLUDE = /^\/api\//

  def call(env)
    request = Rack::Request.new(env)

    if request.path =~ EXCLUDE
      @app.call env               # Skip basic auth for API calls
    else
      super                       # Do basic auth for everything else
    end
  end
end
