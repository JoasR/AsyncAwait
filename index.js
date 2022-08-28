//Remove async await to see the difference.
//Tell the function to not work synchronous, but instead wait for the resolve of the promise
//Code will wait at the await uploadStatus before continuing

const photos = [];

async function photoUpload() {
    let uploadStatus = new Promise( (resolve, reject) => {
        setTimeout( () => {
            photos.push("Profile Pic");
            resolve("Photo Uploaded")
        }, 3000)
    })
    
    let result = await uploadStatus;
    
    console.log(result);
    console.log(photos.length);
}

photoUpload();