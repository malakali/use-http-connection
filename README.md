React hook for http-connection

 
# use-http-connection
A custom hook named useHttp  that used to create Http Connection with remote API.

# Installation


Using npm:
$ npm install --save use-http-connection

Using yarn:
$ yarn add use-http-connection


# Usage
  import useHttp from 'use-http-connection';

  Page_about[0] = 'https://testApi';

  const [isLoading, data, fetch] = useHttp(Page_about);


# Contributing

Please feel free to submit any issues or pull requests.
