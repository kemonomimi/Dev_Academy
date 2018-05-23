define(["require", "exports", "./Teilnehmerliste"], function (require, exports, Teilnehmerliste_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function auswahlTeilnehmer() {
        var element = document.getElementById("reskiller");
        var textValue = element["value"];
        var alleTeilnehmer = getTeilnehmerFromFile();
        alleTeilnehmer.forEach(function (teilnehmer) {
            if (teilnehmer.vorname === textValue) {
                document.getElementById('vorname')["value"] = teilnehmer.vorname;
            }
        });
    }
    function getTeilnehmerFromFile() {
        var fileString = localStorage.getItem("teilnehmer");
        var file = fileString && fileString.length > 0 ? JSON.parse(fileString) : [];
        return file;
    }
    function saveTeilnehmer(teilnehmer) {
        var fileString = JSON.stringify(teilnehmer);
        localStorage.setItem("teilnehmer", fileString);
        updateDropdown();
    }
    function hinzufuegen() {
        var vorname = document.getElementById('vorname')["value"];
        var nachname = document.getElementById('nachname')["value"];
        var email = document.getElementById('email')["value"];
        var rolle = document.getElementById('rolle')["value"];
        var skills = document.getElementById('skills')["value"];
        var file = getTeilnehmerFromFile();
        file.push({
            vorname: vorname,
            nachname: nachname,
            email: email,
            rolle: rolle,
            skills: skills,
            id: new Date().getTime().toString()
        });
        saveTeilnehmer(file);
    }
    function loeschen() {
    }
    function change() {
        var vorname = document.getElementById('vorname')["value"];
        var alleTeilnehmer = getTeilnehmerFromFile();
        var selectedTeilnehmer = alleTeilnehmer.filter(function (teilnehmer) { return teilnehmer.vorname === vorname; })[0];
        selectedTeilnehmer.vorname = vorname;
        selectedTeilnehmer.nachname = document.getElementById('nachname')["value"];
        selectedTeilnehmer.email = document.getElementById('email')["value"];
        selectedTeilnehmer.rolle = document.getElementById('rolle')["value"];
        selectedTeilnehmer.skills = document.getElementById('skills')["value"];
        saveTeilnehmer([]);
    }
    function reset() {
        saveTeilnehmer([]);
        updateDropdown();
    }
    function ausgabe() {
        var fileString = localStorage.getItem("teilnehmer");
        alert(fileString);
    }
    function updateDropdown() {
        var traineeList = new Teilnehmerliste_1.TraineeList();
        var select = document.getElementById("reskiller");
        if (select) {
            select.innerHTML = "";
            traineeList.allTrainees.forEach(function (trainee, index) {
                var el = document.createElement("option");
                el.text = trainee.vorname || "";
                el.value = trainee.vorname || "";
                select.appendChild(el);
            });
        }
    }
});
//# sourceMappingURL=DevAcademy.js.map