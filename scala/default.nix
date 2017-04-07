with import <nixpkgs> {};
{
    javaEnv = stdenv.mkDerivation {
        name = "scala-sandbox";
        buildInputs = [
            pkgs.openjdk
            pkgs.scala
            pkgs.sbt
        ];
    };
}
