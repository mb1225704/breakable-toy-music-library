Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get'/songs', to: "static_pages#index"
  get'/songs/new', to: "static_pages#index"
  get'/songs/:id', to: "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :songs, only: [:index, :create, :show] do
        resources :artists, only: [:show]
        resources :techniques, only: [:show, :create]
      end
      get'/current-user', to: "current_user#index"
      get "/songs/search", to: "songs#search"
      get "/songs/spotify_search", to: "songs#spotify_search"
      
    end
  end
end
