module HullHelpers

  def pluralize(count, singular, plural = nil)
    "#{count || 0} " + ((count == 1 || count =~ /^1(\.0+)?$/) ? singular : (plural || singular.pluralize))
  end

  def page_title page=""
    "#{data.strings.title} : #{(data.page.title||data.strings.tagline)}"
  end

  def page_type
    data.page.page_type rescue 'docs'
  end

  def description
    data.page.description ||data.strings.description
  end

  def app_name
    data.page.app_name || data.strings.title['app_name']
  end

  def tagline
    data.page.tagline || data.strings.tagline
  end

  def intro
    data.page.intro || data.strings.intro
  end

  def title
    data.page.title || data.strings.title
  end

  def docs_title page
    (page.metadata[:page]['title']||page.url.split('/').last.gsub('.html','').humanize)
  end

  def docs_tree
    return @pages unless @pages.nil?
    pages = sitemap.resources.find_all {|p| p.url.match(%{^\/docs\/}) }
    @pages = pages.sort_by { |o| (o.metadata[:page]['weight'] or 0)  }.reverse.group_by {|o| o.url.split('/')[2..-2].join('/') }
    @pages
  end

end
