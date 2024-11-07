{ pkgs }: {
deps = [
pkgs.nodejs
pkgs.nodePackages.typescript
pkgs.ffmpeg
pkgs.imagemagick
pkgs.git
pkgs.neofetch
pkgs.libwebp
pkgs.speedtest-cli
pkgs.wget
pkgs.yarn
pkgs.libuuid
];
env = {
LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [
pkgs.libuuid
];
};
}

},
"addons": [{ "plan": "heroku-postgresql:essential-1" }],
"buildpacks": [
{ "url": "https://github.com/heroku/heroku-buildpack-nodejs#latest" },
{ "url": "https://github.com/carlosdommor/heroku-buildpack-ffmpeg-latest" }
]
}
},
"addons": [{ "plan": "heroku-postgresql:essential-1" }],
"buildpacks": [
{ "url": "https://github.com/heroku/heroku-buildpack-nodejs#latest" },
{ "url": "https://github.com/carlosdommor/heroku-buildpack-ffmpeg-latest" }
]
}