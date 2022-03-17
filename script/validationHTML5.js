"use strict";
(function () {
    let formElem = document.getElementById('formElem');
    function onBtnclick (evt) {
        evt.preventDefault();

        fetch("https://httpbin.org/post", {
                method: 'POST',
                body: new FormData(formElem)
            })
            .then(response => response.json())
            .then(formElem => {
                console.log(formElem);
            })
            .catch(error => console.log(error));
    }
    document.querySelector('#button').addEventListener('click', onBtnclick);
})();