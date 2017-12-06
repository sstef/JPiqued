class Api::BoardsController < ApplicationController
  def index
    @boards = Board.all
  end

  def create
    @board = Board.new(board_params)
    @board.creator_id = currentUser.id
    if @board.save
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def update
    @board = Board.find(params[:id])

    if @board.update(board_params)
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def show
    @board = Board.find(params[:id])
    render :show
  end

  def destroy
    board = Board.find(params[:id])
<<<<<<< HEAD
=======
    board.pin_ids.each do |pinid|
      pin = Pin.find(pinid)
      pin.destroy
    end
>>>>>>> master
    board.destroy
    render json: {}
  end

  private

  def board_params
    params.require(:board).permit(:id, :name, :description, :category, :secret)
  end

end
