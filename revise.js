var a = angular.module("app", ['ui.router']);
a.controller("data", function ($scope, $http, $log) {
    $http.get("https://script.googleusercontent.com/a/macros/kiet.edu/echo?user_content_key=H6ogRmkWVoA5Izm6Zzy6QwwQePh4weK1LPVqJLUskp4fKbjqqeYok_2A3f6drbv5jW9woWj0ttRBroB2S4K3t8VIJFqPORHWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_r9LiMH7l0nU2DLGwV8tFzLxXhyDnh7rY_Qz7TFleKAt6G_P1BFKjeO_qn9p3znSRb4he7xOVvz76CXi2dbx_9LQf5YlbfHPCDoRmXSZcGmdGwGxx1tnCHmoEBJ3qF9sE&lib=MJDIHueqZsRw0I9iB8Qh_-7a459lJ8SfB")
        .then(function (response) {
            $scope.emp = response.data.data
            $log.info(response);
            console.log($scope.username);
        });
});
a.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('first', {
            url: '/login.html',
            templateUrl: 'login.html',
            controller: 'login'
        })
        .state('second', {
            url: '/home.html',
            templateUrl: 'index.html',
            controller: ''
        })
        .state('third', {
            url: '/data.html',
            templateUrl: 'yourdata.html',
            controller: 'data'

        })
        .state('forth', {
            url: '/adminpage.html',
            templateUrl: 'adminpage.html',
            controller: 'admin'

        })
        .state('fifth', {
            url: '/userpage.html',
            templateUrl: 'userpage.html',
            controller: 'userCtrl'
        })
        .state('sixth', {
            url: '/register.html',
            templateUrl: 'register.html',
            controller: 'register'
        })

}]);
a.controller("login", function ($scope, $http, $location) {
    $scope.func = function () {
        var email = $scope.email;
        var pass = $scope.password;
        console.log(email);
        console.log(pass);
        var obj = { user_name: email, passw: pass }
        console.log(obj);



        //      $http({
        //          method: "POST",
        //          url:"http://10.21.84.155:8000/login",
        //          data :JSON.stringify(obj),
        //          // header: {
        //          //     "Content-Type": "text/plain"
        //          // }
        //      })
        //      .then(function (response){
        //          console.log(response.status);
        //          if(response.status==200){

        //              Swal.fire(
        //                         'Good job!',
        //                         'You are now logged in ',
        //                         'success'
        //                     )
        //          }

        //      }).catch((err)=>{
        //          if(err.status==400){
        //                      swal.fire({
        //                          icon: 'error',
        //                          title: 'Oops...',
        //                          text: err.data[0].erro
        //                      })
        //                  }
        //          console.log(err)
        //      })
        //  }





        $http.get("https://script.googleusercontent.com/a/macros/kiet.edu/echo?user_content_key=H6ogRmkWVoA5Izm6Zzy6QwwQePh4weK1LPVqJLUskp4fKbjqqeYok_2A3f6drbv5jW9woWj0ttRBroB2S4K3t8VIJFqPORHWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_r9LiMH7l0nU2DLGwV8tFzLxXhyDnh7rY_Qz7TFleKAt6G_P1BFKjeO_qn9p3znSRb4he7xOVvz76CXi2dbx_9LQf5YlbfHPCDoRmXSZcGmdGwGxx1tnCHmoEBJ3qF9sE&lib=MJDIHueqZsRw0I9iB8Qh_-7a459lJ8SfB")
            .then(function (response) {
                $scope.d = (response.data.data);
                
                for (var i = 0; i < $scope.d.length; i++) {
                    if ($scope.password == $scope.d[i].Password && $scope.email == $scope.d[i].RollNo) {
                        Swal.fire(
                            'Good job!',
                            'You are now logged in ',
                            'success'
                        )
                        $location.url("/userpage.html");
                        return;
                        

                    }
                }
                $scope.p = "admin123";
                $scope.e = "admin";
                if ($scope.password == $scope.p && $scope.email == $scope.e) {
                    Swal.fire(
                        'Good job!',
                        'You are now logged in ',
                        'success'
                    )
                    $location.url("/adminpage.html");
                    return;
                }
                else {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'You entered wrong email or password',
                        footer: '<a href="">Forgot Password?</a>'
                    })
                }
                $http.get("https://script.googleusercontent.com/a/macros/kiet.edu/echo?user_content_key=H6ogRmkWVoA5Izm6Zzy6QwwQePh4weK1LPVqJLUskp4fKbjqqeYok_2A3f6drbv5jW9woWj0ttRBroB2S4K3t8VIJFqPORHWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_r9LiMH7l0nU2DLGwV8tFzLxXhyDnh7rY_Qz7TFleKAt6G_P1BFKjeO_qn9p3znSRb4he7xOVvz76CXi2dbx_9LQf5YlbfHPCDoRmXSZcGmdGwGxx1tnCHmoEBJ3qF9sE&lib=MJDIHueqZsRw0I9iB8Qh_-7a459lJ8SfB")
        .then(function (response) {
            $scope.d = response.data.data
            $log.info(response.data.data);
            console.log($scope.d)
        })

            })

    }
});
a.controller("admin", function ($scope, $http, $log) {
    $http.get("https://script.googleusercontent.com/a/macros/kiet.edu/echo?user_content_key=H6ogRmkWVoA5Izm6Zzy6QwwQePh4weK1LPVqJLUskp4fKbjqqeYok_2A3f6drbv5jW9woWj0ttRBroB2S4K3t8VIJFqPORHWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_r9LiMH7l0nU2DLGwV8tFzLxXhyDnh7rY_Qz7TFleKAt6G_P1BFKjeO_qn9p3znSRb4he7xOVvz76CXi2dbx_9LQf5YlbfHPCDoRmXSZcGmdGwGxx1tnCHmoEBJ3qF9sE&lib=MJDIHueqZsRw0I9iB8Qh_-7a459lJ8SfB")
        .then(function (response) {
            $scope.em = response.data
            $log.info(response);
        })
});
a.controller("user", function ($scope, $http, $log) {
    
});
a.controller("userCtrl", function ($scope, $http, $log) {
    
    // $http.get("https://script.googleusercontent.com/a/macros/kiet.edu/echo?user_content_key=H6ogRmkWVoA5Izm6Zzy6QwwQePh4weK1LPVqJLUskp4fKbjqqeYok_2A3f6drbv5jW9woWj0ttRBroB2S4K3t8VIJFqPORHWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_r9LiMH7l0nU2DLGwV8tFzLxXhyDnh7rY_Qz7TFleKAt6G_P1BFKjeO_qn9p3znSRb4he7xOVvz76CXi2dbx_9LQf5YlbfHPCDoRmXSZcGmdGwGxx1tnCHmoEBJ3qF9sE&lib=MJDIHueqZsRw0I9iB8Qh_-7a459lJ8SfB")
    //         .then(function (response) {
    //             $scope.d = (response.data.data);
    //             console.log($scope.d);
    //             for (var i = 0; i < $scope.d.length; i++){
    //                 if ($scope.password == $scope.d[i].Password && $scope.email == $scope.d[i].RollNo){
                        
    //                     console.log('success');
    //                 }
    //             }
            
    //     })
    $scope.func = function () {
        var email = $scope.email;
        var pass = $scope.password;
        console.log(email);
        console.log(pass);
        var obj = { user_name: email, passw: pass }
        console.log(obj);



        //      $http({
        //          method: "POST",
        //          url:"http://10.21.84.155:8000/login",
        //          data :JSON.stringify(obj),
        //          // header: {
        //          //     "Content-Type": "text/plain"
        //          // }
        //      })
        //      .then(function (response){
        //          console.log(response.status);
        //          if(response.status==200){

        //              Swal.fire(
        //                         'Good job!',
        //                         'You are now logged in ',
        //                         'success'
        //                     )
        //          }

        //      }).catch((err)=>{
        //          if(err.status==400){
        //                      swal.fire({
        //                          icon: 'error',
        //                          title: 'Oops...',
        //                          text: err.data[0].erro
        //                      })
        //                  }
        //          console.log(err)
        //      })
        //  }





        $http.get("https://script.googleusercontent.com/a/macros/kiet.edu/echo?user_content_key=H6ogRmkWVoA5Izm6Zzy6QwwQePh4weK1LPVqJLUskp4fKbjqqeYok_2A3f6drbv5jW9woWj0ttRBroB2S4K3t8VIJFqPORHWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_r9LiMH7l0nU2DLGwV8tFzLxXhyDnh7rY_Qz7TFleKAt6G_P1BFKjeO_qn9p3znSRb4he7xOVvz76CXi2dbx_9LQf5YlbfHPCDoRmXSZcGmdGwGxx1tnCHmoEBJ3qF9sE&lib=MJDIHueqZsRw0I9iB8Qh_-7a459lJ8SfB")
            .then(function (response) {
                $scope.d = (response.data.data);
                $scope.showValues = false; 
                for (var i = 0; i < $scope.d.length; i++) {
                    if ($scope.password == $scope.d[i].Password && $scope.email == $scope.d[i].RollNo) {
                        $scope.uniqueName = $scope.d[i].Name;
                        $scope.randomNo = $scope.d[i].Randomno;
                        $scope.Status = $scope.d[i].Status;
                        $scope.showValues = true;
                        console.log($scope.d[i].Randomno);
                        console.log($scope.d[i].Name);
                       
                        return;
                        

                    }
                }
                
                $scope.p = "asdfghjkl";
                $scope.e = "admin";
                if ($scope.password == $scope.p && $scope.email == $scope.e) {
                    Swal.fire(
                        'Good job!',
                        'You are now logged in ',
                        'success'
                    )
                    $location.url("/adminpage.html");
                    return;
                }
                else {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'No Unique No. Found ',
                        footer: '<a href="https://api.whatsapp.com/send?phone=7404313376&text=Hello!">Contact the Admin</a>'
                    })
                }
                $http.get("https://script.googleusercontent.com/a/macros/kiet.edu/echo?user_content_key=H6ogRmkWVoA5Izm6Zzy6QwwQePh4weK1LPVqJLUskp4fKbjqqeYok_2A3f6drbv5jW9woWj0ttRBroB2S4K3t8VIJFqPORHWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_r9LiMH7l0nU2DLGwV8tFzLxXhyDnh7rY_Qz7TFleKAt6G_P1BFKjeO_qn9p3znSRb4he7xOVvz76CXi2dbx_9LQf5YlbfHPCDoRmXSZcGmdGwGxx1tnCHmoEBJ3qF9sE&lib=MJDIHueqZsRw0I9iB8Qh_-7a459lJ8SfB")
        .then(function (response) {
            $scope.d = response.data.data
            $log.info(response.data.data);
            console.log($scope.d)
        })

            })

    }
});
a.controller("register", function ($scope, $http, $location) {
    $scope.funct = function () {
        var email = $scope.email;
        var pass = $scope.password;
        console.log(email);
        console.log(pass);
        var obj = { user_name: email, passw: pass }
        console.log(obj);

        $http.get("https://script.googleusercontent.com/a/macros/kiet.edu/echo?user_content_key=H6ogRmkWVoA5Izm6Zzy6QwwQePh4weK1LPVqJLUskp4fKbjqqeYok_2A3f6drbv5jW9woWj0ttRBroB2S4K3t8VIJFqPORHWm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP_r9LiMH7l0nU2DLGwV8tFzLxXhyDnh7rY_Qz7TFleKAt6G_P1BFKjeO_qn9p3znSRb4he7xOVvz76CXi2dbx_9LQf5YlbfHPCDoRmXSZcGmdGwGxx1tnCHmoEBJ3qF9sE&lib=MJDIHueqZsRw0I9iB8Qh_-7a459lJ8SfB")
            .then(function (response) {
                $scope.d = (response.data);
                for (var i = 0; i < $scope.d.length; i++) {
                    if ($scope.password == $scope.d[i].username && $scope.email == $scope.d[i].email) {
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Allready Exist! ',
                            footer: '<a href="">Forgot Password?</a>'
                        })
                    }
                }
                $scope.p = "admin123";
                $scope.e = "admin";
                if ($scope.password == $scope.p && $scope.email == $scope.e) {

                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Allready Exist! ',
                        footer: '<a href="">Forgot Password?</a>'
                    })
                }
                else {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'You entered wrong email or password',
                        footer: '<a href="">Forgot Password?</a>'
                    })
                }
            })

    }
});
