with import <nixpkgs> {};
let
    jdk10 = openjdk10;
    mvn = maven.override { jdk = jdk10; };
in
stdenv.mkDerivation {
        name = "java-sandbox";
        JAVA_HOME="${jdk9}/lib/openjdk";
        buildInputs = [
                jdk10
                mvn
                gradle
        ];
    }
