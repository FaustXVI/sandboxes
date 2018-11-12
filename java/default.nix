with import <nixpkgs> {};
let
    mvn = maven.override { jdk = jdk11; };
in
stdenv.mkDerivation {
        name = "java-sandbox";
        JAVA_HOME="${jdk11}/lib/openjdk";
        buildInputs = [
                jdk11
                mvn
                gradle
        ];
    }
