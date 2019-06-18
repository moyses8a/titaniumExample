var Util = require('lib/Util');

/**
 * SHow details of a recipe
 * 
 * @param {DataModel} Data
 */

function WebServiceRow(data) {
    // Create the recipe view
    var self = Ti.UI.createView({
        top: 0,
        height: '152dp'
    });

    // name label
    var nameView = Ti.UI.createView({
        top: '35dp',
        height: '40dp',
        width: '100%',
        backgroundColor: '#b2ebf2'
    });
    self.add(nameView);

    var nameLabel = Ti.UI.createLabel({
        text: data.name,
        left: '50dp',
        right: '5dp',
        font: {
            fontWeight: 'bold',
            fontSize: '17dp'
        },
        textAlign: 'left',
        color: 'white'
    });
    nameView.add(nameLabel);

    var ageLabel = Ti.UI.createLabel({
        text: "Age: " + data.age,
        left: '20dp',
        top: '80dp',
        color: 'Black',
        width: '210dp',
        height: '20dp',
        font: {
            fontSize: '12dp'
        }
    });
    self.add(ageLabel);

    var ageLabel = Ti.UI.createLabel({
        text: "Gender: " + data.gender,
        left: '20dp',
        top: '110dp',
        color: 'Black',
        width: '210dp',
        height: '20dp',
        font: {
            fontSize: '12dp'
        }
    });
    self.add(ageLabel);
    return self;
}

module.exports = WebServiceRow;