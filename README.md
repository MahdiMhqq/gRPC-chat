<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">gRPC-Chat</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is a straightforward yet educational Chat Room application designed to showcase the implementation of gRPC protocol on both the front-end and back-end sides. To overcome the limitations of browsers that do not support higher versions of HTTP requests, we have integrated the Envoy proxy to convert HTTP/1.1 requests to HTTP/2.0.

One of the primary objectives of this project is to facilitate learning and practice. In pursuit of this goal, we've incorporated various types of tests on the front-end side. This offers an opportunity for developers to hone their skills and explore testing methodologies within the context of a practical application.

Feel free to explore the codebase, experiment with gRPC, and enhance your understanding of web technologies while enjoying the Chat Room functionality. We hope this project serves as a valuable learning resource and encourages further exploration of gRPC and related technologies in web development.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

Follow these simple steps to quickly set up and run the Chat Room application on your local machine:

#### Step 1: Install Dependencies

Navigate to the project folder structure, which is organized as follows:

- `client`: Contains front-end code and configurations.
- `server`: Houses the back-end code and configurations.
- `proxy`: Includes proxy commands and a Dockerfile.

Begin by installing all the necessary dependencies for the front-end and back-end by navigating to their respective folders and running:

```bash
cd client
npm install

cd ../server
npm install
```

#### Step 2: Build and Run the Proxy Server (Envoy)

Now, go to the `proxy` folder and build and run the proxy server Docker container using the following command:

```bash
cd proxy
sh proxy.sh
```

This step is crucial for converting HTTP/1.1 requests to HTTP/2.0 to ensure smooth communication between the client and server, as some browsers do not support higher versions of HTTP requests.

#### Step 3: Start the Back-End Server

Next, navigate to the `server` folder and launch the development server by running:

```bash
cd server
npm run dev
```

This command initializes the back-end server, allowing it to handle incoming requests from the front-end.

#### Step 4: Run the Front-End Server

Finally, head over to the `client` folder and start the development server for the front-end by running:

```bash
cd client
npm run dev
```

With the front-end server up and running, you can access the Chat Room application through your web browser. Open a browser window and navigate to the appropriate address (usually `http://localhost:5173`) to interact with the application.

Congratulations! You've successfully set up and launched the Chat Room application locally. Enjoy your chat experience and explore the implementation of gRPC in this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Develop Back-End server
- [x] Develop the UI and functionality
- [x] Config the envoy proxy
- [ ] Units tests
- [ ] Integration tests
- [ ] E2E tests
- [ ] Snapshot tests