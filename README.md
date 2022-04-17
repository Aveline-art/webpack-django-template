# webpack-django-template

A template that uses webpack to compile frontend code into Django template and src files.

## Installation Instructions

Before starting the instructions below, please make sure you have [Node.js](https://nodejs.org/en/download/) and [Python](https://www.python.org/downloads/) installed. To check, type `npm -v` and `python --version` in your terminal window to check for Node.js and Python respectively.

1. Run `npm install` to install all npm dependencies.

2. Run `num run watch` to watch files.

3. (optional) Start a Python venv with `python -m venv env`.

4. Run `pip install requirements.txt` to install all pip dependencies.

5. Run `python manage.py runserver` to start the Django server.

6. Visit `127.0.0.1:8000` to see the Django development server. Also visit the `/test` endpoint to see a different view.

## Resources

[Webpack Concepts](https://webpack.js.org/concepts/)<br>
[Django documentation](https://docs.djangoproject.com/en/4.0/)<br>
[HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)<br>
[jantimon/html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)<br>
