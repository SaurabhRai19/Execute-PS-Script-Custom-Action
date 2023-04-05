const core = require('@actions/core');
const github = require('@actions/github');
const shell = require('shelljs');

shell.exec('powershell ./powerTest.ps1', {'shell': 'powershell.exe'}, (error,stdout,stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})
try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('projectname');
  console.log(`Hello ${nameToGreet}!`);
//Varaible Declaration
shell.exec('./powerTest.ps1', {'shell': 'powershell.exe'}, (error,stdout,stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})
  
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}