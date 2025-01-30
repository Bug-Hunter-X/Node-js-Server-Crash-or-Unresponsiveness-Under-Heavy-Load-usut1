# Node.js Server Crash or Unresponsiveness Under Heavy Load

This repository demonstrates a common issue in Node.js applications where the server crashes or becomes unresponsive when handling a large number of concurrent requests. This can be caused by memory leaks, unhandled exceptions, or inefficient resource management.

## Bug Description
The provided `server.js` file contains a simple HTTP server. When subjected to a large number of simultaneous requests (simulated in the code), the server may crash, stop responding, or exhibit significantly degraded performance.

## How to Reproduce
1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node server.js`.
4. Observe the server's behavior.  It may or may not immediately show problems.  The high number of requests will eventually cause issues.

## Solution
The `serverSolution.js` file demonstrates a potential solution by adding error handling and improving resource management, such as using a connection pool in case of database connections.