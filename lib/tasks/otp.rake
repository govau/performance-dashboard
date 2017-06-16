namespace :otp do

  desc 'update existing users with otp secret key'
  task update_users: :environment do
    User.find_each do |user|
      key = user.generate_totp_secret
      user.otp_secret_key = key # Encryption in setter
      user.save!
      puts "User #{user.email} - OTP secret key set to: #{key}"
    end
  end
end
