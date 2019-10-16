$(document).ready(function () {

    let mlbQueryURL = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4424"
    let nflQueryURL = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4391"
    let nbaQueryURL = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387"
    let nhlQueryURL = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4380"

    let teamIds = [];

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    const nflId = "4391"
    const mlbId = "4424"
    const nhlId = "4380"
    const nbaId = "4387"

    const todaysEvents = "https://www.thesportsdb.com/api/v1/json/1/eventstv.php?d=" + today + "&a=United%20States"

    const NhlStandingsURL = "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=" + nhlId + "&s=1920"
    const NflStandingsURL = "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=" + nflId + "&s=1718"
    const NbaStandingsURL = "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=" + nbaId + "&s=1819"
    const MlbStandingsURL = "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=" + mlbId + "&s=1718"

    let standingsDiv = $("#standings")
    let scheduleDiv = $("#schedule")
    let rosterDiv = $("#roster")
    let todaysDiv = $("#todaysEvents")

    const mlbStandings = {
        "table": [{
            "name": "Houston Astros",
            "goalsfor": 920,
            "goalsagainst": 640,
            "win": 107,
            "loss": 55,
        },
        {
            "name": "Los Angeles Dodgers",
            "goalsfor": 886,
            "goalsagainst": 613,
            "win": 106,
            "loss": 56,
        },
        {
            "name": "New York Yankees",
            "goalsfor": 943,
            "goalsagainst": 739,
            "win": 103,
            "loss": 59,
        },
        {
            "name": "Minnesota Twins",
            "goalsfor": 939,
            "goalsagainst": 754,
            "win": 101,
            "loss": 61,
        },
        {
            "name": "Atlanta Braves",
            "goalsfor": 855,
            "goalsagainst": 743,
            "win": 97,
            "loss": 65,
        },
        {
            "name": "Oakland Athletics",
            "goalsfor": 845,
            "goalsagainst": 680,
            "win": 97,
            "loss": 65,
        },
        {
            "name": "Tampa Bay Rays",
            "goalsfor": 769,
            "goalsagainst": 656,
            "win": 96,
            "loss": 66,
        },
        {
            "name": "Cleveland Indians",
            "goalsfor": 769,
            "goalsagainst": 657,
            "win": 93,
            "loss": 69,
        },
        {
            "name": "Washington Nationals",
            "goalsfor": 873,
            "goalsagainst": 724,
            "win": 93,
            "loss": 69,
        },
        {
            "name": "St. Louis Cardinals",
            "goalsfor": 764,
            "goalsagainst": 662,
            "win": 91,
            "loss": 71,
        },
        {
            "name": "Milwaukee Brewers",
            "goalsfor": 769,
            "goalsagainst": 766,
            "win": 89,
            "loss": 73,
        },
        {
            "name": "New York Mets",
            "goalsfor": 791,
            "goalsagainst": 737,
            "win": 86,
            "loss": 76,
        },
        {
            "name": "Arizona Diamondbacks",
            "goalsfor": 813,
            "goalsagainst": 743,
            "win": 85,
            "loss": 77,
        },
        {
            "name": "Boston Red Sox",
            "goalsfor": 901,
            "goalsagainst": 828,
            "win": 84,
            "loss": 78,
        },
        {
            "name": "Chicago Cubs",
            "goalsfor": 814,
            "goalsagainst": 717,
            "win": 84,
            "loss": 78,
        },
        {
            "name": "Philadelphia Phillies",
            "goalsfor": 774,
            "goalsagainst": 794,
            "win": 81,
            "loss": 81,
        },
        {
            "name": "Texas Rangers",
            "goalsfor": 810,
            "goalsagainst": 878,
            "win": 78,
            "loss": 84,
        },
        {
            "name": "San Francisco Giants",
            "goalsfor": 678,
            "goalsagainst": 773,
            "win": 77,
            "loss": 85,
        },
        {
            "name": "Cincinnati Reds",
            "goalsfor": 701,
            "goalsagainst": 711,
            "win": 75,
            "loss": 87,
        },
        {
            "name": "Chicago White Sox",
            "goalsfor": 708,
            "goalsagainst": 832,
            "win": 72,
            "loss": 89,
        },
        {
            "name": "Los Angeles Angels",
            "goalsfor": 769,
            "goalsagainst": 868,
            "win": 72,
            "loss": 90,
        },
        {
            "name": "Colorado Rockies",
            "goalsfor": 835,
            "goalsagainst": 958,
            "win": 71,
            "loss": 91,
        },
        {
            "name": "San Diego Padres",
            "goalsfor": 682,
            "goalsagainst": 789,
            "win": 70,
            "loss": 92,
        },
        {
            "name": "Pittsburgh Pirates",
            "goalsfor": 758,
            "goalsagainst": 911,
            "win": 69,
            "loss": 93,
        },
        {
            "name": "Seattle Mariners",
            "goalsfor": 758,
            "goalsagainst": 893,
            "win": 68,
            "loss": 94,
        },
        {
            "name": "Toronto Blue Jays",
            "goalsfor": 726,
            "goalsagainst": 828,
            "win": 67,
            "loss": 95,
        },
        {
            "name": "Kansas City Royals",
            "goalsfor": 691,
            "goalsagainst": 869,
            "win": 59,
            "loss": 103,
        },
        {
            "name": "Miami Marlins",
            "goalsfor": 615,
            "goalsagainst": 808,
            "win": 57,
            "loss": 105,
        },
        {
            "name": "Baltimore Orioles",
            "goalsfor": 729,
            "goalsagainst": 981,
            "win": 54,
            "loss": 108,
        },
        {
            "name": "Detriot Tigers",
            "goalsfor": 582,
            "goalsagainst": 915,
            "win": 47,
            "loss": 114,
        }
        ]
    }

    const nflStandings = {
        "table": [{
            "name": "New England Patriots",
            "goalsfor": 190,
            "goalsagainst": 48,
            "win": 6,
            "loss": 0,
        },
        {
            "name": "San Francisco 49ers",
            "goalsfor": 147,
            "goalsagainst": 64,
            "win": 5,
            "loss": 0,
        },
        {
            "name": "Green Bay Packers",
            "goalsfor": 142,
            "goalsagainst": 15,
            "win": 5,
            "loss": 1,
        },
        {
            "name": "New Orleans Saints",
            "goalsfor": 128,
            "goalsagainst": 122,
            "win": 5,
            "loss": 1,
        },
        {
            "name": "Seattle Seahawks",
            "goalsfor": 165,
            "goalsagainst": 146,
            "win": 5,
            "loss": 1,
        },
        {
            "name": "Buffalo Bills",
            "goalsfor": 90,
            "goalsagainst": 70,
            "win": 4,
            "loss": 1,
        },
        {
            "name": "Houston Texans",
            "goalsfor": 162,
            "goalsagainst": 134,
            "win": 4,
            "loss": 2,
        },
        {
            "name": "Kansas City Chiefs",
            "goalsfor": 172,
            "goalsagainst": 144,
            "win": 4,
            "loss": 2,
        },
        {
            "name": "Baltimore Ravens",
            "goalsfor": 184,
            "goalsagainst": 140,
            "win": 4,
            "loss": 2,
        },
        {
            "name": "Minnesota Vikings",
            "goalsfor": 150,
            "goalsagainst": 93,
            "win": 4,
            "loss": 2,
        },
        {
            "name": "Carolina Panthers",
            "goalsfor": 166,
            "goalsagainst": 133,
            "win": 4,
            "loss": 2,
        },
        {
            "name": "Oakland Raiders",
            "goalsfor": 103,
            "goalsagainst": 123,
            "win": 3,
            "loss": 2,
        },
        {
            "name": "Indianapolis Colts",
            "goalsfor": 113,
            "goalsagainst": 115,
            "win": 3,
            "loss": 2,
        },
        {
            "name": "Chicago Bears",
            "goalsfor": 87,
            "goalsagainst": 69,
            "win": 3,
            "loss": 2,
        },
        {
            "name": "Philadelphia Eagles",
            "goalsfor": 161,
            "goalsagainst": 149,
            "win": 3,
            "loss": 3,
        },
        {
            "name": "Dallas Cowboys",
            "goalsfor": 153,
            "goalsagainst": 114,
            "win": 3,
            "loss": 3,
        },
        {
            "name": "Los Angeleas Rams",
            "goalsfor": 153,
            "goalsagainst": 154,
            "win": 3,
            "loss": 3,
        },
        {
            "name": "Detriot Lions",
            "goalsfor": 119,
            "goalsagainst": 118,
            "win": 2,
            "loss": 2,
        },
        {
            "name": "Arizona Cardinals",
            "goalsfor": 134,
            "goalsagainst": 171,
            "win": 2,
            "loss": 3,
        },
        {
            "name": "Cleveland Browns",
            "goalsfor": 120,
            "goalsagainst": 154,
            "win": 2,
            "loss": 4,
        },
        {
            "name": "Jacksonville Jaguars",
            "goalsfor": 117,
            "goalsagainst": 131,
            "win": 2,
            "loss": 4,
        },
        {
            "name": "Denver Broncos",
            "goalsfor": 106,
            "goalsagainst": 106,
            "win": 2,
            "loss": 4,
        },
        {
            "name": "Pittsburgh Steelers",
            "goalsfor": 123,
            "goalsagainst": 131,
            "win": 2,
            "loss": 4,
        },
        {
            "name": "Los Angeles Chargers",
            "goalsfor": 120,
            "goalsagainst": 118,
            "win": 2,
            "loss": 4,
        },
        {
            "name": "Tennessee Titans",
            "goalsfor": 98,
            "goalsagainst": 92,
            "win": 2,
            "loss": 4,
        },
        {
            "name": "New York Giants",
            "goalsfor": 111,
            "goalsagainst": 160,
            "win": 2,
            "loss": 4,
        },
        {
            "name": "Tampa Bay Buccaneers",
            "goalsfor": 173,
            "goalsagainst": 185,
            "win": 2,
            "loss": 4,
        },
        {
            "name": "New York Jets",
            "goalsfor": 63,
            "goalsagainst": 123,
            "win": 1,
            "loss": 4,
        },
        {
            "name": "Atlanta Falcons",
            "goalsfor": 135,
            "goalsagainst": 186,
            "win": 1,
            "loss": 5,
        },
        {
            "name": "Washington Redskins",
            "goalsfor": 90,
            "goalsagainst": 167,
            "win": 1,
            "loss": 5,
        },
        {
            "name": "Miami Dolphins",
            "goalsfor": 42,
            "goalsagainst": 180,
            "win": 0,
            "loss": 5,
        },
        {
            "name": "Cincinnati Bengals",
            "goalsfor": 97,
            "goalsagainst": 159,
            "win": 0,
            "loss": 5,
        }

        ]
    }



    function getNhlStandings() {

        $.ajax({
            url: NhlStandingsURL,
            method: "GET"
        })
            .then(function (response) {

                response.table.forEach(element => {
                    console.log("Team: " + element.name)
                    console.log("Goals For: " + element.goalsfor)
                    console.log("Goals Against: " + element.goalsagainst)
                    console.log("Wins: " + element.win)
                    console.log("Losses: " + element.loss)
                    console.log("Points: " + element.total);
                    console.log("-------------------------")

                    let teamDiv = $("<div>")
                        .attr("class", "standings")
                        .append($("<h3>").text("Team: " + element.name).addClass("text-center"))
                        .append($("<p>").text("Goals For: " + element.goalsfor))
                        .append($("<p>").text("Goals Against: " + element.goalsagainst))
                        .append($("<p>").text("Wins: " + element.win))
                        .append($("<p>").text("Losses: " + element.loss))
                        .append($("<p>").text("Points: " + element.total));


                    standingsDiv.append(teamDiv);


                })

            });


    };

    function getMlbStandings() {

        mlbStandings.table.forEach(element => {

            let teamDiv = $("<div>")
                .attr("class", "standings")
                .append($("<h3>").text("Team: " + element.name).addClass("text-center"))
                .append($("<p>").text("Runs For: " + element.goalsfor))
                .append($("<p>").text("Runs Against: " + element.goalsagainst))
                .append($("<p>").text("Wins: " + element.wins))
                .append($("<p>").text("Losses: " + element.loss));


            standingsDiv.append(teamDiv);



        });
    };


    function getNflStandings() {

        nflStandings.table.forEach(element => {

            let teamDiv = $("<div>")
                .attr("class", "standings")
                .append($("<h3>").text("Team: " + element.name).addClass("text-center"))
                .append($("<p>").text("Points For: " + element.goalsfor))
                .append($("<p>").text("Points Against: " + element.goalsagainst))
                .append($("<p>").text("Wins: " + element.wins))
                .append($("<p>").text("Losses: " + element.loss));


            standingsDiv.append(teamDiv);



        });


    };

    function getNbaStandings() {

        $.ajax({
            url: NbaStandingsURL,
            method: "GET"
        })
            .then(function (response) {

                console.log(response);

                response.table.forEach(element => {
                    console.log("Team: " + element.name)
                    console.log("Points For: " + element.goalsfor)
                    console.log("Goals Points Against: " + element.goalsagainst)
                    console.log("Wins: " + element.win)
                    console.log("Losses: " + element.loss)


                    let teamDiv = $("<div>")
                        .attr("class", "standings")
                        .append($("<h3>").text("Team: " + element.name).addClass("text-center"))
                        .append($("<p>").text("Points For: " + element.goalsfor))
                        .append($("<p>").text("Points Against: " + element.goalsagainst))
                        .append($("<p>").text("Wins: " + element.wins))
                        .append($("<p>").text("Losses: " + element.loss))
                        .append($("<p>").text("Points: " + element.total));


                    standingsDiv.append(teamDiv);

                })

            });


    };

    function getMlbTeamInfo() {

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
                .then(function (promise) {

                    teamIds.forEach(element => {
                        let teamId = element;
                        queryTeamInfo = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=" + teamId;

                        $.ajax({
                            url: queryTeamInfo,
                            method: "GET"
                        })
                            .then(function (response) {

                                response.player.forEach(element => {

                                    let teamDiv = $("<div>")
                                        .attr("class", "standings")
                                        .append($("<h3>").text("Player Name: " + element.strPlayer).addClass("text-center"))
                                        .append($("<p>").text("Date of Birth: " + element.dateBorn))
                                        .append($("<p>").text("Position: " + element.strPosition));


                                    rosterDiv.append(teamDiv);


                                })
                            });

                    });



                })

    };

    function getNhlTeamInfo() {

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

                                let teamDiv = $("<div>")
                                    .attr("class", "schedule")
                                    .append($("<h3>").text("Matchup: " + response.events[0].strEvent))
                                    .append($("<p>").text("Home Team: " + response.events[0].strHomeTeam))
                                    .append($("<p>").text("Away Team: " + response.events[0].strAwayTeam))
                                    .append($("<p>").text("Date: " + response.events[0].dateEvent))
                                    .append($("<p>").text("Time: " + response.events[0].strTime))
                                    .append($("<h3>").text("Matchup: " + response.events[1].strEvent))
                                    .append($("<p>").text("Home Team: " + response.events[1].strHomeTeam))
                                    .append($("<p>").text("Away Team: " + response.events[1].strAwayTeam))
                                    .append($("<p>").text("Date: " + response.events[1].dateEvent))
                                    .append($("<p>").text("Time: " + response.events[1].strTime))
                                    .append($("<h3>").text("Matchup: " + response.events[2].strEvent))
                                    .append($("<p>").text("Home Team: " + response.events[2].strHomeTeam))
                                    .append($("<p>").text("Away Team: " + response.events[2].strAwayTeam))
                                    .append($("<p>").text("Date: " + response.events[2].dateEvent))
                                    .append($("<p>").text("Time: " + response.events[2].strTime))
                                    .append($("<h3>").text("Matchup: " + response.events[3].strEvent))
                                    .append($("<p>").text("Home Team: " + response.events[3].strHomeTeam))
                                    .append($("<p>").text("Away Team: " + response.events[3].strAwayTeam))
                                    .append($("<p>").text("Date: " + response.events[3].dateEvent))
                                    .append($("<p>").text("Time: " + response.events[3].strTime))
                                    .append($("<h3>").text("Matchup: " + response.events[4].strEvent))
                                    .append($("<p>").text("Home Team: " + response.events[4].strHomeTeam))
                                    .append($("<p>").text("Away Team: " + response.events[4].strAwayTeam))
                                    .append($("<p>").text("Date: " + response.events[4].dateEvent))
                                    .append($("<p>").text("Time: " + response.events[4].strTime));


                                scheduleDiv.append(teamDiv);

                            });

                    });



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

                                response.player.forEach(element => {

                                    let teamDiv = $("<div>")
                                        .attr("class", "standings")
                                        .append($("<h3>").text("Player Name: " + element.strPlayer).addClass("text-center"))
                                        .append($("<p>").text("Date of Birth: " + element.dateBorn))
                                        .append($("<p>").text("Position: " + element.strPosition));


                                    rosterDiv.append(teamDiv);
                                })
                            });

                    });



                })

    };

    function getNflTeamInfo() {

        let teamValue = $("#teamChoiceNFL option:selected").text().replace(/ /g, "_");

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
                                    .attr("class", "schedule")
                                    .append($("<h3>").text("Matchup: " + response.events[0].strEvent))
                                    .append($("<p>").text("Home Team: " + response.events[0].strHomeTeam))
                                    .append($("<p>").text("Away Team: " + response.events[0].strAwayTeam))
                                    .append($("<p>").text("Date: " + response.events[0].dateEvent))
                                    .append($("<p>").text("Time: " + response.events[0].strTime))
                                    .append($("<p>").text("Week: " + response.events[0].intRound))
                                    .append($("<h3>").text("Matchup: " + response.events[1].strEvent))
                                    .append($("<p>").text("Home Team: " + response.events[1].strHomeTeam))
                                    .append($("<p>").text("Away Team: " + response.events[1].strAwayTeam))
                                    .append($("<p>").text("Date: " + response.events[1].dateEvent))
                                    .append($("<p>").text("Time: " + response.events[1].strTime))
                                    .append($("<p>").text("Week: " + response.events[1].intRound))
                                    .append($("<h3>").text("Matchup: " + response.events[2].strEvent))
                                    .append($("<p>").text("Home Team: " + response.events[2].strHomeTeam))
                                    .append($("<p>").text("Away Team: " + response.events[2].strAwayTeam))
                                    .append($("<p>").text("Date: " + response.events[2].dateEvent))
                                    .append($("<p>").text("Time: " + response.events[2].strTime))
                                    .append($("<p>").text("Week: " + response.events[2].intRound))
                                    .append($("<h3>").text("Matchup: " + response.events[3].strEvent))
                                    .append($("<p>").text("Home Team: " + response.events[3].strHomeTeam))
                                    .append($("<p>").text("Away Team: " + response.events[3].strAwayTeam))
                                    .append($("<p>").text("Date: " + response.events[3].dateEvent))
                                    .append($("<p>").text("Time: " + response.events[3].strTime))
                                    .append($("<p>").text("Week: " + response.events[3].intRound))
                                    .append($("<h3>").text("Matchup: " + response.events[4].strEvent))
                                    .append($("<p>").text("Home Team: " + response.events[4].strHomeTeam))
                                    .append($("<p>").text("Away Team: " + response.events[4].strAwayTeam))
                                    .append($("<p>").text("Date: " + response.events[4].dateEvent))
                                    .append($("<p>").text("Time: " + response.events[4].strTime))
                                    .append($("<p>").text("Week: " + response.events[4].intRound));


                                scheduleDiv.append(teamDiv);


                            });

                    });



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

                                response.player.forEach(element => {

                                    let teamDiv = $("<div>")
                                        .attr("class", "standings")
                                        .append($("<h3>").text("Player Name: " + element.strPlayer).addClass("text-center"))
                                        .append($("<p>").text("Date of Birth: " + element.dateBorn))
                                        .append($("<p>").text("Position: " + element.strPosition));


                                    rosterDiv.append(teamDiv);
                                })
                            });

                    });



                })

    };

    function getNbaTeamInfo() {

        let teamValue = $("#teamChoiceNBA option:selected").text().replace(/ /g, "_");

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
                                    .attr("class", "schedule")
                                    .append($("<h3>").text("Matchup: " + response.events[0].strEvent))
                                    .append($("<p>").text("Home Team: " + response.events[0].strHomeTeam))
                                    .append($("<p>").text("Away Team: " + response.events[0].strAwayTeam))
                                    .append($("<p>").text("Date: " + response.events[0].dateEvent))
                                    .append($("<p>").text("Time: " + response.events[0].strTime))
                                    .append($("<p>").text("Week: " + response.events[0].intRound))
                                    .append($("<h3>").text("Matchup: " + response.events[1].strEvent))
                                    .append($("<p>").text("Home Team: " + response.events[1].strHomeTeam))
                                    .append($("<p>").text("Away Team: " + response.events[1].strAwayTeam))
                                    .append($("<p>").text("Date: " + response.events[1].dateEvent))
                                    .append($("<p>").text("Time: " + response.events[1].strTime))
                                    .append($("<p>").text("Week: " + response.events[1].intRound))
                                    .append($("<h3>").text("Matchup: " + response.events[2].strEvent))
                                    .append($("<p>").text("Home Team: " + response.events[2].strHomeTeam))
                                    .append($("<p>").text("Away Team: " + response.events[2].strAwayTeam))
                                    .append($("<p>").text("Date: " + response.events[2].dateEvent))
                                    .append($("<p>").text("Time: " + response.events[2].strTime))
                                    .append($("<p>").text("Week: " + response.events[2].intRound))
                                    .append($("<h3>").text("Matchup: " + response.events[3].strEvent))
                                    .append($("<p>").text("Home Team: " + response.events[3].strHomeTeam))
                                    .append($("<p>").text("Away Team: " + response.events[3].strAwayTeam))
                                    .append($("<p>").text("Date: " + response.events[3].dateEvent))
                                    .append($("<p>").text("Time: " + response.events[3].strTime))
                                    .append($("<p>").text("Week: " + response.events[3].intRound))
                                    .append($("<h3>").text("Matchup: " + response.events[4].strEvent))
                                    .append($("<p>").text("Home Team: " + response.events[4].strHomeTeam))
                                    .append($("<p>").text("Away Team: " + response.events[4].strAwayTeam))
                                    .append($("<p>").text("Date: " + response.events[4].dateEvent))
                                    .append($("<p>").text("Time: " + response.events[4].strTime))
                                    .append($("<p>").text("Week: " + response.events[4].intRound));


                                scheduleDiv.append(teamDiv);

                            });

                    });



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

                                response.player.forEach(element => {

                                    let teamDiv = $("<div>")
                                        .attr("class", "standings")
                                        .append($("<h3>").text("Player Name: " + element.strPlayer).addClass("text-center"))
                                        .append($("<p>").text("Date of Birth: " + element.dateBorn))
                                        .append($("<p>").text("Position: " + element.strPosition));


                                    rosterDiv.append(teamDiv);
                                })
                            });

                    });



                })
    };


    // Getting todays events 

    function getTodaysEvents() {

        $.ajax({
            url: todaysEvents,
            method: "GET"
        })
            .then(function (response) {

                response.tvevents.forEach(element => {

                    let teamDiv = $("<div>")
                        .attr("class", "standings")
                        .append($("<h4>").text("Sport: " + element.strSport).addClass("text-center"))
                        .append($("<p>").text("Event: " + element.strEvent))
                        .append($("<p>").text("Time: " + element.strTime))
                        .append($("<p>").text("Channel: " + element.strChannel));


                    todaysDiv.append(teamDiv);

                });



            });
    };

    //Function calls

    getTodaysEvents();

    $("#teamButtonNBA").on("click", function () {

        $("#schedule, #standings, #roster").empty();

        getNbaTeamInfo()
        getNbaStandings()


    })

    $("#teamButtonNFL").on("click", function () {

        $("#schedule, #standings, #roster").empty();

        getNflTeamInfo();
        getNflStandings();


    })

    $("#teamButtonNHL").on("click", function () {

        $("#schedule, #standings, #roster").empty();

        getNhlTeamInfo();
        getNhlStandings();


    })

    $("#teamButtonMLB").on("click", function () {

        $("#schedule, #standings, #roster").empty();

        getMlbTeamInfo();
        getMlbStandings();


    })




});