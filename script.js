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
        
        // js object
        var parsedData = JSON.parse(data);
        console.log({parsedData})

        for (var key in parsedData) {
           console.log(key);
           console.log(parsedData[key]);
           console.log(parsedData[key]['name'],"only key");
           console.log(parsedData[key]['value'],"only value");
       }
        // console.log(form.serialize())
        
        // js object
        console.log($(form).serializeArray(),"$(form).serializeArray()")
        // console.log(form)
    }
});