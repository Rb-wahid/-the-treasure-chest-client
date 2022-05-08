# Full stack MERN Project - The Treasure Chest

## Assignment 11 \_\_ The Treasure Chest - [Live Link](https://the-treasure-chest-14e40.web.app)


## Technology used on Client side

- axios
- firebase
- react
- react-firebase-hooks
- react-helmet-async
- react-icons
- react-router-dom
- react-toastify
- recharts
- swr
- tw-elements
- animated-tailwindcss
- tailwindcss

## Technology used on Server side

- cors
- dotenv
- express
- jsonwebtoken
- mongodb

## Features

- Sign In, Sign Up & Sign In with Github functionality using firebase & react-firebase-hooks
- Reset password & Email verification functionality
- In every successful sign in & sign up client side received jwt token & store it on local storage.
- When updating, deleting inventory & accessing my items send received token & in backend verified the authorization. If got 401 || 403 code, In client side user will be sign out and redirect to Sign In page.
- When updated, deleted & send Reset password, send verification email, shown toast notification.
- In my items page, fetching data by filtering email and display on UI.
- restock , delivery & add new Inventory functionality and the database updated
- nested route
- protected route and redirected to previous page after sign in
- Only email verified user can access protected route
- data fetching by axios & swr
- setting dynamic page title using react-helmet-async
- In Inventory Report page, calculating Total Invest, Total Sold & My Total Invest, My Total Sold then shown the data with two chart - Bar chart & Pie chart.
- Shown spinner when loading
- Added condition on Sign Up btn & Navbar
- Handled Active route on Navbar
- Handled not found page.
- Used animated-tailwindcss when possible
- Stored the sensitive data on .env file
- Designed the UI with help of tw-elements
