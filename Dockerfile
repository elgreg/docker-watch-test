FROM node:6


COPY Gruntfile.js package.json /
RUN npm install -g grunt-cli && npm install
RUN mv /node_modules /node_modules.docker
