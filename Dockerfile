# Use ROS2 Jazzy as base image
FROM ros:jazzy-ros-core

# Set shell to bash
SHELL ["/bin/bash", "-c"]

# Set environment variables
ENV ROS_DISTRO=jazzy
ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies via APT
RUN apt-get update && apt-get install -y \
    python3-colcon-common-extensions \
    python3-tornado \
    python3-pil \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Create a workspace
WORKDIR /ros2_ws

# Copy the package from the host to the container
COPY . .

# Build
RUN source /opt/ros/${ROS_DISTRO}/setup.bash \
    && colcon build --symlink-install

# Source the package
RUN echo "source /opt/ros/${ROS_DISTRO}/setup.bash" >> /root/.bashrc
RUN echo "source /ros2_ws/install/setup.bash" >> /root/.bashrc

# Entrypoint script
COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["bash"]