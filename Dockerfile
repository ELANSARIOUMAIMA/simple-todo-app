FROM node:20

ENV MONGO_DB_USERNAME=admin
ENV MONGO_DB_PWD=password

# Creates a directory /home/app inside the container.
# RUN mkdir -p /home/app
# Docker will automatically create /home/app when you COPY into it

# Sets /home/app as the working directory inside the container.
WORKDIR /home/app

# Copies the contents of your local app folder into the container at /home/app
COPY ./app /home/app

# Keeps all your app files in one folder inside the container
RUN npm install

# RUN VS COPY
# RUN they get executed inside of the container 
# COPY executes on the host machine



#EXPOSE 3000

# CMD VS RUN because i could to say run node server
# CMD entry point command

CMD ["node","server.js"]