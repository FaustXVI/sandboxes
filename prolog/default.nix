with import <nixpkgs> {};
{
    prologEnv = stdenv.mkDerivation {
        name = "prolog-sandbox";
        buildInputs = [
            pkgs.swiProlog
        ];
    };
}
