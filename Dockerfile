FROM phusion/baseimage
USER root
RUN curl -sL https://deb.nodesource.com/setup_6.x \
  | bash - \
  && apt-get install -y nodejs
WORKDIR /usr/src/
COPY [ ".", \
  "/usr/src/" \
  ]
RUN npm install -S
ENV PORT="80"
EXPOSE 80
CMD npm start
