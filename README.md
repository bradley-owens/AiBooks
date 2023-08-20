# AI-Books Website

Welcome to the AI-Books project! This repository contains the codebase for a website that promotes the new QuickBooks feature, AI-Books. The website showcases a dedicated hero section, a user-friendly form, responsive design, a dark/light mode toggle, and more.

## Features

- **Hero + Form Combo Component**: A captivating hero section that introduces the AI-Books feature and a form for users to learn more.
- **Responsive Design**: The website is designed to be fully responsive and mobile-friendly for a seamless experience on various devices.
- **Dark/Light Mode Toggle**: Users can toggle between dark and light modes, enhancing readability and user preference.

## Installation

1. Clone the repository: `git clone https://github.com/yourusername/ai-books.git`
2. Navigate to the project directory: `cd ai-books`
3. Install dependencies: `npm install`

## Usage

Run the development server: `npm start`

This will start the website locally at [http://localhost:3000](http://localhost:3000).

## Colors

The project uses CSS variables to define the color scheme. Here are the color palettes:

**Light Theme:**

- Background: #EAEAEA
- Text Primary: #343A40
- Text Secondary: #F8F9FA
- Accent Primary: #DD6E42
- Accent Secondary: #4F6D7A
- Border: #E8DAB2
- Form Background: #4F6D7A

**Dark Theme:**

- Background: #212529
- Text Primary: #EAEAEA
- Text Secondary: #CED4DA
- Accent Primary: #DD6E42
- Accent Secondary: #343A40
- Border: #DD6E42
- Form Background: #343A40

## Technologies

- React
- Redux
- CSS

## Issues and Resolutions

1. **Popup Text Data Implementation**: Dynamically populating the popup content based on user interactions was challenging. I used Redux to manage popup state and content, ensuring accurate data display.

2. **Responsive Image Design**: Implementing responsive images that adapt to different screen sizes required careful styling. I utilized the `object-fit` property to maintain image aspect ratios.

3. **Form Validation**: Ensuring valid user inputs and displaying appropriate messages during form submission was a concern. I implemented client-side validation and displayed relevant feedback to users.

## Credits

This project was developed by Bradley Owens. Special thanks to the Intuit for providing the opportunity to work on this engaging web development project.

For inquiries or questions, please contact me at [bradowens17@hotmail.com].
