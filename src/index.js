const path = require('path');
const semver = require('semver');

const configFile = path.resolve(process.cwd(), 'package')
const config = require(configFile);

const version = config.engines.node;

const mssg = `Required node version is ${version}. Installed node version ${process.version}`;

if (semver.satisfies(process.version, version)) {
  console.info(mssg);
} else {
  console.error(mssg);
  process.exit(1);
}
