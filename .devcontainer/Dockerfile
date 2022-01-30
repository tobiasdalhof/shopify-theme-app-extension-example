FROM ruby:3

RUN apt-get update && apt-get install -y git zsh curl

RUN gem install shopify-cli

RUN curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n && bash n lts 16
RUN npm install -g npm pnpm

RUN groupadd --gid 1000 node \
    && useradd --uid 1000 --gid 1000 -m node

USER node

RUN cd ~ && wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh && sh install.sh
RUN /bin/zsh ~/.zshrc
