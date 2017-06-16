module ActiveAdmin::ViewsHelper
  ['dashboard', 'datapoint', 'dataset', 'widget', ''].each do |model|
    ['s', ''].each do |s|
      fragment = if model.blank? then '' else "#{model}_" end
      
      define_method "admin_#{fragment}audited_audit#{s}_path" do |*args|
        send "admin_#{fragment}audit#{s}_path", *args
      end
    end
  end
end 
