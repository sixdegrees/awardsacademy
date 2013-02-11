require "slim"

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :build_dir, "tmp"
set :markdown_engine, :redcarpet
set :markdown, :fenced_code_blocks => true,
               :gh_blockcode       => true,
               :tables             => true,
               :autolink           => true, 
               :smartypants        => true,
               :no_intra_emphasis  => true,
               :pattern            => '```'

activate :livereload
activate :directory_indexes

#########################################################################################################
# Sass Configuration
#########################################################################################################
require 'lib/retina.rb'
require 'lib/random-color.rb'
Sass::Script::Number.precision = 20

#########################################################################################################
# Helpers
#########################################################################################################

# Build-specific configuration
HandlebarsAssets::Config.template_namespace = 'JST'


configure :build do
  activate :smusher
  activate :minify_css
  activate :minify_javascript
  # activate :cache_buster
  activate :relative_assets
  activate :gzip
  
  set :relative_paths, true
  set :logging, true
end



