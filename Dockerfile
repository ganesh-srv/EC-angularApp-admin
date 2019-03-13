FROM node

# Create angularApp dir
#RUN mkdir /users/src/app here /users/src already exist thats why we are able to create app folder
# if you want to see what are the folders with in the docker system run the below code 


RUN ls

WORKDIR /angularApp/src/app

COPY package*.json ./

RUN npm install
COPY . .

CMD [ "npm", "start" ]