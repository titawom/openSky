# Usar la imagen oficial de Node.js
FROM node:16

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instalar las dependencias
RUN npm install
RUN npm install -g @angular/cli 

# Copiar todo el código fuente al contenedor
COPY . .

# Exponer el puerto en el que se ejecuta la aplicación Angular (generalmente 4200)
EXPOSE 4200

# Comando para ejecutar la aplicación Angular
CMD ["ng", "serve", "--host", "0.0.0.0"]