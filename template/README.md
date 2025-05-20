# UniCracker Website Template - Usage Instructions

## Overview
This template provides a complete website for UniCracker, a Sri Lankan university course finder based on Z-score. The website includes three main pages:

1. **Home Page** - Introduction to UniCracker with key features
2. **Course Order Page** - Z-score based course search functionality
3. **About Us Page** - Information about UniCracker and the team

All pages include the Uni Bot chatbot icon for user assistance.

## Files Structure
- `index.html` - Home page
- `courseorder.html` - Course order search page
- `aboutus.html` - About us page
- `assets/` - Directory containing all assets
  - `css/style.css` - Main stylesheet
  - `js/script.js` - JavaScript functionality
  - `images/` - Directory for image assets (currently using placeholders)

## Getting Started
1. Extract the zip file to your web server or local development environment
2. Open `index.html` in your browser to view the home page
3. Navigate between pages using the navigation menu

## Customization
- **Logo**: Replace the placeholder logo in the JavaScript file with your actual logo
- **Images**: Add your own images to the `assets/images/` directory
- **Colors**: Modify the color scheme in `assets/css/style.css` (look for the `:root` section)
- **Content**: Update the text content in each HTML file to match your specific requirements

## Chatbot Integration
The template includes a chatbot icon that currently shows an alert message. To integrate your actual Uni Bot:
1. Modify the click event listener in `assets/js/script.js`
2. Replace the alert with your chatbot initialization code

## Responsive Design
The template is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## Browser Compatibility
Tested and compatible with:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## Additional Notes
- The Z-score search functionality is currently a visual demonstration. You'll need to implement the actual search logic to connect with your database.
- All form submissions are currently placeholders and will need to be connected to your backend systems.

For any questions or support, please contact the developer.
