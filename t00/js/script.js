'use stirct'

let superTeam ={}

function stringToBoolean(string){
    switch(string.toLowerCase().trim()){
        case "true": case "yes": return true;
        case "false": case "no": case null: return false;
        default: return false;
    }
}
superTeam['title'] = prompt ('Name of the team');
superTeam['leader'] = prompt('Name of the team\'s leader');
superTeam['members'] = (prompt('Enter names of the members of the team by coma')).split(',');
superTeam['memberCount'] = (superTeam.members).length + 1;
superTeam['agenda'] = prompt('Describe what are the goals and ideas of the team')
superTeam.isEvil = stringToBoolean(prompt('Is team evil or not? Yes/no or true/false'))

console.log(superTeam)

alert ('Here\'s the team:\nname -' + superTeam.title + 
'\nleader - ' + superTeam.leader + 
'\nmembers - ' + superTeam.members +
'\nmemberCount - ' + superTeam.memberCount +
'\nagenda - ' + superTeam.agenda +
'\nisEvil - ' + superTeam.isEvil)