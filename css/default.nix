with import <nixpkgs> {}; {
    nodeEnv = stdenv.mkDerivation {
        name = "css-sandbox";
        buildInputs = [
            pkgs.nodejs
        ];
    };
}
