function isImageFileExtension(filename) {
    if (filename === null || filename === undefined) {
        return false
    }
    //end with
    return filename.endsWith('.jpeg') ||
    filename.endsWith('.png') ||
    filename.endsWith('.gif') ||
    filename.endsWith('.svg')    


   
}

console.log(isImageFileExtension('sample.doc'));
console.log(isImageFileExtension('sample.gif'));
console.log(isImageFileExtension(null));
console.log(isImageFileExtension(undefined));