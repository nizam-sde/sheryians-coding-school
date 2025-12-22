# How Browsers Actually Talks To Servers Using HTTP & HTTPs & Make Web Secure

01. What is HTTP?

- Http Protocol are set of rules which is  pre-installed in every OS or device which uses internet.
- Http rules is a bridge between client and server to talk to each other and exchange data.

## HTTP Version
    1.0 - Slow  - Each request opens a new connection (Headers, status code, content type can be shared)

    1.1 - Fast  - Supports chunked transfer, caching, pipelining (Persistent connections (keep-alive))

    2.0 - Faster - Multiple requests on one connection (Binary protocol) Header compression, server push

    3.0 - Fastest - Uses QUIC (built on UDP, not TCP) Faster, more secure, better for mobile,  Reduced latency and connection times

## Features Ans Version Details

| Features               | HTTP 1.1         | HTTP 2   | HTTP 3       |
|------------------------|------------------|----------|--------------|
|Year Introduced on      | 1997             | 2015     | 2022
| Transport Protocol     | TCP              | TCP      | QUIC (UDP)   |
| Multiplexing           | X (pipelining)   | Y        | Y            |
| Speed                  | Moderate         | Faster   | Fastest      |
| Server Push            | X                | Y        | Y            |
| Header Compression     | X                | Y (HPACK)| Y (QPACK)    |
| Connection Reuse       | Y                | Y        | Y            |

---

**HTTP Status Code**

* 200       ✅       SUCCESS
* 301       🔀      REDIRECT
* 404       ❌      NOT FOUND
* 500       💥      SERVER ERROR

> when we request anything from server then along with response a status code is sent it helps to know the actual status whether the request was successful, surver error or something else

## Why HTTPS?
> Hyper Text Transfer Protocol Secured
> Https helps to establish secured connection between client and server using Encryption
> in http man-in-the-middle (MIM) attack was possible but in https it is not possible due to data encrypt


## How HTTPS Secure Data
* SSL /TLS Encryption (By Default in HTTPS)
* 3Way Handshake = Shared Key (Client Server only)
* Safe Tunnel

```
Shared Key works like client given a key ABC and server given a key DEFG they combine both key and make a shared key with it BCD so now when ever any request response takes place along with the response BCD will be attached and thats how they securely share data as well as know the authenticity that data is going and coming from the actual client and server no hacker or data leak involved it all happend on the basis of https based rule
```

# Proxy VS Reverse Proxy VS VPN

* Proxy - (Acts like a middle man between you and internet)
    * Your device → 🖥️ → asks the proxy → 🧍‍♂️ → the proxy talks to the website → 🌐
    * The website sends the info back to the proxy, and the proxy gives it to you.
    * Proxy works only in the single browser where the proxy is configured
    * Proxy Client Side ( Hides User )

* VPN - Virtual Private Network
    * vpn provides you a server(As per you choosed region) through wchich you explore internet
    * VPN works in the Device where the VPN is configured
    * Encrypt all traffic
    * Access Blocked Sites

* Reverse Proxy - (Act like Receptionist)
    * It sits in front of the real server and handles requests coming in from the internet.
    * it manages Load balancing, SSL offloading, Caching, Firewall & Security, Hides real servers from attackers
    * Reverse Proxy Server Side ( Hides Server)