let promptly = require('promptly');

void async function () {
    let command = undefined;
    while (command !== 'exit') {

        let Adults = await promptly.prompt("How many adults for booking");
        let Children = await promptly.prompt("How many Children for booking");
        let Infant = await promptly.prompt("How many Infant for booking");


        if (((Adults > 3 && Children > 3 && Infant > 3)) || (parseInt(Adults) + parseInt(Children) > 7) || Adults < 1 ||((Adults >= 3 && Children >= 3 && Infant >= 3)&&(parseInt(Adults) + parseInt(Children) + parseInt(Infant)>9))) {
            console.log("Booking Rejected");
        }
        else if ((parseInt(Adults) + parseInt(Children) == 7) && Infant > 0 && Infant>2) {
            console.log("Can be fit in 2 rooms")
        }
        else if (Adults == 1 || (Adults == 3 && Children == 3 && Infant == 3)) {
            console.log("Can be fit in 1 rooms")
        }
        else if (Adults > 1) {
            if (Children > 5)
                console.log("Can be fit in 2 rooms")
            else
                console.log("Can be fit in 1 room")
        }
        else
        console.log("Booking rejected")


    }

}();