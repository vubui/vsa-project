// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {
    var $verifyForm = $('.verify-form'),
        $id = $('#drexelOneId');

    $verifyForm.submit(function() {
        if ($id.val().length === 0) {
            alert("Ooops. Forgot something?");
            return false;
        }
    });
});
