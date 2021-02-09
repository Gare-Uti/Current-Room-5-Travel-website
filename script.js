// alert('Testing');
// Exercise 4- Extra features to the travel expert website. Confirmation of submit or reset action after users click on the respective buttons on the form.
function confSubmit(){
var agree= confirm("Are you sure you want to submit this form?");
if(agree)
return true;
else
return false;
}

function confReset(){
    var agree= confirm("Are you sure you wish to continue?");
    if(agree)
    return true;
    else
    return false;

}