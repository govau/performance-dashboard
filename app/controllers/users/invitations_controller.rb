class Users::InvitationsController < Devise::InvitationsController
  before_action :set_organisations, only: [:new, :create]

  def invite_resource
    @dashboards = if params['user']['dashboard_ids']
      params['user']['dashboard_ids'].reject(&:empty?).collect do |id|
        Dashboard.find(id)
      end
    else
      []
    end

    super do |resource|
      dashboard_orgs = @dashboards.collect {|d| d.organisation }.uniq

      case dashboard_orgs.count
      when 0
        resource.errors.add :dashboards, 'missing'
      when 1
        resource.organisation = dashboard_orgs.first
        resource.dashboards = @dashboards
      else
        resource.errors.add :dashboards, 'should only be chosen from within a single organisation'
      end
    end
  end

  private

  def after_accept_path_for(resource)
    if $flipper[:two_factor].enabled? && resource.otp_secret_key.blank?
      users_shared_secrets_path
    else
      super
    end
  end

  def set_organisations
    if current_user.admin?
      @show_dashboards = true

      @organisations = Organisation.all.select do |org|
        org.dashboards.any?
      end
    else
      @organisations = [current_user.organisation]
      @show_dashboards = current_user.organisation.dashboards.count != 1
    end

    @select_size = @organisations.inject(0) do |sum, org|
      sum + 1 + org.dashboards.count
    end
  end
end
