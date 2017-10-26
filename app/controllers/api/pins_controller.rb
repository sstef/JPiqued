class Api::PinsController < ApplicationController
  def create
    @pin = Pin.new(pin_params)
    @pin.creator_id = currentUser.id
    @pin.board_id = 1
    if @pin.save
      render json: :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def update
    @pin = Pin.find_by(params[:id])

    if @pin.update_attributes
      render json: :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def show
    @pin = Pin.find_by(params[:id])
  end

  def destroy

  end

  private

  def pin_params
    params.require(:pins).permit(:description, :keywords)
  end
end
