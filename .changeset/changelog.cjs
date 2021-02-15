const { exec } = require("child_process");

async function getReleaseLine(changeset, type, changelogOpts) {
  return new Promise((res) => {
    exec("git rev-parse --abbrev-ref HEAD", (error, stdout, stderr) => {
      const ticket = stdout.match(/KENG-\d*/)
        ? stdout.match(/^KENG-\d*/)[0]
        : "" + " ";

      res(`- ${ticket} - ${changeset.summary}`);
    });
  });
}
//
function getDependencyReleaseLine(changeset, type, changelogOpts) {
  console.log({ changeset, type, changelogOpts });
  const things = type[0];
  return things
    ? `- Updating ${things.name} to version ${things.newVersion}`
    : "";
  // return "getDependencyReleaseLine";
}

const defaultChangelogFunctions = {
  getReleaseLine,
  getDependencyReleaseLine,
};

module.exports = defaultChangelogFunctions;
