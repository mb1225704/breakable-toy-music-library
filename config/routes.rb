Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get'/songs', to: "static_pages#index"
  get'/songs/new', to: "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :songs, only: [:index, :create] do
        resources :artists, only: [:show]
      end
      get'/current-user', to: "current_user#index"
    end
  end
end
