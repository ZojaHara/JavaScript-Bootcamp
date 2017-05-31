// No. 4

function getJSON (url, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function (e) {
            if (this.readyState === 4 && this.status === 200) {
                success(JSON.parse(xhr.response));
            }
        };
        xhr.onerror = function (e) {
            error(this.status);
        };
        xhr.send(null);
    }



    //  Z webinaru

        // function getJSON(url, success, error) {
        //         var xhr = new XMLHttpRequest();
        //         xhr.open("GET", url, true);
        //         xhr.setRequestHeader("Accept", "application/json");
        //         xhr.onload = function () {
        //             if (xhr.status === 200) {
        //                 success(JSON.parse(xhr.responseText));
        //             }else {
        //               error( new Error("Błąd. Kod statusu to "+xhr.status));
        //             }
        //         };
        //         xhr.onerror = function (e) {
        //             error(new Error("Błąd"));
        //         };
        //         xhr.send();
        //     }

    getJSON("http://code.eduweb.pl/bootcamp/users/", function (data) {
        console.log("Success");
        console.log(data);
    }, function (err) {
        console.log("Błąd");
        console.log(err);
    });
