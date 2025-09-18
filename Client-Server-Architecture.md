# Client - Server - Architecture (Class 02 - 17-09-2025)

> **Client** - Anything which user operates and connect with Internet

> **Server** - A computer system which is programmed to respone the request recieved and serve files and data.

* Client -> can only initiate request
* Server -> can read the request process and respond to it accordingly

## HTTP - Hyper Text Transfer Protocol

REQUEST -> PROCESSING -> RESPONSE -> RENDER

> WHAT HAPPENS WHEN YOU REQUEST TO A WEBSITE

1. Step 1 -> Checking Cache memory (Whether the requested website data already present in cache or not)
2. Step 2 -> If the data in cache present Web Browser will Load it fast if not then it will be forwarded to DNS for searching the IP in order to get data and render back it to the user

---

## Work Flow how It Works

```
URL -> CACHE -> DNS LOOKUP -> REQUEST TO SERVER -> SERVER PROCESSING THE REQUEST -> http RESPONSE -> BROWSER RENDER THE PAGE AT END
```


* Static Website -> Content same for everyone who visits
* Dynamic Website -> Content of Dynamic Website change according to the user, demographic etc, Dynamic websites are interactive also we can read and write.

> Process

* You upload your website files to hosting server
*  Server stays online 24 * 7
* When someone types your domain , request goes to that hosting server