# Internet Protocols

* TCP - Transmission Control Protocol
* UDP - User Datagram Protocol

> We request a url and we receieve the respone which is rendered in our browser this whole process happens with http protocol

> http is a set of rules that enables communication between client and server

> In windows http, TCP, UDP, IP all protocols are pre-installed within OS Network section

```
TCP Makes Sure data is recevied by the user it means it is verify data transmission and keeps record of it whether the data sucessfully received by client or not 
```

### Anything is sent on internet HTTP will be followed
### Live stream data transmit with HTTP + UDP
### Recorded stream data transmit with HTTP + TCP

---

> How Connection is established using 3Way handshake.

```
* Step 1 - SYN (synchronization) - syn sent from server to client
* Step 2 - SYN - ACK (Synchronization Acknowledgement) - client will send back Syn Ack to server
* Step 3 - ACK - ack will be sent from server to client (Connection Established successfully)
```

* syn sent from server client recieves it
* syn ack as acknowlegment sent from client to server that i received the syn
* server sends ack that it was our 3 handshake completed and secure connection established successfully

## Games like BGMI PUBG YOUTUBE LIVESTREAM etc are build on HTTP + UDP thats the reason if we see lag the previous frame skipped and we move on into the current frame because udp keeps sending data he doesn't check whether you received the data or not it will keep sending.

> If any data is missed in between UDP doesn't care about it

* Three Way Handshake in TCP performed once during connection building and untill the connection is live it is on

1. UDP 
    * UDP is connection less (UDP keeps transmiting data without connection building)
    * It is used for fast communication
    * No Acknowledment needed even if you miss some of the data in between udp doesn't care
    * If any data  lost in between , particular data will be lost ( no resend of lost data)
    * EX- PUBG , BGMI, Live Cricket Match, Voice call

2. TCP 
    * TCP Builds Connection first (Acknowledgement needed)
    * TCP confirms the data should be delievred to the client
    * TCP perform 3Way handshake to build secure connection so that every single data do not get missed
    * TCP is slower then UDP
    * YouTube recorded video, Social media story post, Downloadin any thing 