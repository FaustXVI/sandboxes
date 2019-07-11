with import <nixos> {};
stdenv.mkDerivation {
  name = "secu";
  buildInputs = [
    nmap
    pngcheck
    openjdk
  ];
}
