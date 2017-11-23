class Api::PinsController < ApplicationController

  def index
    @pins = Pin.all.shuffle
    render :index
  end

  def create
    @pin = Pin.new(pin_params)
    @pin.creator_id = currentUser.id
debugger
    if @pin.save
      render :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def update
    @pin = Pin.find(params[:id])

    if @pin.update(pin_params)
      render :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def show
    @pin = Pin.find(params[:id])
    render :show
  end

  def destroy
    pin = Pin.find(params[:id])
    pin.destroy
    render json: {}
  end

  private

  def pin_params
    params.require(:pin).permit(:description, :title, :link_url, :board_id, :image, keywords: [])
  end

end
