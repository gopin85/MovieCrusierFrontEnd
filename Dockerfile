#Base Image
FROM stefanscherer/node-windows

#working directory
WORKDIR /app

#Copy package json
COPY package.json /app

#install dependencies
RUN npm install

#Copy complete application code
Copy . /app

CMD npm start
