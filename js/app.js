
var app = angular.module('sysUserApp', ['ngAnimate','angularUtils.directives.dirPagination']);
    
    app.controller('mainController',function($http) {
        var vm = this; //view model

        // DATA
        vm.users = []; // declare the empty array
        vm.pageno = 1; // start the app on page 1
        vm.total_count = 0; // stores the total number of results (returned by API)
        vm.itemsPerPage = 500; //could make this dynamic via a dropdown
        vm.getData = function(pageno) { // fetches the data on page change ... should be a factory
            vm.users = [];
            $http({
                url: 'https://cbsdev.service-now.com/api/now/table/sys_user?'+
            'sysparm_query=active=true^companyISNOTEMPTY^first_nameISNOTEMPTY^last_nameISNOTEMPTY^ORDERBYlast_name^ORDERBYASClast_name&'+
            'sysparm_fields=email%2Clast_name%2Ccompany%2Cdepartment%2Cactive%2Cfirst_name%2Cu_office%2Clocation&sysparm_display_value=true&'+
            'sysparm_limit='+vm.itemsPerPage+'&sysparm_offset='+vm.itemsPerPage*vm.total_count,
                method: "GET",
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                    'Authorization' : 'Bearer ljXz9Y2ciquOkCIaOI1u6o7LamjxuIRa8i86IHxNYKVm9O04gKkDccuuE-naHoXegUwXEZXZCyoLv7PeiapYVw'
                }
            })
            .success(function(response) {
                vm.users = response.result; //this should get the data for the current page
                vm.total_count = response.total_count; // total data count
            });
            
        };
        vm.getData(vm.pageno); // call the function for initial data
        

            

    });
        
        
        
        
        
        
        
 