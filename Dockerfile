FROM rails
RUN mkdir /app
WORKDIR /app

RUN curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh \
    && bash nodesource_setup.sh \
    && apt-get install nodejs
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN  apt-get update && apt-get install yarn

ADD . /app
RUN bundle install
RUN ./bin/yarn install
