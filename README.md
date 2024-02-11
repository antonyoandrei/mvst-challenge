<div align="center">
  <img src="https://res.cloudinary.com/du94mex28/image/upload/v1707649208/Portfolio/mvst_yibpu2.svg" alt="MVST" width="400">
</div>

The project is a React application built with Vite for enhanced performance and written in TypeScript to ensure code reliability. The main functionality is to search for a GitHub user by username and display every repository the user has created or contributed to. Additionally, the application provides various features such as filtering repositories by programming language, sorting by last updated or name, and displaying user information including profile picture, name, GitHub username, followers, and following numbers.

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

- Enter a GitHub username in the search bar to find and display every repository the user has created or contributed to, along with user information.
- Use the filters to narrow down repositories by programming language.
- Click on the sorting options to sort repositories by last updated or name.

### Testing

To ensure the reliability of the application, comprehensive testing has been implemented using Jest and React Testing Library. To run the tests, first, ensure that all dependencies are installed by running `npm install`. Once dependencies are installed, you can execute the tests by running:

```bash
npm run test
```

This command will run all test suites. If you wish to run a specific test suite, you can use the following command:

```bash
npm run test <test-file-name>
```

Test files are located in the `tests` folder within the `src` directory.

### Future Improvements

As for future improvements, there are several avenues to explore for enhancing the application further. One potential improvement is to continue componentizing the code to make it more scalable and maintainable. By breaking down the UI into smaller, reusable components, the codebase can become more modular and easier to manage.

Additionally, it could be beneficial to render more information from the GitHub API, essentially creating a basic GitHub clone. This could involve displaying additional user details, such as organizations or recent activity. By expanding the scope of information rendered, the application could provide users with a more comprehensive view of a GitHub profile.