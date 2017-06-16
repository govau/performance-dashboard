class AuditDecorator < Draper::Decorator
  decorates :'audited/audit'
  delegate_all

  def to_pretty_s 
    verb = VERB_LOOKUP[action.to_sym]
    pretty_type = auditable_type.downcase
    time = created_at.strftime BRIEF_TIME

    predicate = if auditable.to_s.present? 
      "the #{pretty_type} '#{pretty_auditable}'"
    else
      "a #{pretty_type}"
    end

    "#{user} #{verb} #{predicate} on #{time}"
  end

  private 

  def pretty_auditable
    case auditable 
    when DataRow
      auditable.row_date.strftime(BRIEF_TIME)
    else 
      auditable.to_s
    end 
  end

  VERB_LOOKUP = {
    create: 'added',
    destroy: 'deleted',
    update: 'updated'
  }

  BRIEF_TIME = '%-d %b %y'
end