# There are 2 types of tags in HTML
* ` Opening & Closing Tag - <h1></h1>, <p></p> , <div> </div> etc... `
* ` Self Closing Tag - <img> , <br> , <input>  etc... `

# Tags

- Image Tag
` <img height = "300" src = "img.jpg" alt = "Panda"> ` its always recommended to add height media files in html from preventing CLS(Cumalative Layout Shift)

- Video Tag
` <video height = "200" controls autoplay loop muted src = "video.mp4"></video> ` 

- Audio Tag
` <audio controls src = "audio.mp3"></audio> ` 

- Iframe Tag
` <iframe src = "https://sheryians.com" frameborder = "0"></iframe> `

---

- Form Tag
```
<form action = "get">
    <input type = "text">
    <input type = "password" placeholder = "Enter Password">
    <input required type = "email">
    <input type = "datetime-local">

    <input id = "check" type = "text">
    <label for = "check"> Agree to T&c </label>
    due to label for if we select on the label still the checkbox will be selected

    <input type = "color">
    <input type = "number">

    <input name = "gender" type = "radio"> MALE
    <input name = "gender" type = "radio"> FEMALE
    name attribute helps to choose only one input from the 2 options

    <button>  Submit  <button>
</form>

```
---

- Details Tag

```
    <details>
        <summary>
            <ul>
                <li>  HTML  <li>
                <li>  CSS  <li>
                <li>  JavaScript  <li>
            </ul>
        </summary>
    </details>

```

---


# For Stock Images & Videos -       pixabey, pixels

> meta:desc , meta:keywords, meta:redirect , 
meta property = "og:site_name" content = "site-link" when anyone share this will seen in link hover