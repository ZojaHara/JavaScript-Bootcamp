// No. 4

        function getJSON(url, success, error) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, true);
                xhr.setRequestHeader("Accept", "application/json");
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        success(JSON.parse(xhr.responseText));
                    }else {
                      error( new Error("Błąd. Kod statusu to "+xhr.status));
                    }
                };
                xhr.onerror = function (e) {
                    error(new Error("Błąd"));
                };
                xhr.send();
            }

    const group = new WeakMap();

    function clickEvent() {
      let contentOne = group.get(this);
      this.innerHTML = `${contentOne.name} <a href="${contentOne.email}">${contentOne.email}<a/>`;
    }

    getJSON("http://code.eduweb.pl/bootcamp/json/", function (data) {

        if(!Array.isArray(data)) return;

        var ul = document.createElement("ul");
        document.body.appendChild(ul);

        for (let item of data) {
          var li = document.createElement("li");
          group.set(li, item);

          li.textContent = item.name;

          li.addEventListener("click", clickEvent, false);

          ul.appendChild(li);

        }

    }, function (err) {
        console.log("Błąd");
        console.log(err);
    });
