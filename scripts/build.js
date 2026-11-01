const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const sourceDirectory = path.join(projectRoot, 'src');
const outputDirectory = path.join(projectRoot, 'dist');

fs.rmSync(outputDirectory, {
    recursive: true,
    force: true
});

fs.mkdirSync(outputDirectory, {
    recursive: true
});

fs.cpSync(
    sourceDirectory,
    path.join(outputDirectory, 'src'),
    { recursive: true }
);

fs.copyFileSync(
    path.join(projectRoot, 'package.json'),
    path.join(outputDirectory, 'package.json')
);

fs.copyFileSync(
    path.join(projectRoot, 'package-lock.json'),
    path.join(outputDirectory, 'package-lock.json')
);

console.log('Build completed successfully: dist/');