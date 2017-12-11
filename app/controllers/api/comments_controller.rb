class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    debugger
    @comment.author_id = currentUser.id

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: {}
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :pin_id)
  end

end
