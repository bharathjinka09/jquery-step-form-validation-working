var form = $("#contact");
form.validate({
    errorPlacement: function errorPlacement(error, element) { element.before(error); },
    rules: {
        confirm: {
            equalTo: "#password"
        }
    }
});
form.children("div").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    onStepChanging: function (event, currentIndex, newIndex)
    {
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
    },
    onFinishing: function (event, currentIndex)
    {
        form.validate().settings.ignore = ":disabled";
        return form.valid();
    },
    onFinished: function (event, currentIndex)
    {
        // alert("Submitted!");

        // json data
        var data = JSON.stringify( $(form).serializeArray() );
        console.log({data})

        var form_data = new FormData(document.getElementById("contact"));

        console.log({form_data})

        
        // js object
        var parsedData = JSON.parse(data);
        console.log({parsedData})

        for (var key in parsedData) {
           console.log(key);
           console.log(parsedData[key]);
           console.log(parsedData[key]['name'],"only key");
           console.log(parsedData[key]['value'],"only value");
        // console.log(form.serialize())
        
        // js object
        console.log($(form).serializeArray(),"$(form).serializeArray()")
        console.log(form)

        // file data
    }

      // function fileSelected() {
        // var file = document.getElementById('image').files[0];
        var files = document.getElementById('image').files;
        console.log({files})
        for(var file of files){

            if (file) {
              var fileSize = 0;
              if (file.size > 1024 * 1024)
                fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
              else
                fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';

              // document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
              // document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
              // document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
                console.log(fileSize)
                console.log(file.name)
                console.log(file.type)
            }
        }
      // }

      // fileSelected()

      function uploadFile() {
        var fd = new FormData();
        fd.append("fileToUpload", document.getElementById('fileToUpload').files[0]);
        var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", uploadProgress, false);
        xhr.addEventListener("load", uploadComplete, false);
        xhr.addEventListener("error", uploadFailed, false);
        xhr.addEventListener("abort", uploadCanceled, false);
        xhr.open("POST", "UploadMinimal.aspx");
        xhr.send(fd);
      }

      function uploadProgress(evt) {
        if (evt.lengthComputable) {
          var percentComplete = Math.round(evt.loaded * 100 / evt.total);
          document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
        }
        else {
          document.getElementById('progressNumber').innerHTML = 'unable to compute';
        }
      }

      function uploadComplete(evt) {
        /* This event is raised when the server send back a response */
        alert(evt.target.responseText);
      }

      function uploadFailed(evt) {
        alert("There was an error attempting to upload the file.");
      }

      function uploadCanceled(evt) {
        alert("The upload has been canceled by the user or the browser dropped the connection.");
      }


    }
});