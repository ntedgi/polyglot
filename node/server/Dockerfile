FROM node:10.19.0
EXPOSE 3005
WORKDIR /home/app

COPY package.json /home/app/
COPY package-lock.json /home/app/
RUN npm install

COPY ./ ./

CMD ["./wait-for-db.sh", "localhost:5432", "--", "npm","start"]
