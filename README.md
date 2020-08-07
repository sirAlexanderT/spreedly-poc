# spreedly-poc project

This project uses Quarkus, the Supersonic Subatomic Java Framework.

If you want to learn more about Quarkus, please visit its website: https://quarkus.io/ .

And Includes a React app for the front-end

## Running the application in dev mode - Frontend (React)

```
cd src/main/webapp

npm run start
```

## Running the application in dev mode - Backend

You can run your application in dev mode that enables live coding using:
```
./mvnw clean compile quarkus:dev
```



## Packaging and running the application

The application can be packaged using `./mvnw package`.
It produces the `spreedly-poc-0.0.1-runner.jar` file in the `/target` directory.
Be aware that it’s not an _über-jar_ as the dependencies are copied into the `target/lib` directory.

The application is now runnable using `java -jar target/spreedly-poc-0.0.1-runner.jar`.

## Creating a native executable

You can create a native executable using: `./mvnw package -Pnative`.

Or, if you don't have GraalVM installed, you can run the native executable build in a container using: `./mvnw package -Pnative -Dquarkus.native.container-build=true`.

You can then execute your native executable with: `./target/spreedly-poc-0.0.1-runner`

If you want to learn more about building native executables, please consult https://quarkus.io/guides/building-native-image.

## Access Application - Local Environment

Once built, Application can be accessed via `localhost:8085`