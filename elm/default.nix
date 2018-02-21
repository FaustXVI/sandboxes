with import <nixpkgs> {};
stdenv.mkDerivation {
    name = "elm-sandbox";
    buildInputs = [
        elmPackages.elm
    ];
}
