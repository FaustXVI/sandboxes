with import <nixpkgs> {};
let
    jdk = openjdk12;
    mvn = maven.override { jdk  = jdk; };
in
stdenv.mkDerivation {
        name = "java-sandbox";
        JAVA_HOME="${jdk}/lib/openjdk";
        buildInputs = [
                jdk
                mvn
        ];
    }
