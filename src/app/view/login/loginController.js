angular.module('carTrip')
    .controller('loginController', function ($scope, $http, $auth, $window) {
        var loginControllerVm = this;
        loginControllerVm.googleUserInfo;
        loginControllerVm.fbUserInfo;

        loginControllerVm.login = function (provider) {

            switch (provider) {
                case 'google':
                    {
                        loginControllerVm.googleAuth();
                        break;
                    }
                case 'facebook':
                    {
                        loginControllerVm.facebookAuth();
                    }
            }
        };

        loginControllerVm.facebookAuth = function () {

            FB.init({
                appId: '1227627550680536',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v2.3'
            });
            FB.AppEvents.logPageView();

            FB.login(function (response) {
                if (response.authResponse) {
                    console.log('Welcome!  Fetching your information.... ');
                    FB.api('/me', {
                        fields: 'first_name,last_name,email'
                    }, function (response) {
                        loginControllerVm.fbUserInfo = response;
                        console.log('Good to see you, ' + response.name + '.');
                        console.log(response);
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            });
        }

        loginControllerVm.googleAuth = function () {
            var OAUTHURL = 'https://accounts.google.com/o/oauth2/v2/auth?';
            var VALIDURL = 'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=';
            var SCOPE = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
            var CLIENTID = '281683747160-6tpumhcnllv5oqsjsh6s43b3b9e67k85.apps.googleusercontent.com';
            var REDIRECT = 'http://localhost/authentication/';
            var LOGOUT = 'http://accounts.google.com/Logout';
            var TYPE = 'token';
            var _url = OAUTHURL + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT +
                '&scope=' + SCOPE + '&response_type=' + TYPE + '&include_granted_scopes=true&state=pass-through value';

            //var _url = "https://accounts.google.com/o/oauth2/auth?client_id=281683747160-6tpumhcnllv5oqsjsh6s43b3b9e67k85.apps.googleusercontent.com&redirect_uri=http://localhost/authentication/&scope=https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email&response_type=token";
            var win = $window.open(_url, "window1", 'width=800, height=600');

            var pollTimer = $window.setInterval(function () {
                try {
                    if (win.document.URL.indexOf(REDIRECT) != -1) {
                        var url = win.document.URL;
                        acToken = gup(url, 'access_token');
                        console.log(acToken);
                        tokenType = gup(url, 'token_type');
                        expiresIn = gup(url, 'expires_in');
                        window.clearInterval(pollTimer);
                        win.close();

                        getUserInfo(acToken);
                    }
                } catch (e) {}
            }, 100);

            //credits: http://www.netlobo.com/url_query_string_javascript.html
            function gup(url, name) {
                name = name.replace(/[[]/, "\[").replace(/[]]/, "\]");
                var regexS = "[\?&]" + name + "=([^&#]*)";
                var regex = new RegExp(regexS);
                var results = regex.exec(url);
                if (results == null)
                    return "";
                else
                    return results[1];
            }

            function getUserInfo(token) {
                $http({
                    method: 'GET',
                    url: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + token
                }).then(function (response) {
                    user = response;
                    loginControllerVm.googleUserInfo = user;
                    console.log(user);
                }, function (errorResponse) {
                    console.log(errorResponse);
                });
            }
        }

    });