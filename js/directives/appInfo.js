/**
 * Created by arnob on 1/10/16.
 */
app.directive('appInfo', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/appInfo.html'
    };
});
