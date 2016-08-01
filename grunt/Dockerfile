FROM node:6
MAINTAINER Greg Lavallee, greg.lavallee@slate.com

COPY gulpfile.js package.json /
# Upgrade node and npm to latest version
RUN     npm cache clean
RUN     curl -L https://npmjs.org/install.sh | sh
RUN npm install -g grunt-cli && npm install
