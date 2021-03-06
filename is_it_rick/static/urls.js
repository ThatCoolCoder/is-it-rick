const urls = {
    frontend : {
        homepage : config.baseUrl,
        registerRickRoll : config.baseUrl + 'register_rick_roll/',
        signIn : config.baseUrl + 'sign-in/',
        signUp : config.baseUrl + 'sign-up/',
        manageRickRolls : config.baseUrl + 'manage/',
        viewRickRoll : config.baseUrl + 'view-rick-roll/',
        assets : {
            loadingGif : config.baseUrl + 'static/loading.gif'
        }
    },
    backend : {
        isItRick : config.baseUrl + 'api/is_it_rick/',
        registerRickRoll : config.baseUrl + 'api/register_rick_roll/',
        signIn : config.baseUrl + 'api/sign_in/',
        deleteRickRoll : config.baseUrl + 'api/delete_rick_roll/',
        verifyRickRoll : config.baseUrl + 'api/verify_rick_roll/'
    }
}