# Rails Starter (Vue, Tailwindcss, Postgres, Devise)

There are a lot of starter templates for Rails apps, but I want one that is so minimal that I never have to delete anything to get started — only add to it. Most come with more than I need by default. To use, fork/clone this repository instead of `rails new app`.

## Relevant Versions Used (Modifiable)
* Ruby 2.6.3
* Rails 6.0.1
* Node 12.13.0
* Tailwindcss ^1.1.3
* Vue ^2.6.10

## Initial Setup
Install all dependencies and create/migrate the database.

1. Fork the repository
2. Clone it to your local machine
3. `cd` into the directory
4. `bundle` (installs all gems)
5. `yarn` (installs all packages)
6. `rails db:create && rails db:migrate`

## Running the App
1. `rails s`
2. Open new tab in Terminal and `bin/webpack-dev-server`

## Notes
You are mostly starting from scratch with these tools besides for the basic installation, so there are very few assumptions or defaults if any.
#### Tailwind
* To modify defaults, see tailwind.config.js file.
* To add custom styles I recommend creating organized files in app/javascript/css and importing the files into main.css.
* See Tailwind Docs (https://tailwindcss.com)

#### Vue
* I added a sample component "App" to show basic organization and process for adding a component.
* See Vue Docs (https://vuejs.org)

#### Devise
* A User model was initialized with defaults.
* Views were generated with no styling. There are some Tailwind Devise form ERB files online you can copy.
* See Devise Docs (https://github.com/plataformatec/devise)
