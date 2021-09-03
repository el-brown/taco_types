Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get '/tacos', to: 'tacos#index'
    

  end
  # resources :things
end



# namespace :api do
#   namespace :v1 do
#     resources :authors do
#       resources :books
#     end
#   end
# end
