import saveAs from 'file-saver';

export const downloadFile = (base64Str, fileName) => {
    if (! base64Str.includes(",")) {
        base64Str = "data:image/jpeg;base64," + base64Str;
    }

    saveAs(base64Str, fileName)

    // // atob to base64_decode the data-URI
    // let image_data = atob(base64Str.split(',')[1]);
    // // Use typed arrays to convert the binary data to a Blob
    // let arraybuffer = new ArrayBuffer(image_data.length);
    // let view = new Uint8Array(arraybuffer);
    // let blob;
    // for (let i=0; i<image_data.length; i++) {
    //     view[i] = image_data.charCodeAt(i) & 0xff;
    // }
    // try {
    //     // This is the recommended method:
    //     blob = new Blob([arraybuffer], {type: 'application/octet-stream'});
    // } catch (e) {
    //     // The BlobBuilder API has been deprecated in favour of Blob, but older
    //     // browsers don't know about the Blob constructor
    //     // IE10 also supports BlobBuilder, but since the `Blob` constructor
    //     //  also works, there's no need to add `MSBlobBuilder`.
    //     let bb = new (window.WebKitBlobBuilder || window.MozBlobBuilder);
    //     bb.append(arraybuffer);
    //     bb.getBlob('application/octet-stream'); // <-- Here's the Blob
    // }
    //
    // // Use the URL object to create a temporary URL
    // // let url = (window.webkitURL || window.URL).createObjectURL(blob);
    // // location.href = url;
    //
    // saveAs(blob, fileName)
};