
Time.zone = "US/Central"

activate :blog do |blog|
  blog.layout = "post"
  blog.paginate = true
  blog.per_page = 10
  blog.permalink = "/{title}.html"
  blog.sources = "posts/{year}-{month}-{day}-{title}.html"
  blog.summary_separator = /\/\/READMORE/
end

# RSS feed settings
page "/feed.xml", :layout => false

# Pretty URLS
activate :directory_indexes

# Markdown settings
set :markdown, :auto_ids => false, :smartypants => true

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
end

# Expose bower_components to sprockets
sprockets.append_path File.join root, 'bower_components'
