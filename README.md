# Manipulating Images Microservice (MIMS)
A microservice API to process images using Node.js (although you shouldn't really use Node for processing images).
This microservice uses about 300mb of ram when starting out and can be up to 600mb or more due to the number of requests you have.
A default of 10 worker threads is created. You may need fewer or more depending on your use case. If that's the case then you must specify that when running
docker by inputting a number. Example (in the dockerfile): `CMD ["node", "index.js", "20"]` will spawn 20 worker threads.

If your node version is less than 11.5 you must use `node --experimental-worker index.js`

#### This microservice mainly uses:
`Jimp@latest` \
`node-canvas@latest` \
`Sharp@latest`

___

### Installation
To install docker on linux: `curl -sSL https://get.docker.com/ | bash`
Otherwise, look it up.

To build and run it I do something like so: \
`docker build -t image_mims .` \
`docker run -d -p 9002:9002 --name container_mims image_mims`

___

### How To Use
To use this microservice you must make a POST request to the provided endpoints and make sure you have
the correct `args` provided. In other words, look into each file under `/src/endpoints` and look at the structure.

1) The `name` is the endpoint.
2) The `filepath` is the location of the file I use to read in the buffer (you don't need to worry about this unless making your own).
3) The `args` are the list of arguments that **MUST** be met in order to process your image. Otherwise you will get a `400 bad request`.
4) You will receive back a buffer of the image if success. Otherwise error messages will be returned.

### Examples

1) The `hot` endpoint requires the `image_url`
    ```$xslt
    POST: localhost:9002/api/hot
    POST /api/hot HTTP/1.1
    Host: localhost:9002
    Content-Type: application/json
    User-Agent: PostmanRuntime/7.11.0
    Accept: */*
    Cache-Control: no-cache
    Host: localhost:9002
    cookie: ROUTEID=.2
    accept-encoding: gzip, deflate
    content-length: 82
    Connection: keep-alive
    cache-control: no-cache
    
    {"image_url": "https://pbs.twimg.com/media/DtwaeFtUwAAPbxk.jpg"}
    ```

2) The `hatkidsays` endpoint requires text
    ```$xslt
    POST: localhost:9002/api/hatkidsays
    POST /api/hatkidsays HTTP/1.1
    Host: localhost:9002
    Content-Type: application/json
    User-Agent: PostmanRuntime/7.11.0
    Accept: */*
    Cache-Control: no-cache
    Host: localhost:9002
    cookie: ROUTEID=.2
    accept-encoding: gzip, deflate
    content-length: 82
    Connection: keep-alive
    cache-control: no-cache
    
    {"text": "Make sure you brush your teeth!"}
    ```
3) The `halloweenify` endpoint requires an image url and a threshold.

    ```$xslt
    POST /api/halloweenify HTTP/1.1
    Host: localhost:9002
    Content-Type: application/json
    User-Agent: PostmanRuntime/7.11.0
    Accept: */*
    Cache-Control: no-cache
    Postman-Token: 6c8fe42a-8ec2-400c-a0d0-899c898e0dca,9c62ecfc-5172-4944-a714-0f12e6bde5af
    Host: localhost:9002
    cookie: ROUTEID=.2
    accept-encoding: gzip, deflate
    content-length: 82
    Connection: keep-alive
    cache-control: no-cache

    {"image_url": "https://pbs.twimg.com/media/DtwaeFtUwAAPbxk.jpg", "threshold": "1"}
    ```

___

## Pull Requests
If you would like to add your own fun creation, feel free to make a pull request!
My only request is to follow the current structure that is provided and make sure it the endpoint is appropriate.

___

## After thoughts: 
Don't use Jimp. Despite this microservice providing workers using Jimp, Canvas and Sharp are much faster (maybe 40% faster?).
If you have the option, use canvas. Canvas (and Sharp) do not block the thread and use an external library to process images, making it much faster.


