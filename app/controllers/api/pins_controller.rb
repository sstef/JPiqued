class Api::PinsController < ApplicationController
  def index
    @pins = Pin.all
  end

  def create
    @pin = Pin.new(pin_params)

    if @pin.save
      render json: :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def update
    @pin = Pin.find_by(params[:id])

    if @pin.update(pin_params)
      render json: :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def show
    @pin = Pin.find_by(params[:id])
  end

  def destroy
    @pin = Pin.find(params[:id])

    if @pin.destroy
      render :index
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  private

  def pin_params
    params.require(:pins).permit(:description, :keywords)
  end
end
