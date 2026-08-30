const chalk = require('chalk');

console.log(chalk.green("Hello from my Node app running inside GitHub Actions!"));
console.log(chalk.blue("Node version:"), process.version);
console.log(chalk.yellow("Environment:"), process.env.APP_ENV);
console.log(chalk.magenta("Secret value exists:"), process.env.MY_SECRET);