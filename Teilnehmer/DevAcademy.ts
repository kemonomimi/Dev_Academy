
import { TraineeList } from "./Teilnehmerliste";

function auswahlTeilnehmer() {

    var element = document.getElementById("reskiller");

    var textValue = element["value"];

    var alleTeilnehmer = getTeilnehmerFromFile();

    alleTeilnehmer.forEach(teilnehmer => {
        if (teilnehmer.vorname === textValue) {
            document.getElementById('vorname')["value"] = teilnehmer.vorname;
        }
    });
}

function getTeilnehmerFromFile(): IReskiller[] {

    var fileString = localStorage.getItem("teilnehmer");

    var file: IReskiller[] = fileString && fileString.length > 0 ? <IReskiller[]>JSON.parse(fileString) : [];

    return file;
}

function saveTeilnehmer(teilnehmer: IReskiller[]) {

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

    var selectedTeilnehmer = alleTeilnehmer.filter(teilnehmer => teilnehmer.vorname === vorname)[0];

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

    var traineeList = new TraineeList();

    //var teilnehmer = getTeilnehmerFromFile();

    var select = document.getElementById("reskiller");

    if (select) {

        select.innerHTML = "";

        traineeList.allTrainees.forEach((trainee, index) => {

            var el = document.createElement("option");
            el.text = trainee.vorname || "";
            el.value = trainee.vorname || "";
            //el.id = trainee.email || "";
            select.appendChild(el);
        });

        // for (var i = 0; i < traineeList.allTrainees.length; i++) {
        //     var opt = teilnehmer[i];
        //     var el = document.createElement("option");
        //     el.text = opt.vorname;
        //     el.value = opt.vorname;
        //     el.id = opt.email;
        //     select.appendChild(el);
        // }
    }
}