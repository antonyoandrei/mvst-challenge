<div align="center">
<svg width="500" height="100" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M57.2538 19.2L56.7712 16.4384H53.4896V22.7507L54.4548 23.0466C55.1197 23.2658 56.0527 23.4795 57.2538 23.6877C58.4549 23.8959 59.5916 24 60.664 24C63.2164 24 65.3022 23.326 66.9215 21.9781C68.5409 20.6301 69.3506 18.7617 69.3506 16.3726C69.3506 15.1671 69.0825 14.1151 68.5462 13.2164C68.01 12.3178 67.3398 11.6384 66.5355 11.1781C65.7312 10.7178 64.8625 10.2904 63.9295 9.89589C62.9965 9.50137 62.1279 9.17808 61.3236 8.92603C60.5193 8.67397 59.849 8.32877 59.3128 7.89041C58.7766 7.45205 58.5085 6.93699 58.5085 6.34521C58.5085 5.66575 58.8034 5.10685 59.3932 4.66849C59.9831 4.23013 60.8249 4.01096 61.9188 4.01096C62.841 4.01096 63.7847 4.17534 64.7499 4.50411L65.5542 7.29863H68.5141L68.6749 1.31507L67.7098 0.986301C67.0663 0.767122 66.1548 0.547945 64.9751 0.328767C63.7955 0.109588 62.6695 0 61.597 0C59.1734 0 57.2055 0.608213 55.6934 1.82466C54.1813 3.0411 53.4253 4.75615 53.4253 6.96986C53.4253 8.2411 53.6934 9.34246 54.2296 10.274C54.7658 11.2055 55.436 11.9068 56.2404 12.3781C57.0447 12.8493 57.9187 13.2877 58.8624 13.6932C59.8061 14.0986 60.6801 14.4219 61.4844 14.663C62.2887 14.9041 62.959 15.2438 63.4952 15.6822C64.0314 16.1206 64.2995 16.6356 64.2995 17.2274C64.2995 18.0603 63.9242 18.7123 63.1735 19.1836C62.4228 19.6548 61.5005 19.8904 60.4067 19.8904C59.1627 19.8904 58.1117 19.6603 57.2538 19.2ZM9.1691 20.7124V23.5726H0V20.7124L2.41292 19.8904V4.274L0 3.2877V0.558932L8.30044 0.394549L13.1263 11.3425L18.1773 0.558932L25.8987 0.394549V3.2877L23.5823 4.274V19.8904L25.9952 20.7124V23.5726H16.4079V20.7124L18.9173 19.8904V7.43016C18.5312 8.46031 18.0862 9.52879 17.5821 10.6356C17.0781 11.7425 16.5097 12.948 15.877 14.2521C15.2443 15.5562 14.7563 16.5808 14.4132 17.3261L10.9386 17.4904L7.23876 9.69866L6.69183 7.98907V19.8904L9.1691 20.7124ZM37.0089 23.5726L30.5101 4.20825L28.3224 3.2877V0.558932L38.2958 0.394549V3.2877L35.915 4.24112L38.8749 13.7425L39.9044 17.7863L40.9339 13.9069L44.1189 4.274L41.6739 3.2877V0.558932L51.2934 0.394549V3.2877L48.9448 4.274L42.1564 23.5726H37.0089ZM76.5678 23.5726V20.7124L79.2059 19.8904V4.274H76.1496L75.3453 7.39729H72.3854V0.493179L91.0453 0.394549V7.39729H88.0533L87.249 4.274H84.1926V19.8904L86.8629 20.7124V23.5726H76.5678ZM95.3512 18.8548C94.8043 19.3918 94.5308 20.1096 94.5308 21.0082C94.5308 21.9726 94.7614 22.7123 95.2225 23.2274C95.6837 23.7425 96.3539 24 97.2333 24C98.0054 24 98.6596 23.7315 99.1958 23.1945C99.732 22.6575 100 21.9288 100 21.0082C100 20.0658 99.7695 19.337 99.3084 18.8219C98.8473 18.3069 98.177 18.0493 97.2976 18.0493C96.5469 18.0493 95.8981 18.3178 95.3512 18.8548Z" fill="#121215"></path></svg>
</div>

The project is a React application built with Vite for enhanced performance and written in TypeScript to ensure code reliability. The main functionality is to search for a GitHub user by username and display their repositories. Additionally, the application provides various features such as filtering repositories by programming language, sorting by last updated or name, and displaying user information including profile picture, name, GitHub username, followers, and following numbers.

## Features

- **GitHub API Integration**: Utilizes the GitHub API to search for users and fetch their repositories.
- **User Information Display**: Shows user profile picture, name, GitHub username, followers, and following numbers.
- **Repository Filtering**: Allows filtering repositories by programming language.
- **Repository Sorting**: Provides sorting options for repositories by last updated or name.
- **React Components**: Divides the UI into reusable components using Storybook for better maintainability.
- **TypeScript**: Written in TypeScript for type safety and better developer experience.
- **Testing**: Includes tests for all components using Jest and React Testing Library to ensure reliability.
- **GraphQL Integration**: Utilizes the GitHub v4 API with GraphQL for efficient data fetching.
- **Documentation**: Code is thoroughly documented with JSDoc for better understanding and maintainability.
- **Deployment**: Deployed on Netlify for easy access and usage.
- **Enhanced User Experience**: Utilizes a toaster library like Sonner to provide simple notifications for better user experience.

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/antonyoandrei/mvst-challenge
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create an `.env` file with the following content:

    ```plaintext
    VITE_GITHUB_TOKEN=<github-token-for-public-repositories>
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Access the application at `http://localhost:5173`.

## Usage

- Enter a GitHub username in the search bar to find and display user information and repositories.
- Use the filters to narrow down repositories by programming language.
- Click on the sorting options to sort repositories by last updated or name.
