// Third week
// No. 3

function fecz (url, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function (e) {
            if (this.readyState === 4 && this.status === 200) {
                success(xhr.response);
            }
        };
        xhr.onerror = function (e) {
            error(this.status);
        };
        xhr.send(null);
    }


//  Z webinaru

    // function fecz (url, success, error) {
    //         var xhr = new XMLHttpRequest();
    //         xhr.open("GET", url, true);
    //         xhr.onload = function () {
    //             if (xhr.status === 200) {
    //                 success(xhr.responseText);
    //             }else {
    //               error( new Error("Błąd. Kod statusu to "+xhr.status));
    //             }
    //         };
    //         xhr.onerror = function (e) {
    //             error(new Error("Błąd"));
    //         };
    //         xhr.send();
    //     }

    fecz("http://code.eduweb.pl/bootcamp/users/", function (data) {
        console.log("Success");
        console.log(data);
    }, function (err) {
        console.log("Blad");
        console.log(err);
    });
