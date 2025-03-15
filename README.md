# ROSboard (rayz224's fork)

## My changes

- Dockerized the project
- Added support for changing the layout (moving panels)
  - Added support for saving and loading custom layouts
- Added support for resizing panels
- Added support for visualizing long string messages

## Usage as a docker image

Add the docker compose file/container to your project and run it with:

```bash
docker-compose up -d
```

The container will be available at `http://localhost:8080`.

## To build the image

```bash
docker build -t rayz224/rosboard .
```

For multi-platform builds, use:

```bash
docker build -t rayz224/rosboard . --platform linux/amd64, linux/arm64
```

# Original README

ROS node that runs a web server on your robot.
Run the node, point your web browser at http://your-robot-ip:8888/ and you get nice visualizations.

**ROS1/ROS2 compatible.** This package will work in either ROS version.

**Mobile friendly.** Designed so you can walk around next to your robot with a phone while viewing ROS topics.

**Light weight.** Doesn't depending on much. Consumes extremely little resources when it's not actually being used.

**Easily extensible.** Easily code a visualization for a custom type by only adding only one .js file [here](https://github.com/dheera/rosboard/tree/main/rosboard/html/js/viewers) and referncing it inside the top of [index.js](https://github.com/dheera/rosboard/blob/main/rosboard/html/js/index.js).


![screenshot](/screenshots/screenshot5.jpg?raw=true "screenshot")

### See the rest of the original README here : [ROSBoard](https://github.com/dheera/ROSBoard)

## Credits

This project makes use of a number of open-source libraries which the author is extremely grateful of.

- [ROSBoard](https://github.com/dheera/ROSBoard):
  The main ROSBoard application
  Copyright (C) Dheera Venkatraman
  BSD 3-Clause License

- [Tornado](https://www.tornadoweb.org/): Used as a web server and web socket server.
  Copyright (C) The Tornado Authors
  Apache 2.0 License

- [simplejpeg](https://gitlab.com/jfolz/simplejpeg): Used for encoding and decoding JPEG format.
  Copyright (C) Joachim Folz
  MIT License

- [psutil](https://github.com/giampaolo/psutil) - Used for monitoring system resource utilization.
  Copyright (C) Giampaolo Rodola
  BSD 3-clause license

- [Masonry](https://masonry.desandro.com/): Used for laying out cards on the page.
  Copyright (C) David DeSandro
  MIT License

- [Leaflet.js](https://github.com/Leaflet/Leaflet): Used for rendering sensor_msgs/NavSatFix messages.
  Copyright (C) Vladimir Agafonkin
  CloudMade, BSD 2-clause license

- [Material Design Lite](https://getmdl.io/) - Used for general UI theming and widgets of the web-based client.
  Copyright (C) Google, Inc.
  Apache 2.0 License

- [jQuery](https://jquery.com/) - Used for client-side DOM manipulation.
  Copyright (C) OpenJS Foundation
  MIT License

- [litegl.js](https://github.com/jagenjo/litegl.js?files=1) - Used as a wrapper for the WebGL API for 3D visualizations.
  Copyright (C) Evan Wallace, Javi Agenjo
  MIT License

- [glMatrix](https://github.com/toji/gl-matrix) - For Matrix manipulations for 3D visualizations.
  Copyright (C) Brandon Jones, Colin MacKenzie IV.
  MIT License

- [rosbag.js](https://github.com/cruise-automation/rosbag.js/) - Used for reading ROS 1 .bag files.
  Copyright (C) Cruise Automation
  MIT License

- [uPlot](https://github.com/leeoniya/uPlot) - Used for all time-series plots.
  Copyright (C) Leon Sorokin
  MIT License

- [JSON5](https://github.com/json5/json5) - Used for encoding/decoding JSON5 messages.
  Copyright (C) Aseem Kishore, and others.
  MIT License

- [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono) - Used for all fixed-width text in the web UI.
  Copyright (C) The JetBrains Mono Project Authors
  SIL Open Font License 1.1

- [Titillium Web](https://fonts.google.com/specimen/Titillium+Web) - Used for all variable-width text in the web UI.
  Copyright (C) Accademia di Belle Arti di Urbino and students of MA course of Visual design
  SIL Open Font License 1.1
