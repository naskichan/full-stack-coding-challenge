Frontend
========

Prerequisites
-------------

* [Git](http://git-scm.com/)
* [npm](https://www.npmjs.org/)

Coding Language:
* Javascript/Typescript (framework of your choice)

* You can use any additional libraries you want.


Project description
-------------------

We want to develop a small web app that allows users to order pizza.

This client will interface with the API built in the backend portion of the challenge.

First of all we'll display the list of pizzas with ingredients and prices. Data will be loaded from `/api/pizzas`.

When the user chooses something from the list the order summary will update dynamically.

There will be a button to confirm the order. An ajax call (POST) will be performed to `/api/orders` and the result will be displayed as a message like this: "Your order is confirmed. Order summary: ...".

Optional:
* Show all orders. Ajax call (GET) to `/api/orders`
