with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "typescript-sandbox";
  buildInputs = [
    pkgs.nodejs-8_x
  ];
}
