define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TraineeList = (function () {
        function TraineeList() {
            this.selectedTrainee = {};
            this.allTrainees = [];
            this.load();
        }
        TraineeList.prototype.load = function () {
            var fileString = localStorage.getItem("teilnehmer");
            this.allTrainees = fileString && fileString.length > 0 ? JSON.parse(fileString) : [];
        };
        TraineeList.prototype.save = function () {
            var fileString = JSON.stringify(this.allTrainees);
            localStorage.setItem("teilnehmer", fileString);
        };
        return TraineeList;
    }());
    exports.TraineeList = TraineeList;
});
//# sourceMappingURL=Teilnehmerliste.js.map