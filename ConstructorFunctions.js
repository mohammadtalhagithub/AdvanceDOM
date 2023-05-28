// Constructor Function ~ Classes in C#
// Name of Constructor func must be FirstLetterCapitalised
// This type of func can be considered similar to a Class in C#, as it represents a blueprint.

/**
 * @constructor Blueprint for creating a housekeeper object.
 * @param {*} name takes string value for KeeperName field of the instance
 * @param {*} age 
 * @param {*} hasWorkPermit takes boolean values.
 * @param {*} languages
 */
function HouseKeeper (name, age, hasWorkPermit, languages) {
    this.KeeperName = name;
    this.KeeperAge = age;
    this.KeeperWorkPermit = hasWorkPermit;
    this.KeeperLanguages = languages;
    this.Clean = function () {
        alert("Cleaning in progress...");
    }
}

// creating an Instance of HouseKeeper
var houseKeeper1 = new HouseKeeper ("Timmy", 19, true, ["French", "English"]);

// console.log(houseKeeper1);