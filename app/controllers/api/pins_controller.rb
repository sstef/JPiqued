class Api::PinsController < ApplicationController

  def index
    @pins = Pin.all.shuffle
    render :index
  end

  def create
    @pin = Pin.new(pin_params) # && (@pin.image.present? && @pin.image.url.exists?)
    @pin.creator_id = currentUser.id
    board = Board.find_by(creator_id: currentUser.id)
    @pin.board_id = board.id
    if @pin.save
      render :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def update
    @pin = Pin.find(params[:id])

    if @pin.update(pin_params) # && (@pin.image.present? && @pin.image.url.exists?)
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
    params.require(:pin).permit(:description, :keywords, :title, :link_url, :image)
  end

end
