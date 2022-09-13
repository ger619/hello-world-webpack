class Api::V1::HelloController < ApplicationController
  def index
    @hello = Hello.all
    render json: @hello
  end
end
