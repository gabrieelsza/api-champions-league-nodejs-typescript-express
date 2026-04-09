import PlayerModel from "../models/player-models";
import statisticsModel from "../models/statistics-model";
import { createPlayerService } from "../service/player-service";

const database: PlayerModel[] = [
    {
      "id": 1,
      "name": "Kylian Mbappé",
      "club": "Real Madrid",
      "nationality": "France",
      "position": "ST",
      "statistics": {
        "overall": 91,
        "pace": 97,
        "shooting": 90,
        "passing": 81,
        "dribbling": 92,
        "defending": 37,
        "physical": 76
      }
    },
    {
      "id": 2,
      "name": "Erling Haaland",
      "club": "Manchester City",
      "nationality": "Norway",
      "position": "ST",
      "statistics": {
        "overall": 90,
        "pace": 88,
        "shooting": 94,
        "passing": 70,
        "dribbling": 81,
        "defending": 56,
        "physical": 87
      }
    },
    {
      "id": 3,
      "name": "Harry Kane",
      "club": "Bayern Munich",
      "nationality": "England",
      "position": "ST",
      "statistics": {
        "overall": 89,
        "pace": 68,
        "shooting": 92,
        "passing": 85,
        "dribbling": 82,
        "defending": 43,
        "physical": 85
      }
    },
    {
      "id": 4,
      "name": "Vinícius Júnior",
      "club": "Real Madrid",
      "nationality": "Brazil",
      "position": "LW",
      "statistics": {
        "overall": 89,
        "pace": 95,
        "shooting": 84,
        "passing": 81,
        "dribbling": 94,
        "defending": 35,
        "physical": 79
      }
    },
    {
      "id": 5,
      "name": "Julián Álvarez",
      "club": "Atlético de Madrid",
      "nationality": "Argentina",
      "position": "ST",
      "statistics": {
        "overall": 87,
        "pace": 85,
        "shooting": 87,
        "passing": 82,
        "dribbling": 88,
        "defending": 50,
        "physical": 78
      }
    },
    {
      "id": 6,
      "name": "Anthony Gordon",
      "club": "Newcastle United",
      "nationality": "England",
      "position": "LW",
      "statistics": {
        "overall": 86,
        "pace": 93,
        "shooting": 80,
        "passing": 78,
        "dribbling": 87,
        "defending": 40,
        "physical": 75
      }
    },
        {
      "id": 7,
      "name": "Khvicha Kvaratskhelia",
      "club": "Napoli",
      "nationality": "Georgia",
      "position": "LW",
      "statistics": {
        "overall": 86,
        "pace": 88,
        "shooting": 82,
        "passing": 80,
        "dribbling": 91,
        "defending": 32,
        "physical": 72
      }
    },
    {
      "id": 8,
      "name": "Rafael Leão",
      "club": "AC Milan",
      "nationality": "Portugal",
      "position": "LW",
      "statistics": {
        "overall": 86,
        "pace": 94,
        "shooting": 83,
        "passing": 78,
        "dribbling": 89,
        "defending": 36,
        "physical": 77
      }
    },
    {
      "id": 9,
      "name": "Rodrygo",
      "club": "Real Madrid",
      "nationality": "Brazil",
      "position": "RW",
      "statistics": {
        "overall": 85,
        "pace": 89,
        "shooting": 86,
        "passing": 80,
        "dribbling": 88,
        "defending": 38,
        "physical": 74
      }
    },
     {
      "id": 10,
      "name": "Lamine Yamal",
      "club": "Barcelona",
      "nationality": "Spain",
      "position": "RW",
      "statistics": {
        "overall": 85,
        "pace": 90,
        "shooting": 82,
        "passing": 84,
        "dribbling": 92,
        "defending": 30,
        "physical": 68
      }
    },
    {
      "id": 11,
      "name": "Jude Bellingham",
      "club": "Real Madrid",
      "nationality": "England",
      "position": "CM",
      "statistics": {
        "overall": 88,
        "pace": 76,
        "shooting": 87,
        "passing": 86,
        "dribbling": 89,
        "defending": 73,
        "physical": 84
      }
    },
    {
      "id": 12,
      "name": "Florian Wirtz",
      "club": "Bayer Leverkusen",
      "nationality": "Germany",
      "position": "CAM",
      "statistics": {
        "overall": 87,
        "pace": 78,
        "shooting": 85,
        "passing": 90,
        "dribbling": 92,
        "defending": 55,
        "physical": 70
      }
    },
    {
      "id": 13,
      "name": "Jamal Musiala",
      "club": "Bayern Munich",
      "nationality": "Germany",
      "position": "CAM",
      "statistics": {
        "overall": 87,
        "pace": 85,
        "shooting": 84,
        "passing": 85,
        "dribbling": 93,
        "defending": 50,
        "physical": 72
      }
    },
    {
      "id": 14,
      "name": "Pedri",
      "club": "Barcelona",
      "nationality": "Spain",
      "position": "CM",
      "statistics": {
        "overall": 86,
        "pace": 72,
        "shooting": 78,
        "passing": 91,
        "dribbling": 89,
        "defending": 65,
        "physical": 70
      }
    },
    {
      "id": 15,
      "name": "Phil Foden",
      "club": "Manchester City",
      "nationality": "England",
      "position": "CAM",
      "statistics": {
        "overall": 86,
        "pace": 80,
        "shooting": 87,
        "passing": 86,
        "dribbling": 88,
        "defending": 55,
        "physical": 68
      }
    },
    {
      "id": 16,
      "name": "Bukayo Saka",
      "club": "Arsenal",
      "nationality": "England",
      "position": "RW",
      "statistics": {
        "overall": 86,
        "pace": 87,
        "shooting": 86,
        "passing": 83,
        "dribbling": 88,
        "defending": 58,
        "physical": 70
      }
    },
    {
      "id": 17,
      "name": "Federico Valverde",
      "club": "Real Madrid",
      "nationality": "Uruguay",
      "position": "CM",
      "statistics": {
        "overall": 86,
        "pace": 82,
        "shooting": 84,
        "passing": 84,
        "dribbling": 85,
        "defending": 75,
        "physical": 88
      }
    },
    {
      "id": 18,
      "name": "William Saliba",
      "club": "Arsenal",
      "nationality": "France",
      "position": "CB",
      "statistics": {
        "overall": 85,
        "pace": 78,
        "shooting": 35,
        "passing": 72,
        "dribbling": 60,
        "defending": 88,
        "physical": 86
      }
    },
    {
      "id": 19,
      "name": "Virgil van Dijk",
      "club": "Liverpool",
      "nationality": "Netherlands",
      "position": "CB",
      "statistics": {
        "overall": 85,
        "pace": 68,
        "shooting": 40,
        "passing": 75,
        "dribbling": 55,
        "defending": 90,
        "physical": 87
      }
    },
    {
      "id": 20,
      "name": "Rúben Dias",
      "club": "Manchester City",
      "nationality": "Portugal",
      "position": "CB",
      "statistics": {
        "overall": 85,
        "pace": 70,
        "shooting": 38,
        "passing": 74,
        "dribbling": 58,
        "defending": 89,
        "physical": 86
      }
    },
    {
      "id": 21,
      "name": "Rodri",
      "club": "Manchester City",
      "nationality": "Spain",
      "position": "CDM",
      "statistics": {
        "overall": 89,
        "pace": 62,
        "shooting": 76,
        "passing": 90,
        "dribbling": 82,
        "defending": 87,
        "physical": 86
      }
    },
    {
      "id": 22,
      "name": "Kevin De Bruyne",
      "club": "Manchester City",
      "nationality": "Belgium",
      "position": "CM",
      "statistics": {
        "overall": 88,
        "pace": 67,
        "shooting": 88,
        "passing": 94,
        "dribbling": 87,
        "defending": 60,
        "physical": 75
      }
    },
    {
      "id": 23,
      "name": "Lautaro Martínez",
      "club": "Inter Milan",
      "nationality": "Argentina",
      "position": "ST",
      "statistics": {
        "overall": 86,
        "pace": 80,
        "shooting": 89,
        "passing": 75,
        "dribbling": 84,
        "defending": 45,
        "physical": 82
      }
    },
    {
      "id": 24,
      "name": "Victor Osimhen",
      "club": "Galatasaray",
      "nationality": "Nigeria",
      "position": "ST",
      "statistics": {
        "overall": 85,
        "pace": 90,
        "shooting": 86,
        "passing": 68,
        "dribbling": 82,
        "defending": 50,
        "physical": 85
      }
    },
    {
      "id": 25,
      "name": "Ousmane Dembélé",
      "club": "PSG",
      "nationality": "France",
      "position": "RW",
      "statistics": {
        "overall": 85,
        "pace": 92,
        "shooting": 80,
        "passing": 79,
        "dribbling": 90,
        "defending": 40,
        "physical": 68
      }
    },
    {
      "id": 26,
      "name": "Bruno Guimarães",
      "club": "Newcastle United",
      "nationality": "Brazil",
      "position": "CDM",
      "statistics": {
        "overall": 85,
        "pace": 70,
        "shooting": 75,
        "passing": 87,
        "dribbling": 85,
        "defending": 83,
        "physical": 82
      }
    },
    {
      "id": 27,
      "name": "Aurélien Tchouaméni",
      "club": "Real Madrid",
      "nationality": "France",
      "position": "CDM",
      "statistics": {
        "overall": 84,
        "pace": 72,
        "shooting": 70,
        "passing": 82,
        "dribbling": 78,
        "defending": 86,
        "physical": 84
      }
    },
    {
      "id": 28,
      "name": "Gavi",
      "club": "Barcelona",
      "nationality": "Spain",
      "position": "CM",
      "statistics": {
        "overall": 84,
        "pace": 78,
        "shooting": 72,
        "passing": 85,
        "dribbling": 87,
        "defending": 80,
        "physical": 75
      }
    },
    {
      "id": 29,
      "name": "Eduardo Camavinga",
      "club": "Real Madrid",
      "nationality": "France",
      "position": "CM",
      "statistics": {
        "overall": 84,
        "pace": 82,
        "shooting": 68,
        "passing": 83,
        "dribbling": 86,
        "defending": 82,
        "physical": 80
      }
    },
    {
      "id": 30,
      "name": "Arda Güler",
      "club": "Real Madrid",
      "nationality": "Turkey",
      "position": "CAM",
      "statistics": {
        "overall": 83,
        "pace": 80,
        "shooting": 82,
        "passing": 86,
        "dribbling": 88,
        "defending": 45,
        "physical": 65
      }
    },
]

export const findAllPlayers = async(): Promise<PlayerModel[]> => {
    return database; 
};

export const findPlayerById = async(id: number): Promise<PlayerModel | undefined > => {
    return database.find(player => player.id === id); 
}

export const insertPlayer = async(player: PlayerModel) => {
    return database.push(player)
}

export const deleteOnePlayer = async(id: number) => {
  const index = database.findIndex( player => player.id === id); 
  if( index !== -1) { 
    database.splice(index, 1) 
    return true;  
  }

  return false; 
}

export const findAndModifyPlayer = async(id : number, statistics: statisticsModel): Promise<PlayerModel> => {
  const playerIndex = database.findIndex( player => player.id === id); 

  if(playerIndex !== -1) {
    database[playerIndex].statistics = statistics;  
  }

  return database[playerIndex]

}; 