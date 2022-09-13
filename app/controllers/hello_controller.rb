class HelloController < ApplicationController
  def index
    render html: "Hello, world!"
  end
end
