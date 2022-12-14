class StoresController < ApplicationController
    
    
  def index
    store = Store.all
    render json: store
  end
  
  def create 
    store = Store.find_or_create_by(new_store_params)
    render json: store

  end
    
  def show
    store = Store.find(params[:id])
    render json: store
  end
  
  private

  def new_store_params
    params.permit(:name)
  end
end
