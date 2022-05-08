import React from "react";

const About = () => {
  return (
    <div className=" max-w-4xl mx-auto mt-12">
      <h2 className="text-3xl text-center text-blue-700 font-semibold mb-8">
        Full stack MERN Project - The Treasure Chest
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div>
          <h2 className="text-2xl text-blue-500 font-semibold">
            Technology used on Client side
          </h2>
          <div className="md:pl-12 animate-backInLeft text-justify">
            <li>axios</li>
            <li>firebase</li>
            <li>react</li>
            <li>react-firebase-hooks</li>
            <li>react-helmet-async</li>
            <li>react-icons</li>
            <li>react-router-dom</li>
            <li>react-toastify</li>
            <li>recharts</li>
            <li>swr</li>
            <li>tw-elements</li>
            <li>animated-tailwindcss</li>
            <li>tailwindcss</li>
          </div>
        </div>
        <div>
          <h2 className="text-2xl text-blue-500 font-semibold">
            Technology used on Server side
          </h2>
          <div className="md:pl-12 animate-backInRight">
            <li>cors</li>
            <li>dotenv</li>
            <li>express</li>
            <li>jsonwebtoken</li>
            <li>mongodb</li>
          </div>
        </div>
      </div>
      <div className="my-16 max-w-3xl mx-auto">
        <h2 className="text-3xl text-blue-500 font-semibold text-center">
          Features
        </h2>
        <div className="md:pl-12 animate-backInUp text-justify">
          <li>
            Sign In, Sign Up & Sign In with Github functionality using firebase
            & react-firebase-hooks
          </li>
          <li>Reset password & Email verification functionality</li>
          <li>
            In every successful sign in & sign up client side received jwt token
            & store it on local storage.
          </li>
          <li>
            When updating, deleting inventory & accessing my items send received
            token & in backend verified the authorization.
          </li>
          <li>
            If got 401 || 403 code, In client side user will be sign out and
            redirect to Sign In page.
          </li>
          <li>
            When updated, deleted & send Reset password, send verification
            email, shown toast notification.
          </li>
          <li>
            In my items page, fetching data by filtering email and display on
            UI.
          </li>
          <li>
            restock , delivery & add new Inventory functionality and the
            database updated
          </li>
          <li>nested route</li>
          <li>protected route and redirected to previous page after sign in</li>
          <li>Only email verified user can access protected route</li>
          <li>data fetching by axios & swr</li>
          <li>setting dynamic page title using react-helmet-async</li>
          <li>
            In Inventory Report page, calculating Total Invest, Total Sold & My
            Total Invest, My Total Sold then shown the data with two chart - Bar
            chart & Pie chart.
          </li>
          <li>Shown spinner when loading</li>
          <li>Added condition on Sign Up btn & Navbar</li>
          <li>Handled Active route on Navbar</li>
          <li>Handled not found page.</li>
          <li>Used animated-tailwindcss when possible</li>
          <li>Stored the sensitive data on .env file</li>
          <li>Designed the UI with help of tw-elements</li>
        </div>
      </div>
    </div>
  );
};

export default About;
