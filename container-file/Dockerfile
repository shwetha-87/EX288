#FROM ubi-micro 

ARG ARTIFACT_URL=https://incorrect-url

WORKDIR /opt/app-root

# Download the application binary during build
ADD ${ARTIFACT_URL} /opt/app-root/postal-1.0 

RUN chmod +x /opt/app-root/postal-1.0

EXPOSE 8080

USER 1001

CMD ["/opt/app-root/postal-1.0"]
