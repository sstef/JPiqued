Rails.application.routes.draw do
  namespace :api do
    get 'pins/create'
  end

  namespace :api do
    get 'pins/update'
  end

  namespace :api do
    get 'pins/show'
  end

  namespace :api do
    get 'pins/destroy'
  end

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
  end

  root to: 'static_pages#root'

  get 'static_pages/root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
