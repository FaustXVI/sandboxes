with import <nixpkgs> {};
stdenv.mkDerivation {
    name = "elm-sandbox";
    buildInputs = [
        pkgs.elmPackages.elm
    ];
}
