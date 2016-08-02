Docker Watch Test
-----------------

The [commit log](https://github.com/slategroup/docker-watch-test/commits/master) here is probably the thing to look at. I went through adding one file at a time and looking at `docker stats` and `top` on OS X to figure out what was spiking CPU. Right now it looks like it's the number of wathched files.

This was done with docerk for mac 1.12.0