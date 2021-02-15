function getReleaseLine(changeset, type, changelogOpts) {
  console.log({ changeset, type, changelogOpts }, changeset.releases[0]);
  return "getReleaseLine";
}
//
function getDependencyReleaseLine(changeset, type, changelogOpts) {
  // console.log({ changeset, type, changelogOpts });

  return "getDependencyReleaseLine";
}

const defaultChangelogFunctions = {
  getReleaseLine,
  getDependencyReleaseLine,
};

module.exports = defaultChangelogFunctions;
