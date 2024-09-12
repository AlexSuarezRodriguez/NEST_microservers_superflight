# Proyecto de Microservicios con NestJS

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

Este proyecto es una aplicación de microservicios construida con **NestJS**. Utiliza **MongoDB** para la gestión de bases de datos y **RabbitMQ** para la comunicación asíncrona entre servicios. Los contenedores están desplegados en **Docker Hub** y la aplicación se ejecuta en un entorno de producción utilizando **AWS EC2**.

## Características

- **Microservicios**: Arquitectura basada en microservicios para una escalabilidad y mantenimiento más eficientes.
- **MongoDB**: Base de datos NoSQL para almacenar datos.
- **RabbitMQ**: Sistema de mensajería para la comunicación entre microservicios.
- **Docker**: Contenerización de servicios para un despliegue y gestión eficientes.
- **AWS EC2**: Entorno de despliegue en la nube para ejecución de microservicios.

## Tecnologías Utilizadas

- **NestJS**: Framework para construir aplicaciones del lado del servidor con Node.js.
- **MongoDB**: Base de datos NoSQL para almacenamiento de datos.
- **RabbitMQ**: Sistema de mensajería para la comunicación entre microservicios.
- **Docker**: Contenerización para el despliegue y ejecución de servicios.
- **AWS EC2**: Plataforma en la nube para el despliegue de aplicaciones.

## Instalación

### Requisitos

Asegúrate de tener instalados **Docker** y **Docker Compose** en tu máquina. Si no los tienes, puedes instalar Docker desde [aquí](https://docs.docker.com/get-docker/).