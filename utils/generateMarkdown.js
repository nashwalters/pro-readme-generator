// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![Licence:${data.license}](https://img.shields.io/badge/license-${data.license}-blue.svg "license Badge")

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Description
${data.description}

## Installation
${data.install}

## Usage
${data.usage}<br>
<a href="${data.linkhref}">${data.linklabel}</a>
<p align="center"><img src="${data.imgsrc}" alt= "${data.imgalt}" width="500px"></p>
 

## Contributing
${data.contributors}<br>
${data.contribute}

## Tests
${data.tests}
${data.testinfo}

## Questions
Contact me with any questions:
* Email: ${data.email}
* Github: <a href="https://github.com/${data.github}">${data.github}</a>

## License
Copyright © 2021, ${data.name}.<br>Released under the <a href="https://opensource.org/licenses/${data.license}">${data.license}</a> license.
`;
}

module.exports = generateMarkdown;
