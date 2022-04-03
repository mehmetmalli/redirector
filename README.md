# Redirector

## What is this ?
A small Node.js app that redirects requests to predetermined URLs.

Uses [`express`](https://expressjs.com/) and [`Realm`](https://realm.io).

## How do I use it ?
Send a `POST` request to `/create` endpoint with the body below to create a new redirect.

```js
{
  "key": "me", // The key to use for redirection (https://<baseURL>/<key>)
  "target": "https://mehmetmalli.com.tr" // The target URL for redirection
}
```
Send a `GET` request to `/<key>` endpoint to be redirected to the target URL.
