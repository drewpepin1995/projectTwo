$(document).ready(function () {

    const sportsAPI = require('../../src/services/api.js')

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


    $("#teamChoiceNfl").on("click", function(){

        let teamValue = $("#teamChoiceNfl option:selected").text();
        sportsAPI.getTeamRoster();
        sportsAPI.getTeamSchedule();
        sportsAPI.getNflStandings();
    });


});