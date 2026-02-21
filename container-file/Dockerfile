FROM image-registry.openshift-image-registry.svc:5000/openshift/ubi9-micro:latest

WORKDIR /opt/app-root

COPY postal-1.0 /opt/app-root/postal-1.0

RUN chmod +x /opt/app-root/postal-1.0

EXPOSE 8080

USER 1001

CMD ["/opt/app-root/postal-1.0"]
