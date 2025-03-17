"use strict";

class ArucoMarkersViewer extends GeometryViewer {
    /**
     * Called when the viewer is first created.
     * Creates two sub-containers and instantiates child viewers.
     */
    onCreate() {
        this.viewerNodeFadeTimeout = null;
        this.meaningsNode = $('<div></div>')
            .css({'font-size': '11pt', 'margin-bottom': '10pt'})
            .appendTo(this.card.content);

        this.meanings = [];
        this.currentMarker = "";

        super.onCreate();
    }

    onData(data) {
        const dataMeanings = data.meanings;

        // Remove outdated meanings
        this.meanings.forEach((meaning, index) => {
            if (!Object.values(dataMeanings).includes(meaning)) {
                this.meaningsNode.find(`button:contains('${meaning}')`).remove();
                this.meanings.splice(index, 1);
            }
        });

        // Add any new meanings
        for (const meaning of dataMeanings) {
            if (this.meanings.includes(meaning)) continue;

            let button = $("<button></button>")
                .addClass(
                    "meaning-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                )
                .text(meaning)
                .on("click", (event) => {
                    $(event.currentTarget).blur();
                    this.meaningsNode.find("button").removeClass("selected");
                    $(event.currentTarget).addClass("selected");

                    super.resetHistory();
                    this.currentMarker = meaning;
                });
            this.meaningsNode.append(button);
            this.meanings.push(meaning);

            // Auto-select the first meaning if none is selected.
            if (this.meanings.length === 1) {
                this.meaningsNode.find("button").first().addClass("selected");
                super.resetHistory();
                this.currentMarker = meaning;
            }
        }

        // Determine the current marker index. (if the current marker is not in the list anymore, reset to 0)
        let currentIndex = dataMeanings.indexOf(this.currentMarker);
        if (currentIndex == -1) {
            this.meaningsNode.find("button").first().addClass("selected");
            super.resetHistory();
            this.currentMarker = dataMeanings[0];
            currentIndex = 0;
        }

        // Pass the pose data to the geometry viewer.
        if (data.pose && data.pose[currentIndex]) {
            const pose = data.pose[currentIndex];
            const poseData = {
                _topic_name: data._topic_name,
                _topic_type: `${data._topic_type}/Pose`,
                position: pose.position,
                orientation: pose.orientation,
            };

            super.onData(poseData);
        }
    }
}

ArucoMarkersViewer.friendlyName = "Aruco Markers";
ArucoMarkersViewer.supportedTypes = ["customs/msg/ArucoMarkers"];

Viewer.registerViewer(ArucoMarkersViewer);
