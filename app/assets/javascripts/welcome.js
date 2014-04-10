// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {
    var $verifyForm = $('.verify-form'),
        $id = $('#drexelOneId'),
        $firstName = $('#firstName'),
        $lastName = $('#lastName');

    $verifyForm.submit(function() {
        if ($id.val().length === 0 || $firstName.val().length === 0 || $lastName.val().length === 0) {
            alert("Please fill in all three fields. We actually take that quite serious.");
            return false;
        }
    });
});
