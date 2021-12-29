<p align="center">
  <img src="src/asset/logo/logo-big-128.png" width="75" height="75"/>
</p>

<h1 align="center">YouTube Subtitle Filter</h1>

We support Korean version!
follow the below page to read it in multiple languages.

[한국어](README_KO.md)

Add a subtitle tag language that you want on the video thumbnail in the YouTube.

## Download

- [Chrome Web Store](https://chrome.google.com/webstore/detail/Youtube-subtitle-filter/onmelgncdnoihoaopmkcacadlmjmcehd)

- [Firefox Add On](https://addons.mozilla.org/ko/firefox/addon/youtube-subtitle-filter)

---

## Showcase

![Showcase Videos](docs/showcase/showcase_videos.jpg)

![Showcase In Video](docs/showcase/showcase_invideo.jpg)

---

## Customize

<img src="docs/showcase/showcase_popup.jpg" width="200">

- You can customize tag color in popup menu (background and text color)

- You can resize the subtitle tags

- You can search for subtitles by grouping regions. (ex en-US + en-GB)

---

## How to build

### Prerequisite

- Node.js
- npm

### Step by step

1. run `npm install` in terminal.
2. run `npm run build:[chrome or firefox]` in terminal. (built source will be created in `dist` folder)
3. run `npm run build:zip` in terminal.
4. then, `[chrome or firefox] yt-subtitle-filter-[version].zip` will be created.
