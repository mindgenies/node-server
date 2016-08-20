InfoplumDataGrid = function () {
    return {
        restrict: "E",
        templateUrl: window.InfoplumControlsUrl + "DataGrid/datagrid.html",
        transclude: true,
        scope: {
            config: "=",
            metalsdata: "=",
            data: "=",
            onitemselected: "&",
            selecteditem: "=",
            bind: '=',
            datafilterlimit:'='
        },
        link: function ($scope, element, atts) {
            //window.rioControls.datagrid = true;
          //  console.log('rahul');
            $scope.arrowleft = window.InfoplumControlsUrl + "DataGrid/Images/arrow_left.png";

            window.loadDependency(window.InfoplumControlsUrl + 'DataGrid/datagrid.min.css');
           // console.log('config', $scope.config);
        }
    };
}