
# TronXGitlab

This project adds a gitlab open merge request widget to tron tickets.

Browser support

- [👍] Chrome
- [👍] Edge
- [👍] Chromium Browser
- [🕐] Firefox
- [❌] Safari

Read before usage:
> The extension uses the ticket id to search for open merge requests
> which includes the id in the title. If no mr is found nothing is shown.
> If multiple merge requests are found the most recent one is used. If
> there is no widget where you think one should be, check the dev
> console for error logs.

### Installation (Chrome Extension dev mode)

1. `git clone https://github.com/niklasbz/tronxgitlab.git`
2. `cd tronxgitlab`
3. `pnpm install`
4. `pnpm run build:extension`
5. Open Chrome go to `chrome://extensions/`
6. Enable dev mode
7. Click `load unpacked`
8. Select $project-root `/dist/tron-x-gitlab`
9. Follow usage instructions

### Installation (Chrome webstore)
pending

### Usage

1. Open Chrome go to `chrome://extensions/`
2. Click `Details` on TronXGitlab
3. Click `Extension options` in list
4. Enter your Gitlab URL e.g. `https://gitlab.example.com/api/v4/` (mind the slashes!)
5. Enter your Gitlab AccessToken (**requires api,read_api,read_user access**!)
6. Press save. Done!

### Pack extension for release

1. Open Chrome go to `chrome://extensions/`
2. Enable dev mode
3. Press `Pack extension`
4. Select $project-root `/dist/tron-x-gitlab` for "Extension root directory"
5. If the extension is already published, select the generated private key file for "Private key file (optional)"
6. Press `Pack extension`
7. Go to and follow instructions at `https://chrome.google.com/webstore/devconsole/`
