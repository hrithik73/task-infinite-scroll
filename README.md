## Infinite Scrolling Task

### Features

- Infinte Scrolling
- Use download_url Key for Cell Item Thumbnail
- Show Both Image and Author Name
- Wherever user stops for more than 5 seconds in last 2 cell item of the list, Write "I am the chosen one" + "Value of ID" underneath Author Name
  - Click on Detailed view of Image and show it In Another screen (DETAILED API)
    - Step 1: Open Detail view opens right away with download_Url value received from List Image
    - Step 2: Call Detailed API and Replace placeholder image with url key image (Only after calling Detailed API, not from List Images API)
- Click back to Go back on List screen

### Rules/Conventions to follow

- Write loosely coupled code so that it's scalable and robust (Use Architecture i.e. MVVM or MVC as being guided in Training).
- Use design patterns, Solid patterns, Abstraction, Encapsulation and other good concepts of computer science
- Do not use any external library for even single line of code
- Make a web page using html5 and sass only (Optional for Web)
- Do not use Media Query or Bootstrap (Optional for Web)
- Extra marks for reusability of HTML, CSS (Optional for Web)

### APIs

### List Images

Get a list of images by using the `/v2/list` endpoint.

```
https://picsum.photos/v2/list

```

The API will return 30 items per page by default.
To request another page, use the ?page parameter.
To change the amount of items per page, use the ?limit parameter.

```
https://picsum.photos/v2/list?page=2&limit=100

```

#### Image Details

Get information about a specific image by using the `/id/{id}/info` endpoint.

```
https://picsum.photos/id/0/info

```

## Please don't judge my design skill :)
