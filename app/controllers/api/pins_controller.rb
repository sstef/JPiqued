class Api::PinsController < ApplicationController
  # before_filter :parse_raw_upload, only: [:create, :update]

  def index
    @pins = Pin.all.shuffle
    render :index
  end

  def create
    @pin = Pin.new(pin_params) # && (@pin.image.present? && @pin.image.url.exists?)
    @pin.creator_id = currentUser.id
    board = Board.find_by(creator_id: currentUser.id)
    @pin.board_id = board.id
    @pin.image = @raw_image
    if @pin.save
      render json: @pin
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def update
    @pin = Pin.find(params[:id])

    if @pin.update(pin_params) # && (@pin.image.present? && @pin.image.url.exists?)
      render json: @pin
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

  def parse_raw_upload
    if env['HTTP_X_FILE_UPLOAD'] == 'true'
      @raw_image = env['rack.input']
      @raw_image.class.class_eval { attr_accessor :original_filename, :content_type }
      @raw_image.original_imagename = env['HTTP_X_FILE_NAME']
      @raw_image.content_type = env['HTTP_X_MIME_TYPE']
    end
  end

end
