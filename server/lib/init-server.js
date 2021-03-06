/**
 * Created by dd on 12/15/14.
 */

Meteor.publish("patientDiagnoses", function (patientId) {
    return getPatientDiagnoses(patientId);
});

Meteor.publish("patientFlags", function (patientId) {
    return getPatientFlags(patientId);
});

Meteor.publish("patientQuestions", function (flags) {
    return getPatientQuestions(flags);
});

Meteor.publish("patientMeds", function (patientId) {
    return getPatientMeds(patientId);
});

//Meteor.publish("patientChecklist", function (patientId) {
//    return getPatientChecklist(patientId);
//});




//Meteor.publish("mostUsedConditions", function (count) {
//    return Entities.find({etypes: "health-condition" }, {sort: [["used","desc"]]}, {limit: 20});
//});

//Meteor.publish("allFacts", function () {
//    return Facts.find();
//});

//Meteor.publish("currentPatient"), function() {
//    return Entities.find({etypes: "patient" }, {sort: [["used","desc"]]}, {limit: 20});
//});


EasySearch.config({
    'host' : 'localhost:9200'

});

appConfig = function() {
    var config = Assets.getText("config/config.json");
    return JSON.parse(config);
};