const Blog = () => {
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold underline text-center sm:text-5xl">
            Our Blog
          </h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
              <details>
                <summary className="py-2 cursor-pointer focus:outline-none focus:underline">
                  What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </summary>
                <div className="px-4 py-2">
                  <p>
                    An access token and refresh token are crucial components in
                    modern web authentication. Access tokens provide limited,
                    short-lived permissions to access resources on a server,
                    while refresh tokens are used to obtain new access tokens
                    without requiring the user to re-enter their credentials.
                    Storing access tokens on the client-side can introduce
                    security risks, so it's recommended to keep them in secure
                    storage like HTTP cookies or the browser's local storage. On
                    the other hand, refresh tokens must be kept in even more
                    secure, server-side storage, as they are long-lived and
                    grant the ability to refresh access tokens without user
                    interaction.
                  </p>
                </div>
              </details>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
              <details>
                <summary className="py-2 cursor-pointer focus:outline-none focus:underline">
                  What is Express.js? What is Nest.js?
                </summary>
                <div className="px-4 py-2">
                  <p>
                    Express.js and Nest.js are both popular frameworks in the
                    world of Node.js development. Express.js is a minimal and
                    flexible framework for building web applications and APIs.
                    It's known for its simplicity and widespread use in the
                    Node.js community. Nest.js, on the other hand, is a more
                    opinionated and structured framework that uses TypeScript
                    and is built with scalability and maintainability in mind.
                    It leverages decorators and dependency injection to create
                    organized and maintainable code. The choice between
                    Express.js and Nest.js depends on your project's
                    requirements and your development style.
                  </p>
                </div>
              </details>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4">
              <details>
                <summary className="py-2 cursor-pointer focus:outline-none focus:underline">
                  Code Examples
                </summary>
                <div className="px-4 py-2">
                  <p className="text-lg font-bold mb-2">
                    Access Token and Refresh Token:
                  </p>
                  <pre className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                    {`// Example of an access token and refresh token storage on the client-side using JavaScript
// Access token storage (insecure, for demonstration purposes only)
const accessToken = 'your_access_token_here';

// Refresh token storage (more secure, usually server-side)
const refreshToken = 'your_refresh_token_here';

// In a real application, access tokens should be stored securely, e.g., in an HttpOnly cookie.
// Refresh tokens should never be stored on the client-side.

// Pseudo-code for obtaining a new access token using a refresh token
function getNewAccessToken(refreshToken) {
  // Send the refresh token to the server
  // Server verifies the refresh token and issues a new access token
  // Return the new access token
}`}
                  </pre>

                  <p className="text-lg font-bold mt-4">Express.js example:</p>
                  <pre className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                    {`const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

app.listen(port, () => {
  console.log(\`Server listening on port \${port}\`);
});`}
                  </pre>

                  <p className="text-lg font-bold mt-4">Nest.js example:</p>
                  <pre className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto">
                    {`import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello, Nest.js!';
  }
}`}
                  </pre>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
