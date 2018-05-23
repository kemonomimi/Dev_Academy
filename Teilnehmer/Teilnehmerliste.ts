export interface ITrainee {

    vorname?: string;
    nachname?: string;
    email?: string;
    skills?: string[];
    rolle?: string;
    id?: string;
}

export class TraineeList {

    public selectedTrainee: ITrainee = {};
    public allTrainees: ITrainee[] = [];

    constructor() {

        this.load();
    }

    public load() {

        var fileString = localStorage.getItem("teilnehmer");

        this.allTrainees = fileString && fileString.length > 0 ? <ITrainee[]>JSON.parse(fileString) : [];
    }

    public save() {

        var fileString = JSON.stringify(this.allTrainees);

        localStorage.setItem("teilnehmer", fileString);
    }
}