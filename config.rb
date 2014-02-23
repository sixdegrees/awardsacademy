require 'rack_environment'
require 'bootstrap-sass'

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

activate :gzip
activate :sprockets
activate :livereload
activate :directory_indexes

set :relative_links, true

page "*", layout: :layout
page "admin/*", layout: :admin
page "admin/login.html", layout: :login

Sass::Script::Number.precision = 20
sprockets.append_path File.join "#{root}", "bower_components"
sprockets.append_path "bower_components"

if File.exist?('./config/environment.yml')
  re = RackEnvironment.new({})
  re.update_environment!
end

# Build-specific configuration
configure :build do

  activate :minify_css
  activate :minify_javascript
  activate :cache_buster
  activate :gzip

  set :logging, true

end

helpers do
  def relative_random_date
    y = rand(1) + 2013
    m = rand(12) + 1
    d = rand(31) + 1
    (time_ago_in_words(Time.local(y,m,d).strftime('%a %b %d, %Y'))+ ' ago').capitalize
  end
end
