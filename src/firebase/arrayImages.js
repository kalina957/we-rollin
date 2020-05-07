




  const myImages=[];
  const storageRef = storage.ref();

  storageRef.child('images-133/').listAll().then(function(result){
    result.items.forEach(function(imageRef){
       console.log("Image ref:" + imageRef.toString());
     //  myImages.push(imageRef.getDownloadURL());
       // console.log(myImages.length);
    })})


