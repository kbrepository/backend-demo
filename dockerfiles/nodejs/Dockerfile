FROM node:16

RUN yum install -y git

# Create app directory
WORKDIR /usr/src/app
RUN git clone -b prod git@github.com:orglinked/AWS_Backend.git

COPY package*.json ./

RUN npm install


COPY . .
EXPOSE 51005
CMD [ "node", "index.js" ]
