// Week fifth

// No. 1


let button = document.querySelector(".button");

function getJSON (url, success, error) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function (e) {
            if (this.readyState === 4 && this.status === 200) {
                success(JSON.parse(xhr.response));
            }
        };
        xhr.onerror = function (e) {
            error(this.status);
        };
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send(null);
    }


    button.addEventListener("click", function() {
      getJSON("http://code.eduweb.pl/bootcamp/json/", function (data) {
          for(let i=0; i<data.length; i++) {
            let p = document.createElement("p");
            let{name,
                username,
                email,
                address: {
                  geo:[first, second]
                },
                website,
                company: {
                  name:companyName
                }
              } = data[i] || {};
            p.innerHTML =  `Nazwisko: ${name} <br>
                            Nazwa użytkownika: ${username}<br>
                            E-mail:  ${email}<br>
                            Adres: <a href=“http://bing.com/maps/default.aspx?cp=${first}~${second}”>Pokaż na mapie</a><br>
                            Strona www: <a href="${website}">${website}</a><br>
                            Firma: ${companyName}`;
            document.body.insertBefore(p, button);
          }

      }, function (err) {
          console.log("Błąd");
          console.log(err);
      });
    }, false);
