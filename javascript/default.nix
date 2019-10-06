with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "javascript-sandbox";
  CYPRESS_CACHE_FOLDER = ".cypress";
  buildInputs = with pkgs; [
    pkgs.nodejs-10_x
    nodePackages_10_x.node-gyp
  ];
    shellHook = ''
        export PATH="$PATH:$(pwd)/node_modules/.bin"
        '';
}
