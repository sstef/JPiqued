class Api::PinsController < ApplicationController
  def index
    @pins = Pin.all
    render json: @pins
  end

  def create
    @pin = Pin.new(pin_params)
    @pin.creator_id = currentUser.id
    board = Board.find_by(creator_id: currentUser.id)
    @pin.board_id = board.id
    if @pin.save
      redirect_to action: :index
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def update
    @pin = Pin.find(params[:id])

    if @pin.update(pin_params)
      render json: @pin
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def show
    @pin = Pin.find(params[:id])
    render json: @pin
  end

  def destroy
    pin = Pin.find(params[:id])
    pin.destroy
    render json: pin
  end

  private

  def pin_params
    params.require(:pin).permit(:description, :keywords, :image_url, :link_url)
  end
end
