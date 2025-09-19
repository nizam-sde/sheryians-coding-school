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