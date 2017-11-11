with import <nixpkgs> {};
let
    myVim = vim_configurable.customize {
        name = "vim";
        vimrcConfig.customRC = ''
           source ~/.vimrc
           set hidden
           let maplocalleader=","
        '';
        vimrcConfig.packages.myVimPackage = with pkgs.vimPlugins; {
          # loaded on launch
          start = [ idris-vim ];
          # manually loadable by calling `:packadd $plugin-name`
          opt = [];
          # To automatically load a plugin when opening a filetype, add vimrc lines like:
          # autocmd FileType php :packadd phpCompletion
        };
    };
in
stdenv.mkDerivation {
        name = "idris-sandbox";
        buildInputs = [
                haskellPackages.idris
                gmp
                myVim
        ];
    }
