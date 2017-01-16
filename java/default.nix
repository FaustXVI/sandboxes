with import <nixpkgs> {};
{
    javaEnv = stdenv.mkDerivation {
        name = "java-sandbox";
        buildInputs = [
            pkgs.openjdk
                pkgs.maven
                pkgs.gradle
        ];
    };
}
