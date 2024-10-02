// install.js
const { exec } = require('child_process');

function checkAndInstallExpress() {
    try {
        require.resolve('express');
        console.log('Express is already installed.');
    } catch (e) {
        console.log('Express is not installed. Installing...');
        exec('npm install express', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error installing express: ${stderr}`);
                return;
            }
            console.log(`Express installed successfully: ${stdout}`);
        });
    }

    try {
        require.resolve('express-handlebars');
        console.log('Handlebars is already installed.');
    } catch (e) {
        console.log('Handlebars is not installed. Installing...');
        exec('npm install express-handlebars', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error installing handlebars: ${stderr}`);
                return;
            }
            console.log(`Handlebars installed successfully: ${stdout}`);
        });
    }
}

checkAndInstallExpress();