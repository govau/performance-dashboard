json.(dashboard, :id, :name, :description, :notes, :url, :target_users,
  :display_hero, :display_kpis, :published_at)

json.organisation_name dashboard.organisation&.name