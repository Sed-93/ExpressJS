# Använd Node.js-bild
FROM node:18

# Sätt arbetskatalogen
WORKDIR /app

# Kopiera projektets filer
COPY package*.json ./
COPY . .

# Installera beroenden
RUN npm install

# Exponera porten
EXPOSE 3000

# Starta applikationen
CMD ["npm", "start"]
