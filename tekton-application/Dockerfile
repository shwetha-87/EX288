FROM registry.domain1.example.com/ubi9/openjdk-17:latest

WORKDIR /app

COPY target/employee-backend-1.0.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","/app/app.jar"]
