Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get'/songs:id', to: "static_pages#index"
  # get'/songs', to: "static_pages#index"

  resources :songs, only: [:index]

  # namespace :api do
  #   namespace :v1 do
  #     resources :songs, only: [:show]
  #   end
  # end
end
