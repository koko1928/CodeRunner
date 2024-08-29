# CodeRunner

[![HTML5](https://img.shields.io/badge/-Html5-E34F26.svg?logo=html5&style=plastic)](https://html5.org)
[![CSS3](https://img.shields.io/badge/-Css3-1572B6.svg?logo=css3&style=plastic)](https://www.w3.org/Style/CSS)
[![JavaScript](https://img.shields.io/badge/-Javascript-F7DF1E.svg?logo=javascript&style=plastic)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![jQuery](https://img.shields.io/badge/-Jquery-0769AD.svg?logo=jquery&style=plastic)](https://jquery.com)

## Overview

**CodeRunner** is an online code execution service that supports multiple programming languages, allowing you to run code and get instant feedback in real time. It’s a versatile tool suitable for everyone from beginners to advanced programmers.

## Features

- **Multi-Language Support**: Run code in various programming languages like C, C++, Java, Python, and many more.
- **Real-Time Execution**: Write and execute your code instantly to see results and debug issues on the fly.
- **Error Reporting**: Detailed reports on compilation and runtime errors help you quickly identify and resolve issues.
- **Multi-Language Interface**: The interface can be displayed in several languages, making it accessible to users around the globe.

## Usage

1. **Select Language**:
    - Choose your preferred display language from the "Language" dropdown menu at the top of the page.
    - Select the programming language you want to use from the "Programming Language" dropdown menu.

2. **Input Code**:
    - Enter your code into the code editor located under the "Source Code" section.

3. **Provide Input Data**:
    - Input any data needed for standard input in the "Input" section.

4. **Execute Code**:
    - Click the "Execute" button to run your code.

5. **View Results**:
    - Check the "Result" section for output. This section displays standard output, build errors, and runtime errors.

## Installation and Hosting

### Hosting Environment Setup

1. **Obtain Code**:
    - Clone or download this repository.
    ```bash
    git clone https://github.com/koko1928/coderunner.git
    ```

2. **Place Files**:
    - Place the downloaded files into your web server's document root.

3. **Manage Dependencies**:
    - `index.html` uses external libraries (jQuery, Monaco Editor) loaded via CDN. Ensure you have internet access for these libraries to function.

4. **Start Server**:
    - Start your web server and navigate to `index.html` in your browser.

### Local Development Setup

1. **Use Development Server**:
    - For local development, you can use a simple HTTP server. For example, you can use Node.js to install `http-server` and start the server.
    ```bash
    npm install -g http-server
    http-server
    ```

2. **Check Local Files**:
    - Open your browser and go to `http://localhost:8080` to verify that the application is working correctly.

## API Server Usage

CodeRunner uses an external API server. You are free to use this API server for non-commercial purposes. If you wish to use it for commercial purposes or need further details, please get in touch. For more information, visit [this page](https://github.com/koko1928/coderunner/issues).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Bug reports and feature requests can be submitted on the [Issues](https://github.com/koko1928/coderunner/issues) page. Pull requests are also welcome.

