# Använd Node.js officiell bild
FROM node:18

# Sätt arbetskatalog
WORKDIR /app

# Kopiera projektfiler
COPY package*.json ./
COPY . .

# Installera beroenden
RUN npm install

# Exponera port
EXPOSE 3000

# Starta applikationen
CMD ["npm", "start"]
