
//ruleDialog = null;

//Meteor.startup(function() {
    //saveRule = function (rule) {
    //    //console.log("saving rule: " + JSON.stringify(rule, null, "  "));
    //    Meteor.call("saveRule", rule, function (response) {
    //        if (response) {
    //            if (response.success) {
    //                console.log("Successfully added fact and property.")
    //            } else {
    //                console.log("Error adding property: " + response.error);
    //            }
    //        }
    //    });
    //};


    //saveBlock = function (block) {
    //    var rule = Session.get("rule");
    //    if (!block.idx) block.idx = 0;
    //    setValuePath(rule, block.path, block);
    //    Session.set("rule", rule);
    //};


    //clearClauseSelectors = function () {
    //    var instance = EasySearch.getComponentInstance(
    //        {id: 'predicateChooser', index: 'predicates'}
    //    );
    //    instance.clear();
    //    document.getElementById("predicateChooser").value = "";
    //    var instance2 = EasySearch.getComponentInstance(
    //        {id: 'objectChooser', index: 'entities'}
    //    );
    //    instance2.clear();
    //    document.getElementById("objectChooser").value = "";
    //};

//});