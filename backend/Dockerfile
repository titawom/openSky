# Utilizamos una imagen oficial de PHP 8.1 como imagen base
FROM php:8.1-apache

# Instalamos los paquetes necesarios
RUN apt-get update && apt-get install -y \
    git \ 
    curl \
    vim \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Configuramos los módulos de PHP
RUN docker-php-ext-install pdo pdo_mysql

# Habilita mod_rewrite
RUN a2enmod rewrite

# Establecemos la raíz web de Apache en el directorio público del proyecto
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf
ENV APACHE_DOCUMENT_ROOT /var/www/html/public

# Copiamos nuestra aplicación a la carpeta de trabajo del contenedor
COPY . /var/www/html/

# Establecemos la carpeta de trabajo
WORKDIR /var/www/html/

# Ejecutamos los comandos necesarios para instalar las dependencias de PHP y ejecutar nuestro proyecto
RUN curl -sS https://getcomposer.org/installer | php \
    && php composer.phar install \
    && chown -R www-data:www-data /var/www/html \
    && chmod -R 777 /var/www/html/var

# Exponemos el puerto 80 para el tráfico HTTP
EXPOSE 80

# Iniciamos el servidor Apache en primer plano
CMD ["apache2-foreground"]