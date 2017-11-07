with import <nixpkgs> {};
let
    jdk9 = openjdk9;
    mvn = maven.override { jdk = jdk9; };
in
stdenv.mkDerivation {
        name = "java-sandbox";
        JAVA_HOME="${jdk9}/lib/openjdk";
        buildInputs = [
                jdk9
                mvn
                gradle
        ];
    }
