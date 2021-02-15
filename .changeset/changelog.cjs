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

function getDependencyReleaseLine(changeset, typeList, changelogOpts) {
  const changeText = typeList.map((type) =>
    type ? `- Updating ${type.name} to version ${type.newVersion}` : ""
  );

  return changeText.join("/n");
}

const defaultChangelogFunctions = {
  getReleaseLine,
  getDependencyReleaseLine,
};

module.exports = defaultChangelogFunctions;
