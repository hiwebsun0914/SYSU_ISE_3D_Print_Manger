FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive

COPY deploy/online_slicer/keys/ubuntu-archive-2018.gpg /usr/share/keyrings/ubuntu-archive-2018.gpg

ARG SLICER_APPIMAGE_URL=https://github.com/bambulab/BambuStudio/releases/download/v02.05.00.67/Bambu_Studio_linux_fedora-v02.05.00.66.AppImage
ARG SLICER_BIN_NAME=BambuStudio
ARG SLICER_APP_DIR=BambuStudio

RUN mkdir -p /tmp/hicolor-icon-theme/DEBIAN /tmp/hicolor-icon-theme/usr/share/icons/hicolor \
    && printf 'Package: hicolor-icon-theme\nVersion: 0.17-2\nSection: x11\nPriority: optional\nArchitecture: all\nMaintainer: Bambuddy <noreply@example.com>\nDescription: Minimal placeholder hicolor icon theme for headless online slicer containers\n' > /tmp/hicolor-icon-theme/DEBIAN/control \
    && printf '[Icon Theme]\nName=Hicolor\nComment=Fallback icon theme\nDirectories=\nHidden=true\n' > /tmp/hicolor-icon-theme/usr/share/icons/hicolor/index.theme \
    && dpkg-deb --build /tmp/hicolor-icon-theme /tmp/hicolor-icon-theme.deb \
    && dpkg -i /tmp/hicolor-icon-theme.deb \
    && rm -rf /tmp/hicolor-icon-theme /tmp/hicolor-icon-theme.deb \
    && sed -i 's|Signed-By: /usr/share/keyrings/ubuntu-archive-keyring.gpg|Signed-By: /usr/share/keyrings/ubuntu-archive-2018.gpg|g' /etc/apt/sources.list.d/ubuntu.sources \
    && (apt-get -o Acquire::AllowInsecureRepositories=true -o Acquire::AllowDowngradeToInsecureRepositories=true update || true) \
    && apt-get install -y --allow-unauthenticated --no-install-recommends \
    ca-certificates \
    curl \
    libasound2t64 \
    libdbus-1-3 \
    libegl1 \
    libgbm1 \
    libgtk-3-0 \
    libnss3 \
    libopengl0 \
    libxdamage1 \
    libxfixes3 \
    libxi6 \
    libxkbcommon0 \
    libxrandr2 \
    libxss1 \
    libxtst6 \
    novnc \
    openbox \
    procps \
    python3 \
    websockify \
    x11vnc \
    xdg-utils \
    xvfb \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL "${SLICER_APPIMAGE_URL}" -o /tmp/online-slicer.AppImage \
    && chmod +x /tmp/online-slicer.AppImage \
    && mkdir -p /opt \
    && cd /opt \
    && /tmp/online-slicer.AppImage --appimage-extract >/tmp/online_slicer_extract.log 2>&1 \
    && mv /opt/squashfs-root "/opt/${SLICER_APP_DIR}" \
    && ln -s "/opt/${SLICER_APP_DIR}/AppRun" "/usr/local/bin/${SLICER_BIN_NAME}" \
    && rm -f /tmp/online-slicer.AppImage

COPY deploy/online_slicer/entrypoint.sh /usr/local/bin/online-slicer-entrypoint.sh
COPY deploy/online_slicer/session_watcher.py /usr/local/bin/session_watcher.py

RUN chmod +x /usr/local/bin/online-slicer-entrypoint.sh /usr/local/bin/session_watcher.py

ENV ONLINE_SLICER_WORKSPACE=/workspace/bambuddy
ENV ONLINE_SLICER_BIN=/usr/local/bin/BambuStudio
ENV ONLINE_SLICER_NAME=BambuStudio
ENV BAMBU_STUDIO_BIN=/usr/local/bin/BambuStudio
ENV QT_X11_NO_MITSHM=1

EXPOSE 5900
EXPOSE 6080

CMD ["/usr/local/bin/online-slicer-entrypoint.sh"]
