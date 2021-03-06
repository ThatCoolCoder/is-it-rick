const usernameInput = spnr.dom.id('usernameInput');
const passwordInput = spnr.dom.id('passwordInput');
const outputParagraph = spnr.dom.id('outputParagraph');
const warningParagraph = spnr.dom.id('warningParagraph');

const loadingGif = new LoadingGif(spnr.dom.id('loadingGifHolder'));

passwordInput.addEventListener('keypress', event => {
    // Enter pressed
    if (event.keyCode == 13) {
        signIn();
    }
});

async function signIn() {
    var username = usernameInput.value;
    var password = passwordInput.value;
    if (username == '' || password == '') {
        showWarning('You must enter a username and password',
            outputParagraph, warningParagraph);
        return;
    }
    loadingGif.show();
    hideAllElements(outputParagraph, warningParagraph);
    var response = await basicPost(urls.backend.signIn,
        {username : username, password : password});
    var json = await response.json();
    loadingGif.hide();
    if (json.status == Status.OK) {
        showOnlyOutputElement(outputParagraph, warningParagraph);
        
        saveSessionId(json.session_id);
        
        var params = (new URL(document.location)).searchParams;
        var return_url = params.get('return_url');
        window.location.href = decodeURIComponent(return_url);
    }
    else {
        showResponseStatusCode(json, outputParagraph, warningParagraph);
    }
}