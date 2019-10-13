const axios = require('axios')

let mlbQueryURL = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4424"
let nflQueryURL = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4391"
let nbaQueryURL = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4387"
let nhlQueryURL = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4380"

let teamIds = [];
let teamValue = "";

nflId = "4391"
mlbId = "4424"
nhlId = "4380"
nbaId = "4387"

teamURL = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=" + teamValue

NhlStandingsURL = "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=" + nhlId + "&s=1819"
NflStandingsURL = "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=" + nflId + "&s=1718"
NbaStandingsURL = "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=" + nbaId + "&s=1819"
MlbStandingsURL = "https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=" + mlbId + "&s=1718"




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


function getNhlStandings() {

    axios.get(NhlStandingsURL)
        .then(function (response) {

            response.data.table.forEach(element =>{
                console.log("Team: " + element.name)
                console.log("Goals For: " + element.goalsfor)
                console.log("Goals Against: " + element.goalsagainst)
                console.log("Wins: " + element.win)
                console.log("Losses: " + element.loss)
                console.log("Points: " + element.total);
                console.log("-------------------------")
            })

        });


};

function getMlbStandings() {

    axios.get(MlbStandingsURL)
        .then(function (response) {

            console.log(response.data);


        });


};

function getNflStandings() {

    axios.get(NflStandingsURL)
        .then(function (response) {

            console.log(response);


        });


};

function getNbaStandings() {

    axios.get(NbaStandingsURL)
        .then(function (response) {

            response.data.table.forEach(element =>{
                console.log("Team: " + element.name)
                console.log("Points For: " + element.goalsfor)
                console.log("Goals Points Against: " + element.goalsagainst)
                console.log("Wins: " + element.win)
                console.log("Losses: " + element.loss)
                console.log("-------------------------")
            })
        });


};

getNflStandings();


module.exports = {
    getMlbStandings, 
    getNbaStandings, 
    getNflStandings, 
    getNhlStandings, 
    getTeamRoster, 
    getTeamSchedule};


