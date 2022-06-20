const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/susovanhaldar/susovanhaldar.github.io.git";

ghpages.publish(
  pathname,
  {
    branch: "root",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
