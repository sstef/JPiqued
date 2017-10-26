Rails.application.routes.draw do
<<<<<<< HEAD
  get 'boards/create'

  get 'boards/update'

  get 'boards/show'

  get 'boards/destroy'

  namespace :api do
    get 'pins/create'
  end
=======
>>>>>>> master

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create, :show, :update] do
      resources :boards, except: [:new, :edit]
    end

    resources :pins, except: [:new, :edit] do
      resources :comments, only: [:create, :show]
    end

    resources :comments, only: [:destroy]
  end

  root to: 'static_pages#root'

  get 'static_pages/root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
