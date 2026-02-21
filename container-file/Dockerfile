FROM ubi9-micro:latest 

ARG ARTIFACT_URL

WORKDIR /opt/app-root

# Download the application binary during build
RUN curl -L ${ARTIFACT_URL} -o /opt/app-root/postal-1.0 \
    && chmod +x /opt/app-root/postal-1.0

EXPOSE 8080

USER 1001

CMD ["/opt/app-root/postal-1.0"]
