class PerformancesController < ApplicationController

  def index
    @performances = policy_scope(Performance).order(created_at: :desc)
    if params[:query].present?
      @performances = @performances.where("name ILIKE ?", "%#{params[:query]}%")
    end
    authorize @performances
  end

  def show
    @performance = Performance.find(params[:id])
    @message = Message.new
    @performance.artist = @performance.artist
    @performance.messages = @performance.messages
    authorize @performance
  end

  def new
    @performance = Performance.new
    authorize @performance
  end

  def create
    @performance = Performance.new(performance_params)
    @artist = Artist.find_by(user_id: current_user.id)
    @performance.artist = @artist
    if @performance.save
      redirect_to performances_path
    else
      render :new
    end
    authorize @performance
  end

  private

  def performance_params
    params.require(:performance).permit(:name, :description, :address, :start_time)
  end
end
