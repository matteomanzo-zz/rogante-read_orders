require 'greeter'
# Default is World
# Author: Matteo Manzo (imatteo.manzo@gmail.com)
name = ARGV.first || "World"

greeter = Greeter.new(name)
puts greeter.greet