const axios = require('axios')

let mlbQueryURL = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4424"
let nflQueryURL = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4391"
let nbaQueryURL = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387"
let nhlQueryURL = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4380"

let teamIds = [];
let teamValue = "Buffalo_Bills";

teamURL = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=" + teamValue




function getTeamSchedule() {



    axios.get(teamURL)
        .then(function (response) {

            let Id = response.data.teams[0].idTeam;
            console.log(Id);
            teamIds.push(Id);
            console.log(teamIds);

        })
        .then(function (promise) {

            teamIds.forEach(element => {
                let teamId = element;
                queryTeamInfo = "https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=" + teamId;

                axios.get(queryTeamInfo)
                    .then(function (response) {

                        console.log("Matchup: " + response.data.events[0].strEvent)
                        console.log("Home Team: " + response.data.events[0].strHomeTeam)
                        console.log("Away Team: " + response.data.events[0].strAwayTeam)
                        console.log("Date: " + response.data.events[0].dateEvent)
                        console.log("Time: " + response.data.events[0].strTime)
                        console.log("Week: " + response.data.events[0].intRound)

                        console.log("----------------------------")

                        console.log("Matchup: " + response.data.events[1].strEvent)
                        console.log("Home Team: " + response.data.events[1].strHomeTeam)
                        console.log("Away Team: " + response.data.events[1].strAwayTeam)
                        console.log("Date: " + response.data.events[1].dateEvent)
                        console.log("Time: " + response.data.events[1].strTime)
                        console.log("Week: " + response.data.events[1].intRound)

                        console.log("----------------------------")

                        console.log("Matchup: " + response.data.events[2].strEvent)
                        console.log("Home Team: " + response.data.events[2].strHomeTeam)
                        console.log("Away Team: " + response.data.events[2].strAwayTeam)
                        console.log("Date: " + response.data.events[2].dateEvent)
                        console.log("Time: " + response.data.events[2].strTime)
                        console.log("Week: " + response.data.events[2].intRound)

                        console.log("----------------------------")

                        console.log("Matchup: " + response.data.events[3].strEvent)
                        console.log("Home Team: " + response.data.events[3].strHomeTeam)
                        console.log("Away Team: " + response.data.events[3].strAwayTeam)
                        console.log("Date: " + response.data.events[3].dateEvent)
                        console.log("Time: " + response.data.events[3].strTime)
                        console.log("Week: " + response.data.events[3].intRound)

                        console.log("----------------------------")

                        console.log("Matchup: " + response.data.events[4].strEvent)
                        console.log("Home Team: " + response.data.events[4].strHomeTeam)
                        console.log("Away Team: " + response.data.events[4].strAwayTeam)
                        console.log("Date: " + response.data.events[4].dateEvent)
                        console.log("Time: " + response.data.events[4].strTime)
                        console.log("Week: " + response.data.events[4].intRound)

                    });

            });



        })
        .catch(function (error) {

            console.log(error);
        })

};

function getTeamRoster() {
    axios.get(teamURL)
        .then(function (response) {

            let Id = response.data.teams[0].idTeam;
            console.log(Id);
            teamIds.push(Id);
            console.log(teamIds);

        })
        .then(function (promise) {

            teamIds.forEach(element => {
                let teamId = element;
                queryTeamInfo = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?id=" + teamId;

                axios.get(queryTeamInfo)
                    .then(function (response) {
                        
                        response.data.player.forEach(element => {
                            console.log(element.strPlayer)
                            console.log(element.dateBorn)
                            console.log(element.strPosition)
                            console.log("----------------------------")
                        })
                    });

            });



        })
        .catch(function (error) {

            console.log(error);
        });
};

getTeamRoster();

