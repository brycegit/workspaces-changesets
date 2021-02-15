const { exec } = require("child_process");

async function getReleaseLine(changeset, type, changelogOpts) {
  return new Promise((res) => {
    exec("git rev-parse --abbrev-ref HEAD", (error, stdout, stderr) => {
      const ticketPrefix = stdout.match(/KENG-\d*/)
        ? `${stdout.match(/^KENG-\d*/)[0]} - `
        : "";

      res(`- ${ticketPrefix}${changeset.summary}`);
    });
  });
}

function getDependencyReleaseLine(changeset, type, changelogOpts) {
  const changeData = type[0];

  return changeData
    ? `- Updating ${changeData.name} to version ${changeData.newVersion}`
    : "";
}

const defaultChangelogFunctions = {
  getReleaseLine,
  getDependencyReleaseLine,
};

module.exports = defaultChangelogFunctions;
