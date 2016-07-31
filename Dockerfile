FROM node:6
MAINTAINER Greg Lavallee, greg.lavallee@slate.com

COPY Gruntfile.js package.json /
RUN npm install -g grunt-cli && npm install
