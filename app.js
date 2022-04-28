function initializeENG() {
    var status = "* Offline *";
    if (navigator.onLine) {
        status = "* Online *";
        retrieveContactsENG();
    } else {
        const localStorage = window.localStorage;
        if (localStorage) {
            const SCH_LOC_EDB = localStorage.getItem("SCH_LOC_EDB");
            if (SCH_LOC_EDB) {
                displayContactsENG(JSON.parse(SCH_LOC_EDB));
            }
        }
    }

    document.getElementById("status").innerHTML = status;

    document.body.addEventListener(
            "online",
            function () {
                document.getElementById("status").innerHTML = "Online";
            },
            false
    );
    document.body.addEventListener(
            "offline",
            function () {
                document.getElementById("status").innerHTML = "Offline";
            },
            false
    );
}

function retrieveContactsENG() {
    const xhr = new XMLHttpRequest();
    const url = "SCH_LOC_EDB.json";

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var SCH_LOC_EDB = JSON.parse(xhr.response).SCH_LOC_EDB;
            displayContactsENG(SCH_LOC_EDB);

            // Store contact data to localstorage
            const localStorage = window.localStorage;
            if (localStorage) {
                localStorage.setItem("SCH_LOC_EDB", JSON.stringify(SCH_LOC_EDB));
            }
        }
    };

    xhr.open("get", url);
    xhr.send();
}

function displayContactsENG(SCH_LOC_EDB) {
    SCH_LOC_EDB.forEach(addRowENG);
}
function addRowENG(SCH_LOC_EDB) {
    var tcontent = document.getElementById("tcontent");
    var row = tcontent.insertRow();

    var NO = row.insertCell();
    NO.setAttribute('data-label', "NO");
    NO.innerHTML = SCH_LOC_EDB.A;

    var category = row.insertCell();
    category.setAttribute('data-label', "Category");
    category.innerHTML = SCH_LOC_EDB.B;

    var name = row.insertCell();
    name.setAttribute('data-label', "Name");
    name.innerHTML = SCH_LOC_EDB.D;

    var address = row.insertCell();
    address.setAttribute('data-label', "Address");
    address.innerHTML = SCH_LOC_EDB.F;

    var longitude = row.insertCell();
    longitude.setAttribute('data-label', "Longitude");
    longitude.innerHTML = SCH_LOC_EDB.H;

    var latitude = row.insertCell();
    latitude.setAttribute('data-label', "Latitude");
    latitude.innerHTML = SCH_LOC_EDB.J;

    var easting = row.insertCell();
    easting.setAttribute('data-label', "Easting");
    easting.innerHTML = SCH_LOC_EDB.L;

    var northing = row.insertCell();
    northing.setAttribute('data-label', "Northing");
    northing.innerHTML = SCH_LOC_EDB.N;

    var stuGender = row.insertCell();
    stuGender.setAttribute('data-label', "StuGender");
    stuGender.innerHTML = SCH_LOC_EDB.P;

    var session = row.insertCell();
    session.setAttribute('data-label', "Session");
    session.innerHTML = SCH_LOC_EDB.R;

    var district = row.insertCell();
    district.setAttribute('data-label', "District");
    district.innerHTML = SCH_LOC_EDB.T;

    var financeType = row.insertCell();
    financeType.setAttribute('data-label', "FinanceType");
    financeType.innerHTML = SCH_LOC_EDB.V;

    var level = row.insertCell();
    level.setAttribute('data-label', "Level");
    level.innerHTML = SCH_LOC_EDB.X;

    var telephone = row.insertCell();
    telephone.setAttribute('data-label', "Telephone");
    telephone.innerHTML = SCH_LOC_EDB.Z + " ";

    var fax = row.insertCell();
    fax.setAttribute('data-label', "Fax");
    fax.innerHTML = SCH_LOC_EDB.AB + " ";

    var website = row.insertCell();
    website.setAttribute('data-label', "Website");
    website.innerHTML = SCH_LOC_EDB.AD + " ";

    var religion = row.insertCell();
    religion.setAttribute('data-label', "Religion");
    religion.innerHTML = SCH_LOC_EDB.AF;
}