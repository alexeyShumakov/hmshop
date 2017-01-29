Empty rails application with pre-installed gems.

1. install docker and docker-compose on your system
2. clone this repo
3. run commands
```
sudo docker-compose build
sudo docker-compose run web bundle exec rails db:create
sudo docker-compose up
```
4. open http://localhost:3000 in your browser and you done
5. start to do something cool!

list of technologies:

1. Rails - backend
2. Postgresql - main db
3. dotenv - env variables
4. Docker, docker-compose - Build, Ship, and Run
5. Webpack, yarn - frontend
7. Rspec, capybara, factory girl - testing
8. milligram - mini css framework
9. Redis, sidekiq - background jobs
10. Mailcatcher - debug mails
