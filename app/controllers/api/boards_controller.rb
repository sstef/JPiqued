class Api::BoardsController < ApplicationController
  def create
    @board = Board.new(board_params)
    @board.creator_id = currentUser.id
    if @board.save
      render json: :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def update
    @board = Board.find_by(params[:id])

    if @board.update_attributes
      render json: :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def show
    @board = Board.find_by(params[:id])
  end

  private

  def board_params
    params.require(:board).permit(:name, :description)
  end

end
