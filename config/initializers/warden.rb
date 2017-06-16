Warden::Manager.before_logout do |user, auth, opts|
  user.expire_session_tokens
end
