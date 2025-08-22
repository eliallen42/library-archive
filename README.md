# Library Archive

A React-based web application for browsing and filtering a digital library archive. Users can search, filter, and view details about books, periodicals, multimedia, historical documents, and special collections.

## Features

- **Search** by title or author
- **Filter** by type, category, and year range
- **View** details and thumbnails for each archive item
- Responsive, modern UI

## Live Demo

[View Demo](https://eliallen42.github.io/library-archive/)

## Project Structure

- `src/`
  - `App.js` – Main application logic
  - `components/` – UI components (`Header`, `Footer`, `FilterBar`, `Results`)
  - `Data/ArchiveData.js` – Archive item data
  - `index.js`, `index.css` – Entry point and styles
- `public/`
  - `index.html` – HTML template
  - `manifest.json` – PWA manifest
  - `thumbnails/` – Item images

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the app:**
   ```sh
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

## Usage

- Use the search bar and filters to find items.
- Click an item to view details.
- Reset filters with the "Reset" button.

## Technologies

- React 19
- CSS Grid & Flexbox
- Create React App

## License

MIT
