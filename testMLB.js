function getMlbSchedule() {

    let teamValue = $("#teamChoiceMLB option:selected").text().replace(/ /g, "_");

    teamURL = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=" + teamValue,

        $.ajax({
            url: teamURL,
            method: "GET"
        })
            .then(function (response) {

                let Id = response.teams[0].idTeam;
                console.log(Id);
                teamIds.push(Id);
                console.log(teamIds);

            })
            .then(function (promise) {

                teamIds.forEach(element => {
                    let teamId = element;
                    queryTeamInfo = "https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=" + teamId;

                    $.ajax({
                        url: queryTeamInfo,
                        method: "GET"
                    })
                        .then(function (response) {

                            let teamDiv = $("<div>")
                                .attr("class", "standings")
                                .append($("<h3>").text("No upcoming games.").addClass("text-center"))
                                .append($("<p>").text("See you next season!"))


                            scheduleDiv.append(teamDiv);

                        });

                });



            })
};

function getMlbRoster() {

    let teamValue = $("#teamChoiceMLB option:selected").text().replace(/ /g, "_");

    teamURL = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=" + teamValue,

        $.ajax({
            url: teamURL,
            method: "GET"
        })
            .then(function (response) {

                let Id = response.teams[0].idTeam;
                console.log(Id);
                teamIds.push(Id);
                console.log(teamIds);

            })
            .then(function (promise) {

                teamIds.forEach(element => {
                    let teamId = element;
                    queryTeamInfo = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=" + teamId;

                    $.ajax({
                        url: queryTeamInfo,
                        method: "GET"
                    })
                        .then(function (response) {

                            rosterDiv.append($("<h1>").text("Roster"))

                            response.player.forEach(element => {

                                let teamDiv = $("<div>")
                                    .attr("class", "standings")
                                    .append($("<h3>").text(element.strPlayer).addClass("text-center"))
                                    .append($("<p>").text("Date of Birth: " + element.dateBorn))
                                    .append($("<p>").text("Position: " + element.strPosition));


                                rosterDiv.append(teamDiv);


                            })
                        });

                });



            })

};
