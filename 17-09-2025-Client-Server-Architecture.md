# Client - Server - Architecture(Model) (Class 02 - 17-09-2025)

> **Client** - Anything which user operates and connect with Internet (Smartphone/Laptop, SmartTV, Web Browser, IOT devices etc) Client can be referred in context of device as well as software both.

> **Server** - A computer system which is programmed to responed to the request recieved and serve files and data.

```
> How overall client Server model works overview -

User🧑 > Typed in url 📱 open sheryians.com > data transmit from device in small packets form 📶 to the nearest available tower 🗼 > Tower converts it into electric signals and through cabel is reaches to ISP > ISP ask DNS to Provide IP address of the requested website > once the IP address is received with the help of routing the data request is shared with the server and response reverted in the same path to the user in order to get the requested data
```

* Client -> can only initiate request
* Server -> can read the request process and respond to it accordingly

> Server runs in a remote computer/data centers where all files and data are stored it process the request and return the response back to client

## HTTP - Hyper Text Transfer Protocol
## HTTP Request-Response Cycle - The Set of rules for Browsing Internet

HTTP Request-Response Cycle consist of 4 steps - ⬇
REQUEST -> PROCESSING -> RESPONSE -> RENDER
---

> WHAT HAPPENS WHEN YOU REQUEST TO A WEBSITE

1. Step 1 -> Checking Cache memory (Whether the requested website data already present in cache or not)
2. Step 2 -> If the data in cache present Web Browser will Load it fast if not then it will be forwarded to DNS for searching the IP in order to get data and render back it to the user


when we search anything in web browser url browser sends a http request to the server
Server sends a http response with html css js and media files along with
Browser render the data and files received and show it to the user
---

## Work Flow how It Works

```
URL -> CACHE -> DNS LOOKUP -> REQUEST TO SERVER -> SERVER PROCESSING THE REQUEST -> http RESPONSE -> BROWSER RENDER THE PAGE AT END
```
## What Is FrontEnd
> Websites's UI which is visible to the user where he can interact with button form, text etc

## What is Backend(Server-Side)
> Server where we handel logic, scripting, Business logics along with database it is not visible to the client

* Static Website -> Content same for everyone who visits (wikipedia, Quora)
* Dynamic Website -> Content of Dynamic Website changes according to the user, demographic etc, Dynamic websites are interactive also we can read and write also media is introduced in dynamic websites. (facebook, flipkart)

# Web Hosting
> Service where your website lives on a server so that anyone can access it
> Hosting companies provides you space on rental basis to serve your website

> Process

* You upload your website files to hosting server
* Server stays online 24 * 7
* When someone types your domain , request goes to that hosting server
* Server deliver your files / data - > websites loads it on their browsers