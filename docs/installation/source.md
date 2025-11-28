# Building from source

As an alternative to using binary packages, you can build from source.

LibreUno supports only one method of building for different platoforms for now below.

All package builds begin with these steps:

1. Clone the repository.

    ```sh
    git clone https://github.com/libreuno/libreuno
    cd libreuno 
    ```

2. Make sure you have these dependencies.
    - Java JDK 17+
    - Maven 3.6+
    - Docker
    - Docker-compose

3. Add .env file at the root of the project directory

    ```
    SPRING_DATASOURCE_URL=jdbc:postgres://localhost:5432/mediavault
    SPRING_DATASOURCE_USERNAME=admin
    SPRING_DATASOURCE_PASSWORD=admin
    ```

4. Add application.properties file to /src/main/resources

    ```
    server.port=8080
    server.address=0.0.0.0

    spring.config.import=optional:file:.env[.properties]

    spring.datasource.url=jdbc:postgres://localhost:5432/mediavault
    spring.datasource.username=admin
    spring.datasource.password=admin
    spring.datasource.driver-class-name=org.postgresql.Driver

    spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true

    logging.level.org.springframework.security=DEBUG
    ```

5. Run the build script.

    ```sh
    ./build.sh
    ```


Great! Now your source is compiled and running in a local docker container!

:::caution

These specific steps are designed to be built for WSL Ubuntu on Windows.

For now this is the only way to build the app and run it. In the future, there will be multiple ways to build from source for different systems along with multiple system specific binaries.

:::

