<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Agency Website README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 800px;
      margin: auto;
      background: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    h1, h2, h3 {
      color: #333;
    }
    p {
      margin: 15px 0;
    }
    ul {
      margin: 15px 0;
      padding: 0;
    }
    li {
      margin-bottom: 5px;
    }
    code {
      background: #f4f4f4;
      padding: 5px;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Agency Website</h1>
    <p>Welcome to the README file for the Agency Website project. Below you'll find useful information about the project structure, setup, and how to run it.</p>

    <h2>Project Structure</h2>
    <p>The project has the following directory structure:</p>
    <pre>
      <code>
        /your-project-name
          /public
            /images
              logo.png
          /components
            /Button.tsx
            /Footer.tsx
            /Form.tsx
            /Header.tsx
            /Modal.tsx
          /pages
            /index.tsx
            /_app.tsx
            /_document.tsx
          /styles
            /global.css
          package.json
          tsconfig.json
          next.config.js
          .eslintrc.json
          .gitignore
      </code>
    </pre>

    <h2>Setup Instructions</h2>
    <ol>
      <li>Clone the repository to your local machine:</li>
      <pre><code>git clone https://github.com/your-username/your-repository.git</code></pre>

      <li>Navigate to the project directory:</li>
      <pre><code>cd your-project-name</code></pre>

      <li>Install dependencies:</li>
      <pre><code>npm install</code></pre>
    </ol>

    <h2>Running the Project</h2>
    <p>After completing the setup, you can run the project using the following command:</p>
    <pre><code>npm run dev</code></pre>

    <h2>Contributing</h2>
    <p>Contributions are welcome! If you'd like to contribute to the project, please follow these steps:</p>
    <ol>
      <li>Fork the repository</li>
      <li>Create your feature branch: <code>git checkout -b feature-name</code></li>
      <li>Commit your changes: <code>git commit -m 'Add some feature'</code></li>
      <li>Push to the branch: <code>git push origin feature-name</code></li>
      <li>Submit a pull request</li>
    </ol>

    <h2>License</h2>
    <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
  </div>
</body>
</html>
