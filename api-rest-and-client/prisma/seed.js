// prisma/seed.js
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.pokemon.deleteMany()
  await prisma.pokemon.createMany({
    data: [
      {
        pokedexNumber: 1,
        name: 'Bulbasaur',
        type: 'Grass/Poison',
        height: 0.7,
        weight: 6.9
      },
      {
        pokedexNumber: 4,
        name: 'Charmander',
        type: 'Fire',
        height: 0.6,
        weight: 8.5
      },
      {
        pokedexNumber: 7,
        name: 'Squirtle',
        type: 'Water',
        height: 0.5,
        weight: 9.0
      },
      // Johto
      {
        pokedexNumber: 152,
        name: 'Chikorita',
        type: 'Grass',
        height: 0.9,
        weight: 6.4
      },
      {
        pokedexNumber: 155,
        name: 'Cyndaquil',
        type: 'Fire',
        height: 0.5,
        weight: 7.9
      },
      {
        pokedexNumber: 158,
        name: 'Totodile',
        type: 'Water',
        height: 0.6,
        weight: 9.5
      },
      // Hoenn
      {
        pokedexNumber: 252,
        name: 'Treecko',
        type: 'Grass',
        height: 0.5,
        weight: 5.0
      },
      {
        pokedexNumber: 255,
        name: 'Torchic',
        type: 'Fire',
        height: 0.4,
        weight: 2.5
      },
      {
        pokedexNumber: 258,
        name: 'Mudkip',
        type: 'Water',
        height: 0.4,
        weight: 7.6
      },
      // Sinnoh
      {
        pokedexNumber: 387,
        name: 'Turtwig',
        type: 'Grass',
        height: 0.4,
        weight: 10.2
      },
      {
        pokedexNumber: 390,
        name: 'Chimchar',
        type: 'Fire',
        height: 0.5,
        weight: 6.2
      },
      {
        pokedexNumber: 393,
        name: 'Piplup',
        type: 'Water',
        height: 0.4,
        weight: 5.2
      },
      // Unova
      {
        pokedexNumber: 495,
        name: 'Snivy',
        type: 'Grass',
        height: 0.6,
        weight: 8.1
      },
      {
        pokedexNumber: 498,
        name: 'Tepig',
        type: 'Fire',
        height: 0.5,
        weight: 9.9
      },
      {
        pokedexNumber: 501,
        name: 'Oshawott',
        type: 'Water',
        height: 0.5,
        weight: 5.9
      },
      // Kalos
      {
        pokedexNumber: 650,
        name: 'Chespin',
        type: 'Grass',
        height: 0.4,
        weight: 9.0
      },
      {
        pokedexNumber: 653,
        name: 'Fennekin',
        type: 'Fire',
        height: 0.4,
        weight: 9.4
      },
      {
        pokedexNumber: 656,
        name: 'Froakie',
        type: 'Water',
        height: 0.3,
        weight: 7.0
      },
      // Alola
      {
        pokedexNumber: 722,
        name: 'Rowlet',
        type: 'Grass/Flying',
        height: 0.3,
        weight: 1.5
      },
      {
        pokedexNumber: 725,
        name: 'Litten',
        type: 'Fire',
        height: 0.4,
        weight: 4.3
      },
      {
        pokedexNumber: 728,
        name: 'Popplio',
        type: 'Water',
        height: 0.4,
        weight: 7.5
      },
      // Galar
      {
        pokedexNumber: 810,
        name: 'Grookey',
        type: 'Grass',
        height: 0.3,
        weight: 5.0
      },
      {
        pokedexNumber: 813,
        name: 'Scorbunny',
        type: 'Fire',
        height: 0.3,
        weight: 4.5
      },
      {
        pokedexNumber: 816,
        name: 'Sobble',
        type: 'Water',
        height: 0.3,
        weight: 4.0
      },
      // Paldea
      {
        pokedexNumber: 906,
        name: 'Sprigatito',
        type: 'Grass',
        height: 0.4,
        weight: 4.1
      },
      {
        pokedexNumber: 909,
        name: 'Fuecoco',
        type: 'Fire',
        height: 0.4,
        weight: 9.8
      },
      {
        pokedexNumber: 912,
        name: 'Quaxly',
        type: 'Water',
        height: 0.5,
        weight: 6.1
      },
      // Evolutions (Gen 1)
      {
        pokedexNumber: 2,
        name: 'Ivysaur',
        type: 'Grass/Poison',
        height: 1.0,
        weight: 13.0
      },
      {
        pokedexNumber: 3,
        name: 'Venusaur',
        type: 'Grass/Poison',
        height: 2.0,
        weight: 100.0
      },
      {
        pokedexNumber: 5,
        name: 'Charmeleon',
        type: 'Fire',
        height: 1.1,
        weight: 19.0
      },
      {
        pokedexNumber: 6,
        name: 'Charizard',
        type: 'Fire/Flying',
        height: 1.7,
        weight: 90.5
      },
      {
        pokedexNumber: 8,
        name: 'Wartortle',
        type: 'Water',
        height: 1.0,
        weight: 22.5
      },
      {
        pokedexNumber: 9,
        name: 'Blastoise',
        type: 'Water',
        height: 1.6,
        weight: 85.5
      },
      // Evolutions (Gen 2)
      {
        pokedexNumber: 153,
        name: 'Bayleef',
        type: 'Grass',
        height: 1.2,
        weight: 15.8
      },
      {
        pokedexNumber: 154,
        name: 'Meganium',
        type: 'Grass',
        height: 1.8,
        weight: 100.5
      },
      {
        pokedexNumber: 156,
        name: 'Quilava',
        type: 'Fire',
        height: 0.9,
        weight: 19.0
      },
      {
        pokedexNumber: 157,
        name: 'Typhlosion',
        type: 'Fire',
        height: 1.7,
        weight: 79.5
      },
      {
        pokedexNumber: 159,
        name: 'Croconaw',
        type: 'Water',
        height: 1.1,
        weight: 25.0
      },
      {
        pokedexNumber: 160,
        name: 'Feraligatr',
        type: 'Water',
        height: 2.3,
        weight: 88.8
      },
      // Legendarios (Gen 1)
      {
        pokedexNumber: 144,
        name: 'Articuno',
        type: 'Ice/Flying',
        height: 1.7,
        weight: 55.4
      },
      {
        pokedexNumber: 145,
        name: 'Zapdos',
        type: 'Electric/Flying',
        height: 1.6,
        weight: 52.6
      },
      {
        pokedexNumber: 146,
        name: 'Moltres',
        type: 'Fire/Flying',
        height: 2.0,
        weight: 60.0
      },
      {
        pokedexNumber: 150,
        name: 'Mewtwo',
        type: 'Psychic',
        height: 2.0,
        weight: 122.0
      },
      {
        pokedexNumber: 151,
        name: 'Mew',
        type: 'Psychic',
        height: 0.4,
        weight: 4.0
      },
      // Legendarios (Gen 2)
      {
        pokedexNumber: 243,
        name: 'Raikou',
        type: 'Electric',
        height: 1.9,
        weight: 178.0
      },
      {
        pokedexNumber: 244,
        name: 'Entei',
        type: 'Fire',
        height: 2.1,
        weight: 198.0
      },
      {
        pokedexNumber: 245,
        name: 'Suicune',
        type: 'Water',
        height: 2.0,
        weight: 187.0
      },
      {
        pokedexNumber: 249,
        name: 'Lugia',
        type: 'Psychic/Flying',
        height: 5.2,
        weight: 216.0
      },
      {
        pokedexNumber: 250,
        name: 'Ho-Oh',
        type: 'Fire/Flying',
        height: 3.8,
        weight: 199.0
      },
      {
        pokedexNumber: 251,
        name: 'Celebi',
        type: 'Psychic/Grass',
        height: 0.6,
        weight: 5.0
      },
      // Legendarios (Gen 3)
      { pokedexNumber: 377, name: 'Regirock', type: 'Rock', height: 1.7, weight: 230.0 },
      { pokedexNumber: 378, name: 'Regice', type: 'Ice', height: 1.8, weight: 175.0 },
      { pokedexNumber: 379, name: 'Registeel', type: 'Steel', height: 1.9, weight: 205.0 },
      { pokedexNumber: 380, name: 'Latias', type: 'Dragon/Psychic', height: 1.4, weight: 40.0 },
      { pokedexNumber: 381, name: 'Latios', type: 'Dragon/Psychic', height: 2.0, weight: 60.0 },
      { pokedexNumber: 382, name: 'Kyogre', type: 'Water', height: 4.5, weight: 352.0 },
      { pokedexNumber: 383, name: 'Groudon', type: 'Ground', height: 3.5, weight: 950.0 },
      { pokedexNumber: 384, name: 'Rayquaza', type: 'Dragon/Flying', height: 7.0, weight: 206.5 },
      { pokedexNumber: 385, name: 'Jirachi', type: 'Steel/Psychic', height: 0.3, weight: 1.1 },
      { pokedexNumber: 386, name: 'Deoxys', type: 'Psychic', height: 1.7, weight: 60.8 },
      // Legendarios (Gen 4)
      { pokedexNumber: 480, name: 'Uxie', type: 'Psychic', height: 0.3, weight: 0.3 },
      { pokedexNumber: 481, name: 'Mesprit', type: 'Psychic', height: 0.3, weight: 0.3 },
      { pokedexNumber: 482, name: 'Azelf', type: 'Psychic', height: 0.3, weight: 0.3 },
      { pokedexNumber: 483, name: 'Dialga', type: 'Steel/Dragon', height: 5.4, weight: 683.0 },
      { pokedexNumber: 484, name: 'Palkia', type: 'Water/Dragon', height: 4.2, weight: 336.0 },
      { pokedexNumber: 485, name: 'Heatran', type: 'Fire/Steel', height: 1.7, weight: 430.0 },
      { pokedexNumber: 486, name: 'Regigigas', type: 'Normal', height: 3.7, weight: 420.0 },
      { pokedexNumber: 487, name: 'Giratina', type: 'Ghost/Dragon', height: 4.5, weight: 750.0 },
      { pokedexNumber: 488, name: 'Cresselia', type: 'Psychic', height: 1.5, weight: 85.6 },
      { pokedexNumber: 489, name: 'Phione', type: 'Water', height: 0.4, weight: 3.1 },
      { pokedexNumber: 490, name: 'Manaphy', type: 'Water', height: 0.3, weight: 1.4 },
      { pokedexNumber: 491, name: 'Darkrai', type: 'Dark', height: 1.5, weight: 50.5 },
      { pokedexNumber: 492, name: 'Shaymin', type: 'Grass', height: 0.2, weight: 2.1 },
      { pokedexNumber: 493, name: 'Arceus', type: 'Normal', height: 3.2, weight: 320.0 },
      // Legendarios (Gen 5)
      { pokedexNumber: 638, name: 'Cobalion', type: 'Steel/Fighting', height: 2.1, weight: 250.0 },
      { pokedexNumber: 639, name: 'Terrakion', type: 'Rock/Fighting', height: 1.9, weight: 260.0 },
      { pokedexNumber: 640, name: 'Virizion', type: 'Grass/Fighting', height: 2.0, weight: 200.0 },
      { pokedexNumber: 641, name: 'Tornadus', type: 'Flying', height: 1.5, weight: 63.0 },
      { pokedexNumber: 642, name: 'Thundurus', type: 'Electric/Flying', height: 1.5, weight: 61.0 },
      { pokedexNumber: 643, name: 'Reshiram', type: 'Dragon/Fire', height: 3.2, weight: 330.0 },
      { pokedexNumber: 644, name: 'Zekrom', type: 'Dragon/Electric', height: 2.9, weight: 345.0 },
      { pokedexNumber: 645, name: 'Landorus', type: 'Ground/Flying', height: 1.5, weight: 68.0 },
      { pokedexNumber: 646, name: 'Kyurem', type: 'Dragon/Ice', height: 3.0, weight: 325.0 },
      { pokedexNumber: 647, name: 'Keldeo', type: 'Water/Fighting', height: 1.4, weight: 48.5 },
      { pokedexNumber: 648, name: 'Meloetta', type: 'Normal/Psychic', height: 0.6, weight: 6.5 },
      { pokedexNumber: 649, name: 'Genesect', type: 'Bug/Steel', height: 1.5, weight: 82.5 },
      // Legendarios (Gen 6)
      { pokedexNumber: 716, name: 'Xerneas', type: 'Fairy', height: 3.0, weight: 215.0 },
      { pokedexNumber: 717, name: 'Yveltal', type: 'Dark/Flying', height: 5.8, weight: 203.0 },
      { pokedexNumber: 718, name: 'Zygarde', type: 'Dragon/Ground', height: 5.0, weight: 305.0 },
      { pokedexNumber: 719, name: 'Diancie', type: 'Rock/Fairy', height: 0.7, weight: 8.8 },
      { pokedexNumber: 720, name: 'Hoopa', type: 'Psychic/Ghost', height: 0.5, weight: 9.0 },
      { pokedexNumber: 721, name: 'Volcanion', type: 'Fire/Water', height: 1.7, weight: 195.0 },
      // Legendarios (Gen 7)
      { pokedexNumber: 785, name: 'Tapu Koko', type: 'Electric/Fairy', height: 1.8, weight: 20.5 },
      { pokedexNumber: 786, name: 'Tapu Lele', type: 'Psychic/Fairy', height: 1.2, weight: 18.6 },
      { pokedexNumber: 787, name: 'Tapu Bulu', type: 'Grass/Fairy', height: 1.9, weight: 45.5 },
      { pokedexNumber: 788, name: 'Tapu Fini', type: 'Water/Fairy', height: 1.3, weight: 21.2 },
      { pokedexNumber: 789, name: 'Cosmog', type: 'Psychic', height: 0.2, weight: 0.1 },
      { pokedexNumber: 790, name: 'Cosmoem', type: 'Psychic', height: 0.1, weight: 999.9 },
      { pokedexNumber: 791, name: 'Solgaleo', type: 'Psychic/Steel', height: 3.4, weight: 230.0 },
      { pokedexNumber: 792, name: 'Lunala', type: 'Psychic/Ghost', height: 4.0, weight: 120.0 },
      { pokedexNumber: 800, name: 'Necrozma', type: 'Psychic', height: 2.4, weight: 230.0 },
      { pokedexNumber: 801, name: 'Magearna', type: 'Steel/Fairy', height: 1.0, weight: 80.5 },
      { pokedexNumber: 802, name: 'Marshadow', type: 'Fighting/Ghost', height: 0.7, weight: 22.2 },
      { pokedexNumber: 803, name: 'Poipole', type: 'Poison', height: 0.6, weight: 1.8 },
      { pokedexNumber: 804, name: 'Naganadel', type: 'Poison/Dragon', height: 3.6, weight: 150.0 },
      { pokedexNumber: 805, name: 'Stakataka', type: 'Rock/Steel', height: 5.5, weight: 820.0 },
      { pokedexNumber: 806, name: 'Blacephalon', type: 'Fire/Ghost', height: 1.8, weight: 13.0 },
      { pokedexNumber: 807, name: 'Zeraora', type: 'Electric', height: 1.5, weight: 44.5 },
      // Legendarios (Gen 8)
      { pokedexNumber: 888, name: 'Zacian', type: 'Fairy/Steel', height: 2.8, weight: 110.0 },
      { pokedexNumber: 889, name: 'Zamazenta', type: 'Fighting/Steel', height: 2.9, weight: 210.0 },
      { pokedexNumber: 890, name: 'Eternatus', type: 'Poison/Dragon', height: 20.0, weight: 950.0 },
      { pokedexNumber: 891, name: 'Kubfu', type: 'Fighting', height: 0.6, weight: 12.0 },
      { pokedexNumber: 892, name: 'Urshifu', type: 'Fighting/Dark', height: 1.9, weight: 105.0 },
      { pokedexNumber: 893, name: 'Zarude', type: 'Dark/Grass', height: 1.8, weight: 70.0 },
      { pokedexNumber: 894, name: 'Regieleki', type: 'Electric', height: 1.2, weight: 145.0 },
      { pokedexNumber: 895, name: 'Regidrago', type: 'Dragon', height: 2.1, weight: 200.0 },
      { pokedexNumber: 896, name: 'Glastrier', type: 'Ice', height: 2.2, weight: 800.0 },
      { pokedexNumber: 897, name: 'Spectrier', type: 'Ghost', height: 2.0, weight: 44.5 },
      { pokedexNumber: 898, name: 'Calyrex', type: 'Psychic/Grass', height: 1.1, weight: 7.7 },
      // Legendarios (Gen 9)
      { pokedexNumber: 1003, name: 'Ting-Lu', type: 'Dark/Ground', height: 2.7, weight: 699.7 },
      { pokedexNumber: 1002, name: 'Chien-Pao', type: 'Dark/Ice', height: 1.9, weight: 152.2 },
      { pokedexNumber: 1001, name: 'Wo-Chien', type: 'Dark/Grass', height: 1.5, weight: 74.2 },
      { pokedexNumber: 1004, name: 'Chi-Yu', type: 'Dark/Fire', height: 0.4, weight: 4.9 },
      { pokedexNumber: 1007, name: 'Koraidon', type: 'Fighting/Dragon', height: 2.5, weight: 303.0 },
      { pokedexNumber: 1008, name: 'Miraidon', type: 'Electric/Dragon', height: 3.5, weight: 240.0 },
      { pokedexNumber: 1009, name: 'Walking Wake', type: 'Water/Dragon', height: 3.5, weight: 280.0 },
      { pokedexNumber: 1010, name: 'Iron Leaves', type: 'Grass/Psychic', height: 1.5, weight: 125.0 },
      { pokedexNumber: 1017, name: 'Ogerpon', type: 'Grass', height: 1.2, weight: 39.8 },
      { pokedexNumber: 1024, name: 'Terapagos', type: 'Normal', height: 1.2, weight: 16.0 }
    ],
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
