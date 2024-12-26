---
sidebar_position: 4
---

# Authentication and Cookies in yt-dlp

yt-dlp supports various methods of authentication, allowing you to access content that requires login. This guide covers different authentication methods and the use of cookies.

## Basic Authentication

### Username and Password

For sites that require a simple login:

```sh
yt-dlp -u USERNAME -p PASSWORD URL
```

If you omit the password, yt-dlp will prompt you to enter it securely:

```sh
yt-dlp -u USERNAME URL
```

### Two-Factor Authentication

For accounts with 2FA enabled:

```sh
yt-dlp -u USERNAME -p PASSWORD -2 TWOFACTOR URL
```

### Netrc File

You can store login info in a `.netrc` file:

1. Create a file named `.netrc` in your home directory.
2. Add entries in the format:

```
machine HOSTNAME login USERNAME password PASSWORD
```

3. Use the `--netrc` option:

```sh
yt-dlp --netrc URL
```

## Using Cookies

### Passing Cookies Directly

Use the `--cookies` option to pass a cookies file:

```sh
yt-dlp --cookies /path/to/cookies.txt URL
```

### Extracting Cookies from Browsers

yt-dlp can extract cookies directly from your browser:

```sh
yt-dlp --cookies-from-browser BROWSER[:PROFILE_PATH] URL
```

Replace `BROWSER` with `chrome`, `firefox`, `opera`, `safari`, etc.

Example:

```sh
yt-dlp --cookies-from-browser firefox URL
```

## Site-Specific Authentication

### YouTube

For YouTube, you can use OAuth:

1. Run:

```sh
yt-dlp --auth-oauth CREDENTIALS_FILE
```

2. Follow the prompts to authenticate.
3. yt-dlp will save the token for future use.

### Other Platforms

Some platforms may require specific authentication methods. Check the yt-dlp documentation for platform-specific instructions.

## Handling Private Content

To access private videos or playlists:

1. Log in to your account in a web browser.
2. Export the cookies (use a browser extension or `--cookies-from-browser`).
3. Use the cookies file with yt-dlp:

```sh
yt-dlp --cookies cookies.txt PRIVATE_VIDEO_URL
```

## Tips for Authentication

- Use `--verbose` to see detailed information about the authentication process.
- For security, avoid passing passwords directly in the command line; use `netrc` or prompt instead.
- Regularly update your cookies file if you're accessing frequently changing private content.
- Be cautious when sharing scripts or commands that include authentication information.

## Troubleshooting Authentication Issues

- Ensure your login credentials are correct.
- Check if the site requires a specific User-Agent:

```sh
yt-dlp --user-agent "Mozilla/5.0 ..." --cookies cookies.txt URL
```

- Some sites may block yt-dlp; try using `--add-header` to mimic a browser request.
- If using cookies, ensure they're fresh and not expired.

## Important Notes

- Keep your authentication information secure.
- Be aware of the terms of service for the sites you're accessing.
- Some sites may have anti-bot measures that could be triggered by frequent requests.

Authentication in yt-dlp allows you to access a wide range of content that requires login. By understanding these methods, you can effectively use yt-dlp for both public and private media while maintaining security and respecting site policies.
