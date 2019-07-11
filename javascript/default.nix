with import <nixpkgs> {};
let
libPath = lib.makeLibraryPath [ 
  glibc 
  gcc-unwrapped.lib 
  gmp 
  nodejs-8_x 
  gtk2-x11 
  gnome2.pango
  atk
  cairo
  gdk_pixbuf
  glib
  fontconfig
  freetype
  dbus
  xlibs.libX11
  xlibs.libxcb
  xlibs.libXi
  xlibs.libXcursor
  xlibs.libXdamage
  xlibs.libXrandr
  xlibs.libXcomposite
  xlibs.libXext
  xlibs.libXfixes
  xlibs.libXrender
  xlibs.libXtst
  xlibs.libXScrnSaver
  gnome2.GConf
  nss
  nspr
  alsaLib
  cups
  expat
  libstdcxx5
  udev
  ];
in stdenv.mkDerivation {
  name = "javascript-sandbox";
  CYPRESS_CACHE_FOLDER = ".cypress";
  buildInputs = [
    pkgs.nodejs-12_x
  ];
    shellHook = ''
        export PATH="$PATH:$(pwd)/node_modules/.bin"
        patchelf \
            --debug \
            --set-interpreter ${glibc}/lib/ld-linux-x86-64.so.2 \
            --set-rpath "${libPath}:$(pwd)/.cypress/3.0.3/Cypress/" \
            .cypress/3.0.3/Cypress/Cypress
        patchelf \
            --debug \
            --set-rpath "${libPath}:$(pwd)/.cypress/3.0.3/Cypress/" \
            .cypress/3.0.3/Cypress/libnode.so
        '';
}
