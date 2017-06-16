class DashboardDecorator < Draper::Decorator
  delegate_all

  def show_hero?
    display_hero && display_kpis && widgets.hero.present?
  end

  def show_kpis?
    display_kpis && widgets.kpis.any?
  end

  def show_notes?
    notes.present?
  end

  def show_url?
    url.present?
  end

  def name_slug
    name.downcase.parameterize()
  end

  def notes_to_html
    h.sanitize(markdown.render(notes))
  end

  def name
    object.name.gsub(/dashboard\z/i, '').strip
  end

  def dashboardized_name
    name.downcase.index('dashboard') ? name : "#{name} Dashboard"
  end

  def last_updated_at
    object.last_updated_at&.to_formatted_s(:day_month_year)
  end

  def markdown
    render_options = {
      # filter_html: true,
      hard_wrap: true,
      images: true,
      no_styles: true,
      safe_links_only: true
    }
    renderer = Redcarpet::Render::HTML.new(render_options)

    extensions = {
      #will parse links without need of enclosing them
      autolink: true,
      # blocks delimited with 3 ` or ~ will be considered as code block.
      # No need to indent.  You can provide language name too.
      # ```ruby
      # block of code
      # ```
      fenced_code_blocks: true,
      # will ignore standard require for empty lines surrounding HTML blocks
      lax_spacing: true,
      # will not generate emphasis inside of words, for example no_emph_no
      no_intra_emphasis: true,
      # will parse strikethrough from ~~, for example: ~~bad~~
      strikethrough: true,
      # will parse superscript after ^, you can wrap superscript in ()
      superscript: true
      # will require a space after # in defining headers
      # space_after_headers: true
    }
    @markdown ||= Redcarpet::Markdown.new(renderer, extensions)
  end

end
