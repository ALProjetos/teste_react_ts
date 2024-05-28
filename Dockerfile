# Use uma imagem base oficial do Node.js
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Compile a aplicação React
RUN npm run build

# Instale o servidor estático para servir a aplicação
RUN npm install -g serve

# Exponha a porta que a aplicação irá rodar
EXPOSE 5000

# Comando para iniciar a aplicação
CMD ["serve", "-s", "build"]
