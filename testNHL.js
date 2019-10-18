function getNhlSchedule() {

    let teamValue = $("#teamChoiceNHL option:selected").text().replace(/ /g, "_");

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

                            scheduleDiv.append($("<h1>").text("Upcoming Games"))

                            let teamDiv = $("<div>")
                                .attr("class", "schedule")
                                .append($("<h3>").text(response.events[0].strEvent))
                                .append($("<p>").text("Home Team: " + response.events[0].strHomeTeam))
                                .append($("<p>").text("Away Team: " + response.events[0].strAwayTeam))
                                .append($("<p>").text("Date: " + response.events[0].dateEvent))
                                .append($("<h3>").text(response.events[1].strEvent))
                                .append($("<p>").text("Home Team: " + response.events[1].strHomeTeam))
                                .append($("<p>").text("Away Team: " + response.events[1].strAwayTeam))
                                .append($("<p>").text("Date: " + response.events[1].dateEvent))
                                .append($("<h3>").text(response.events[2].strEvent))
                                .append($("<p>").text("Home Team: " + response.events[2].strHomeTeam))
                                .append($("<p>").text("Away Team: " + response.events[2].strAwayTeam))
                                .append($("<p>").text("Date: " + response.events[2].dateEvent))
                                .append($("<h3>").text(response.events[3].strEvent))
                                .append($("<p>").text("Home Team: " + response.events[3].strHomeTeam))
                                .append($("<p>").text("Away Team: " + response.events[3].strAwayTeam))
                                .append($("<p>").text("Date: " + response.events[3].dateEvent))
                                .append($("<h3>").text(response.events[4].strEvent))
                                .append($("<p>").text("Home Team: " + response.events[4].strHomeTeam))
                                .append($("<p>").text("Away Team: " + response.events[4].strAwayTeam))
                                .append($("<p>").text("Date: " + response.events[4].dateEvent));


                            scheduleDiv.append(teamDiv);

                        });

                });



            })
        };


function getNhlRoster() {
    let teamValue = $("#teamChoiceNHL option:selected").text().replace(/ /g, "_");

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