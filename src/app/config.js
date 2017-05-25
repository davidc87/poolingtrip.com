angular.module('carTrip', ['ui.router', 'satellizer'])
    .config(function ($authProvider) {
        'use strict';

        $authProvider.httpInterceptor = true; // Add Authorization header to HTTP request
        $authProvider.loginOnSignup = true;
        // $authProvider.baseUrl = '/' // API Base URL for the paths below.
        // $authProvider.loginRedirect = '/';
        // $authProvider.logoutRedirect = '/';
        // $authProvider.signupRedirect = '/login';
        // $authProvider.loginUrl = 'http://localhost/auth/login';
        // $authProvider.signupUrl = '/auth/signup';
        // $authProvider.loginRoute = '/login';
        // $authProvider.signupRoute = '/signup';
        // $authProvider.tokenRoot = false; // set the token parent element if the token is not the JSON root
        $authProvider.tokenName = 'token';
        // $authProvider.tokenPrefix = 'satellizer'; // Local Storage name prefix
        // $authProvider.unlinkUrl = '/auth/unlink/';
        // $authProvider.unlinkMethod = 'get';
        $authProvider.authHeader = 'Authorization';
        $authProvider.authToken = 'Bearer';
        $authProvider.withCredentials = true;
        $authProvider.platform = 'browser'; // or 'mobile'
        $authProvider.storage = 'localStorage'; // or 'sessionStorage'

        // /** *
        // Social sites configuration
        // */
        // $authProvider.facebook({
        //     clientId: '603122136500203'
        // });

        $authProvider.google({
            clientId: '281683747160-6tpumhcnllv5oqsjsh6s43b3b9e67k85.apps.googleusercontent.com',
            redirectUri: 'http://localhost/authentication/',
            oauthType: '2.0'
        });

        // // Google
        // $authProvider.google({
        //     url: '/auth/google',
        //     authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
        //     redirectUri: 'http://localhost/authentication/',
        //     requiredUrlParams: ['scope'],
        //     optionalUrlParams: ['display'],
        //     scope: ['profile', 'email'],
        //     scopePrefix: 'openid',
        //     scopeDelimiter: ' ',
        //     display: 'popup',
        //     oauthType: '2.0',
        //     popupOptions: {
        //         width: 452,
        //         height: 633
        //     }
        // });

        // // OAuth 2.0 
        // $authProvider.oauth2({
        //     url: null,
        //     name: null,
        //     scope: null,
        //     scopeDelimiter: null,
        //     clientId: null,
        //     redirectUri: null,
        //     popupOptions: null,
        //     authorizationEndpoint: null,
        //     responseParams: null,
        //     requiredUrlParams: null,
        //     optionalUrlParams: null,
        //     defaultUrlParams: ['response_type', 'client_id', 'redirect_uri'],
        //     responseType: 'code'
        // });

        // // OAuth 1.0 
        // $authProvider.oauth1({
        //     url: null,
        //     name: null,
        //     popupOptions: null
        // }); 
        // //- See more at: https: //ngmodules.com/modules/satellizer#sthash.0IM0cycG.dpuf

    });