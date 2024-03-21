const path = require('path');

// path.dirname(process.mainModule.filename)  it is deprectaed
const rootDir = path.dirname(require.main.filename);

const viewPath = (view) => {
    return path.join(rootDir, 'views', view);
}



module.exports = viewPath;

