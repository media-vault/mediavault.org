# Building from source

As an alternative to using binary packages, you can build from source.

MediaVault supports only one method of building for different platoforms for now below.

All package builds begin with these steps:

1. Clone the repository.

    ```sh
    git clone https://github.com/media-vault/mediavault
    cd mediavault
    ```

2. Make sure you have these dependencies.
    - Java JDK 17+
    - Maven 3.6+
    - Docker
    - Docker-compose


3. Run the build script.

    ```sh
    ./build.sh
    ```


Great! Now your source is compiled and running in a local docker container!

:::caution

These specific steps are designed to be built for WSL Ubuntu on Windows.

For now this is the only way to build the app and run it. In the future, there will be multiple ways to build from source for different systems along with multiple system specific binaries.

:::

