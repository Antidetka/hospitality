// Handles when user adds patient informations.
$("#add-btn").on("click", function(event) {
    event.preventDefault();

    // Make a newPatient object
    let newPatient = {
        firstName: $("#inputFirstName").val().trim(),
        lastName: $("#inputLastName").val().trim(),
        dob: $("#inputDOB").val().trim(),
        symptoms: $("#textareaSymptoms").val().trim(),
        diagnosis: $("#textareaDiagnosis").val().trim(),
        treatment: $("#textareaTreatment").val().trim()
    };

    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newPatient)
        .then((data) => {
            console.log(data);
            alert("Adding patient...");
        });
    
    // Empty each input box by replacing the value with an empty string
    $("inputFirstName").val("");
    $("inputLastName").val("");
    $("#inputDOB").val("")
    $("#textareaSymptoms").val("")
    $("#textareaDiagnosis").val("")
    $("#textareaTreatment").val("")
})