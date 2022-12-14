Rails.application.routes.draw do
  resources :stores, only: [:create, :show, :index, :update]
  resources :products, only: [:create, :show, :index, :update, :destroy]
  


end
