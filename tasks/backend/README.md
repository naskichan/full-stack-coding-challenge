Backend
=======

Prerequisites
-------------

* [Git](http://git-scm.com/)

Optional:
* [MySQL](https://www.mysql.com/)

Option one
* [nodejs](https://nodejs.org/en/)
* nodejs framework of your choice

Option two
* [PHP](https://www.php.net)
* PHP framework of your choice


* You can use any additional libraries you want.

Project description
-------------------

**Pizzeria**

This application serves the purpose of exposing a JSON API to be consumed by a frontend client for ordering pizza.

The following endpoints should return a JSON response:
* POST `/api/orders` (just returns posted order, no persistance)
* GET `/api/pizzas` (list of pizzas; see './backend/example-pizzas.json')

Optional:
* MySQL Setup with docker-compose (https://hub.docker.com/_/mysql)

The following entities should be created (including proper relations):

* *pizza* - has a name and price (e.g. Margherita $5, Pepperoni $6, ...)
* *order* - has items
* *order item* - has a pizza and quantity

The following endpoints should return a JSON response:
* POST `/api/orders` (persist to database)
* GET `/api/orders` (list of orders)
