$(document).ready(function () {
    Clicks();
});

function Clicks() {
    $('body').on('click', '#SaveButton', function () {
        alert(this.value);
    });
}