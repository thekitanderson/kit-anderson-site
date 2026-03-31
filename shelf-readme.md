# SHELF COMPONENT — Kit Anderson Network
## v1.0 · 2026

A reusable Netflix/Spotify-style horizontal scrolling shelf.
Drop `shelf.css` and `shelf.js` into any site in the network.

---

## SETUP

In your `<head>`:
```html
<link rel="stylesheet" href="/shelf.css">
```

Before `</body>`:
```html
<script src="/shelf.js"></script>
```

---

## CARD TYPES

Use the right class for the right content:

| Class              | Use for         | Width  |
|--------------------|-----------------|--------|
| `shelf-card-book`  | Books / novellas | 130px |
| `shelf-card-art`   | Art / drawings  | 160px  |
| `shelf-card-video` | YouTube / film  | 240px  |

---

## CATEGORY COLORS

| Class              | Color         | Use for        |
|--------------------|---------------|----------------|
| `shelf-cat-books`  | Gold #B8962E  | Books/writing  |
| `shelf-cat-movies` | Kit Red #C8341A | Movies       |
| `shelf-cat-art`    | Studio Steel #6A8AAA | Art   |
| `shelf-cat-video`  | Ash #7A7570   | YouTube        |
| `shelf-cat-dev`    | CRT Green #39D353 | Dev       |

---

## BOOK / ART CARD TEMPLATE

```html
<section class="shelf-section" id="books">
  <div class="shelf-header">
    <h2 class="shelf-title">Books</h2>
    <a class="shelf-link" href="https://readmorekit.com" target="_blank">readmorekit.com ↗</a>
  </div>
  <div class="shelf-track-wrap">
    <div class="shelf-track">

      <a class="shelf-card shelf-card-book" href="URL" target="_blank">
        <div class="shelf-cover">
          <img src="IMAGE_URL" alt="TITLE">
          <div class="shelf-overlay">
            <span class="shelf-overlay-text">Description of the work.</span>
          </div>
        </div>
        <div class="shelf-card-body">
          <div class="shelf-card-cat shelf-cat-books">Novel</div>
          <div class="shelf-card-title">Title</div>
          <div class="shelf-card-meta">2024</div>
        </div>
      </a>

    </div>
  </div>
</section>
```

---

## VIDEO CARD TEMPLATE

```html
<a class="shelf-card shelf-card-video" href="YOUTUBE_URL" target="_blank">
  <div class="shelf-cover">
    <img src="https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg" alt="TITLE">
    <div class="shelf-play">
      <div class="shelf-play-btn"></div>
    </div>
  </div>
  <div class="shelf-card-body">
    <div class="shelf-card-cat shelf-cat-video">12:34</div>
    <div class="shelf-card-title">Video Title</div>
    <div class="shelf-card-meta">1.2K views</div>
  </div>
</a>
```

---

## NOTES

- Arrows inject automatically via shelf.js — no extra HTML needed
- Images display at natural source aspect ratio — no cropping
- Gold border appears on hover automatically
- Left/right fade edges appear/disappear based on scroll position
- Works on mobile (arrows hidden, swipe native)
- CSS variables fall back to hardcoded values if not set in parent site
