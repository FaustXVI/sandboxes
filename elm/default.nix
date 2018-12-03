with import <nixpkgs> {};
stdenv.mkDerivation {
    name = "elm-sandbox";
    buildInputs = [
            nodejs
   ];
}
