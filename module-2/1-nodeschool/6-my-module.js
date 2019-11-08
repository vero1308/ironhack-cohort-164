const fs = require("fs");

function filterFolderByExtension(folder, ext, clbk) {
  fs.readdir(folder, (err, list) => {
    // let's use this node build in function to read folder's content
    if (err) return clbk(err, null); // return directly if a problem occurs
    const filteredFiles = list // parse all the files in give directory
      .filter(file => file.endsWith("." + ext)); // keep only the one ending with the given extension

    clbk(null, filteredFiles);
  });
}

function filterFolderByExtension2(folder, ext) {
  return new Promise((resolve, reject) => {
    fs.readdir(folder, (err, list) => {
      // let's use this node build in function to read folder's content
      if (err) reject(err); // return directly if a problem occurs
      const filteredFiles = list // parse all the files in give directory
        .filter(file => file.endsWith("." + ext)); // keep only the one ending with the given extension

      resolve(filteredFiles);
    });
  });
}

module.exports = filterFolderByExtension;
