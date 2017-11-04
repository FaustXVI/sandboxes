with import <nixpkgs> {};
{
    javaEnv = stdenv.mkDerivation {
        name = "kotlin-sandbox";
        buildInputs = [
                pkgs.openjdk9
                pkgs.maven
                pkgs.gradle
        ];
    };
}
