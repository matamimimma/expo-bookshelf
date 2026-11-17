# Bookshelf app

App that lets user keep track of books in their bookshelf and their reading status. App for people who have a lot of books on their bookshelf and have a hard time keeping track of books they own.

## Main Screens

* **Search:** Shows a list of books based on users search query
* **Book details:** Shows more detailed information on selected book, lets user add/delete books in their own library, and lets user edit cover images and reading status of books that have been added to their library
* **Profile:** Shows a list of books in users library and personal setting such as theme
* **Bookshelf:** Shows a list of books that have been added to library
* **Edit:** Form for add/edit/delete, has input fields to fill out books information as well as reading status and users comment/rating

## Data Model

| Field | Type | Example |
|---|---|---|
| isbn | string | "9780425043769" |
| title | string | "Dune" |
| author(s) | string | "Frank Herbert" |
| publisher(s) | string | "Ace" |
| firstPublishedYear | string | "1965" |
| publishedYear | string | "2020" |
| pageCount | int | 896 |
| coverUrl | string | "https://covers.openlibrary.org/b/id/11481354-M.jpg" |
| readingStatus | boolean | false |
| rating | int | 3 |
| ... | ... | ... |

## Public API

* **API:** [FreeOpenAPI - Books API](https://freeopenapi.dev/apis/books)
* **Endpoints:** which
    - GET /api/v1/books/search?q={query}&limit=10 – Search books by title or author
    - GET /api/v1/books/isbn/{isbn} – Retrieve detailed book information using its ISBN
* **Used for:** Display book titles, authors, and available cover imanges in the app
* **API key:** Required, free API key from [FreeOpenApi documentation](https://freeopenapi.dev/Docs#signup), 100 requests/day

## Device Feature

* **Feature:** Photo library
* **Permission:** Photo library access, requested when the user chooses to change cover photo
* **Used for:** Allows user to replace existing cover image or add a custom cover if it doesn't aready exist

## Planned Extensions

1. Persistent photos: Persistent image storage using the device's file system. Save the image location alongside the book's information so custom covers remain available after restarting the app.
2. Tabs with nested stacks: Tab-based navigation with separate navigation stack for each tab.  Allows user to navigate between book lists, book details, book search, and other pages.

## Extra Libraries

* `library-name`: why it is needed (or "None")

## How to Run

```bash
npm install
npx expo start
```

Add how to supply the API key, if one is needed.

## Releases

* `v0.1.0`: what Release 1 contains
* `v0.2.0`: what Release 2 contains
* `v1.0.0`: what Release 3 contains
