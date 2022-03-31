const fs = require('fs');
const path = require("path");

/**.
 * @param {string} src  The path to the thing to copy.
 * @param {string} dest The path to the new copy.
 */
 var copyRecursiveSync = function(src, dest) {

    var exists = fs.existsSync(src);
    var stats = exists && fs.statSync(src);
    var isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
      fs.mkdirSync(dest);
      fs.readdirSync(src).forEach(function(childItemName) {
        copyRecursiveSync(path.join(src, childItemName),
                          path.join(dest, childItemName));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
    
};

module.exports = (args) => {
    if(args.t == 'vanillajs') {
        const srcPath = path.join(__dirname, '..', '..', 'store', 'jsboilerplate');
        copyRecursiveSync(srcPath, `jsboilerplate${Date.now()}`);
    }else{
        console.log('Please provide command, see help for more information.');
        return;
    }

    console.log('Template  generation complete for', args.t);
}