###
FROM ubuntu:focal AS node-ubuntu-focal

RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install curl -y
RUN apt-get install traceroute -y
RUN apt-get install iproute2 -y
RUN apt-get install net-tools -y
RUN apt-get install iputils-tracepath -y

RUN curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install nodejs -y


###
FROM node-ubuntu-focal as app

ENV PORT=3000
ENV NODE_ENV=production
ENV ECHO_MESSAGE="Hello World"

WORKDIR /app

COPY . .

CMD ["node", "index.js"]
