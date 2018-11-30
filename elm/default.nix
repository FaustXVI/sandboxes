with import <nixpkgs> {};
let
  my-glibc = glibc;
  my-gcc = gcc-unwrapped.lib;
  my-gmp = gmp;
in stdenv.mkDerivation {
    name = "elm-sandbox";
    buildInputs = [
        elmPackages.elm
            nodejs
   ];
    patchPhase = ''
        patchShebangs node_modules/webpack
        '';
    shellHook = ''
        export PATH="$PATH:$(pwd)/node_modules/.bin"
        patchelf \
            --debug \
            --set-interpreter ${my-glibc}/lib/ld-linux-x86-64.so.2 \
            --set-rpath "${builtins.concatStringsSep ":" (map (l: "${l}/lib") [my-gcc my-gmp my-glibc])}" \
            node_modules/elmi-to-json/unpacked_bin/elmi-to-json
        '';

}
