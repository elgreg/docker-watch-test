Docker Watch Test
-----------------

The [commit log](https://github.com/slategroup/docker-watch-test/commits/master) here is probably the thing to look at. I went through adding one file at a time and looking at `docker stats` and `top` on OS X to figure out what was spiking CPU. As of 1.12.0 it was the number of watched files. Adding more files added more CPU. As of Docker for Mac 17.03.1-ce-mac5 it appears to be resolved.

This was done with docker for mac 1.12.0

To test gulp

```
cd gulp
docker build  .
# optionally name it with docker build -t gulper .
cd ../
docker run -it -P -v `pwd`:/code gulper "/bin/bash"

# now you're inside the container
mv /node_modules /code/gulp/node_modules
cd /code/gulp/
gulp watch
```

Open up Activity monitor on your mac and look at hyperkit CPU

Also run docker stats in another window to see it change.


