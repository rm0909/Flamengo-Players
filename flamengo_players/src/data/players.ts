import {
  arrascaeta,
  ayrtonlucas,
  brunohenrique,
  cebolinha,
  cleiton,
  davidluiz,
  diegoalves,
  diegoribas,
  dorival,
  erick,
  evertonribeiro,
  fabriciobruno,
  filipeluis,
  gabigol,
  joaogomes,
  lazaro,
  leopereira,
  marinho,
  matheuscunha,
  matheusfranca,
  matheuzinho,
  neneca,
  pablo,
  pedro,
  rodinei,
  rodrigocaio,
  santos,
  thiagomaia,
  varela,
  victorhugo,
  vidal,
  vitinho,
  // rj,
  sp,
  rio,
  urug,
  chi,
  // ac,
  al,
  // am,
  // ap,
  ba,
  ce,
  // df,
  // es,
  // go,
  ma,
  mg,
  // ms,
  // mt,
  pb,
  // pe,
  // pi,
  pr,
  rr,
  rn,
  //ro,
  //rs,
  sc,
  //to,
} from "./playerPhotos";

const brasil =
  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/flag-for-brazil_1f1e7-1f1f7.png";
const uruguai =
  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/flag-for-uruguay_1f1fa-1f1fe.png";
const chile =
  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/flag-for-chile_1f1e8-1f1f1.png";
/*SE DER MERDA, DESFAÇA O TYPESCRIPT*/
interface Player {
  name: string;
  alsoKnownAs?: string;
  number: number | "T";
  position:
    | "Treinador"
    | "Goleiro"
    | "Zagueiro"
    | "Lateral Direito"
    | "Lateral Esquerdo"
    | "Meio-Campo"
    | "Meio-Defensivo"
    | "Meio-Ofensivo"
    | "Atacante"
    | "Ponta Esquerda"
    | "Ponta Direita";
  age: number;
  ability: number;
  state?: string;
  country: string;
  img: string;
  fullName: string;
  leg: "Destro" | "Canhoto" | "AmbiDestro";
  height: number | null;
  city: string;
  birth: string;
  formerTeams: string[] | "base";
  arrival: string;
  contract: string;
  fanBase:
    | ["⭐"]
    | ["⭐", "⭐"]
    | ["⭐", "⭐", "⭐"]
    | ["⭐", "⭐", "⭐", "⭐"]
    | ["⭐", "⭐", "⭐", "⭐", "⭐"];
  valueEuros: number;
}

export const squad: Array<Player> = [
  {
    name: "Gabriel Barbosa",
    alsoKnownAs: "Gabigol" || "Lil'Gabi" || "Pescoço" || "Trapper" || "Rapper",
    number: 9,
    position: "Atacante",
    age: 25,
    ability: 85,
    state: sp,
    country: brasil,
    img: gabigol,
    fullName: "Gabriel Barbosa Almeida",
    leg: "Canhoto",
    height: 1.78,
    city: "São Bernardo do Campo - SP",
    birth: "30/08/1996",
    formerTeams: [" Santos", " Internazionale", " Benfica"],
    arrival: "28/01/2020",
    contract: "31/12/2024",
    fanBase: ["⭐", "⭐", "⭐", "⭐", "⭐"],
    valueEuros: 26000000,
  },
  {
    name: "Diego Alves",
    number: 1,
    position: "Goleiro",
    age: 36,
    ability: 75,
    state: rio,
    country: brasil,
    img: diegoalves,
    fullName: "Diego Alves Carreira",
    leg: "Canhoto",
    height: 1.88,
    city: "Rio de Janeiro - RJ",
    birth: "24/06/1985",
    formerTeams: [" Atlético Mineiro", " Valencia", "Almeria"],
    arrival: "16/07/2017",
    contract: "31/12/2022",
    fanBase: ["⭐", "⭐", "⭐"],
    valueEuros: 800000,
  },
  {
    name: "Bruno Henrique",
    alsoKnownAs: "Speed Wonder",
    number: 27,
    position: "Atacante",
    age: 31,
    ability: 84,
    state: mg,
    country: brasil,
    img: brunohenrique,
    fullName: "Bruno Henrique Pinto",
    leg: "Destro",
    height: 1.84,
    city: "Belo Horizonte - MG",
    birth: "30/12/1990",
    formerTeams: [" Cruzeiro", " Santos", " WolfsBurg", "Goiás"],
    arrival: "23/01/2019",
    contract: "31/12/2023",
    fanBase: ["⭐", "⭐", "⭐", "⭐", "⭐"],
    valueEuros: 6000000,
  },
  {
    name: "de Arrascaeta",
    alsoKnownAs: "Arrasca",
    number: 14,
    position: "Meio-Ofensivo",
    age: 27,
    ability: 87,
    state: urug,
    country: uruguai,
    img: arrascaeta,
    fullName: "Giorgian Daniel de Arrascaeta Benedetti",
    leg: "Destro",
    height: 1.72,
    city: "Nuevo Berlin",
    birth: "01/06/1994",
    formerTeams: [" Cruzeiro ", " Defensor"],
    arrival: "12/01/2019",
    contract: "31/12/2022",
    fanBase: ["⭐", "⭐", "⭐", "⭐", "⭐"],
    valueEuros: 17000000,
  },
  {
    name: "Diego Ribas",
    number: 10,
    position: "Meio-Campo",
    age: 37,
    ability: 76,
    state: sp,
    country: brasil,
    img: diegoribas,
    fullName: "Diego Ribas da Cunha",
    leg: "Destro",
    height: 1.73,
    city: "Ribeirão Preto - SP",
    birth: "28/02/1985",
    formerTeams: [
      "Atlético Madrid",
      " Juventus",
      " Wolfsburg",
      " Werder Bremen",
      " Santos",
      " Porto",
    ],
    arrival: "19/07/2016",
    contract: "31/12/2022",
    fanBase: ["⭐", "⭐", "⭐"],
    valueEuros: 800000,
  },
  {
    name: "Vitinho",
    number: 11,
    position: "Meio-Ofensivo",
    age: 28,
    ability: 82,
    state: rio,
    country: brasil,
    img: vitinho,
    fullName: "Victor Vinícius Coelho dos Santos",
    leg: "AmbiDestro",
    height: 1.8,
    city: "Rio de Janeiro - RJ",
    birth: "09/10/1993",
    formerTeams: [" Internacional", " CSKA Moscow", " Botafogo"],
    arrival: "30/07/2018",
    contract: "31/12/2022",
    fanBase: ["⭐", "⭐"],
    valueEuros: 5000000,
  },
  {
    name: "Lázaro",
    number: 13,
    position: "Meio-Ofensivo",
    age: 19,
    ability: 78,
    state: mg,
    country: brasil,
    img: lazaro,
    fullName: "Lázaro Vinícius Marques",
    leg: "Destro",
    height: 1.81,
    city: "Belo Horizonte - MG",
    birth: "12/03/2002",
    formerTeams: [""],
    arrival: "27/01/2022",
    contract: "10/03/2025",
    fanBase: ["⭐", "⭐", "⭐"],
    valueEuros: 6000000,
  },
  {
    name: "Filipe Luis",
    number: 16,
    position: "Lateral Esquerdo",
    age: 36,
    ability: 84,
    state: sc,
    country: brasil,
    img: filipeluis,
    fullName: "Filipe Luis Kasmirski",
    leg: "Canhoto",
    height: 1.82,
    city: "Jaraguá do Sul - SC",
    birth: "09/08/1985",
    formerTeams: [" Atlético Madrid", " Chelsea", " Ajax", " La Coruña"],
    arrival: "23/07/2019",
    contract: "31/12/2022",
    fanBase: ["⭐", "⭐", "⭐", "⭐", "⭐"],
    valueEuros: 800000,
  },
  // {
  //   name: "Andreas Pereira",
  //   alsoKnownAs: "Andreas",
  //   number: 18,
  //   position: "Meio-Campo",
  //   age: 26,
  //   ability: 82,
  //   country:
  //     "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/flag-for-brazil_1f1e7-1f1f7.png",
  //   img: "https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/5/1647697934.jpeg",
  //   fullName: "Andreas Hugo Hoelgebaum Pereira",
  //   leg: "Destro",
  //   height: "1,78m",
  //   city: "Duffel, Bélgica",
  //   birth: "01/01/1996",
  //   formerTeams: [" Manchester United"," Lazio", " Valência"],
  //   arrival: "20/08/2021",
  //   contract: "30/06/2022",
  //   fanBase: "⭐⭐⭐",
  //   valueEuros: 7500000,
  // },
  // {
  //   name: "Gustavo Henrique",
  //   number: 2,
  //   position: "Zagueiro",
  //   age: 28,
  //   ability: 78,
  //   country:
  //     "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/flag-for-brazil_1f1e7-1f1f7.png",
  //   img: "https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/2/1647693403.jpeg",

  //   fullName: "Gustavo Henrique Vernes",
  //   leg: "Destro",
  //   height: "1,96m",
  //   city: "São Paulo - SP",
  //   birth: "24/03/1993",
  //   formerTeams: [" Santos"],
  //   arrival: "13/01/2020",
  //   contract: "31/12/2023",
  //   fanBase: "⭐⭐",
  //   valueEuros: 2800000
  // },
  {
    name: "Rodinei",
    alsoKnownAs: "Rodilindo" || "Rodi",
    number: 22,
    position: "Lateral Direito",
    age: 30,
    ability: 78,
    state: sp,
    country: brasil,
    img: rodinei,
    fullName: "Rodinei Marcelo de Almeida",
    leg: "Destro",
    height: 1.75,
    city: "São Paulo - SP",
    birth: "24/03/1993",
    formerTeams: [" Ponte Preta", " Avaí", " Internacional"],
    arrival: "02/01/2016",
    contract: "31/12/2016",
    fanBase: ["⭐", "⭐","⭐"],
    valueEuros: 1000000,
  },
  {
    name: "Pedro",
    alsoKnownAs: "Queixada" || "Bandeija",
    number: 21,
    position: "Atacante",
    age: 24,
    ability: 85,
    state: rio,
    country: brasil,
    img: pedro,
    fullName: "Pedro Guilherme Abreu dos Santos",
    leg: "Destro",
    height: 1.85,
    city: "Rio de Janeiro - RJ",
    birth: "20/06/1997",
    formerTeams: [" Fluminense", " Fiorentina"],
    arrival: "04/01/2021",
    contract: "31/12/2025",
    fanBase: ["⭐", "⭐", "⭐", "⭐", "⭐"],
    valueEuros: 10000000,
  },
  {
    name: "David Luiz",
    alsoKnownAs: "Calveludo",
    number: 23,
    position: "Zagueiro",
    age: 34,
    ability: 86,
    state: sp,
    country: brasil,
    img: davidluiz,
    fullName: "David Luiz Moreira Marinho",
    leg: "Destro",
    height: 1.89,
    city: "Diadema - SP",
    birth: "22/04/1987",
    formerTeams: [" Chelsea", " Paris", " Arsenal", " Benfica"],
    arrival: "11/09/2021",
    contract: "31/12/2022",
    fanBase: ["⭐", "⭐", "⭐", "⭐", "⭐"],
    valueEuros: 2000000,
  },
  {
    name: "Rodrigo Caio",
    number: 3,
    position: "Zagueiro",
    age: 28,
    ability: 84,
    state: sp,
    country: brasil,
    img: rodrigocaio,
    fullName: "Rodrigo Caio Coquette Russo",
    leg: "Destro",
    height: 1.82,
    city: "Dracena - SP",
    birth: "17/08/1993",
    formerTeams: [" São Paulo"],
    arrival: "01/01/2019",
    contract: "31/12/2023",
    fanBase: ["⭐", "⭐", "⭐", "⭐", "⭐"],
    valueEuros: 5000000,
  },
  {
    name: "Marinho",
    alsoKnownAs: "Dimarinho",
    number: 31,
    position: "Atacante",
    age: 31,
    ability: 79,
    state: al,
    country: brasil,
    img: marinho,
    fullName: "Mário Sérgio Santos Costa",
    leg: "Canhoto",
    height: 1.69,
    city: "Penedo - AL",
    birth: "29/05/1990",
    formerTeams: ["Santos", "Grêmio", "Cruzeiro"],
    arrival: "28/01/2022",
    contract: "31/12/2023",
    fanBase: ["⭐", "⭐", "⭐"],
    valueEuros: 3000000,
  },
  {
    name: "Matheuzinho",
    number: 34,
    position: "Lateral Direito",
    age: 21,
    ability: 77,
    state: pr,
    country: brasil,
    img: matheuzinho,
    fullName: "Matheus França Silva",
    leg: "Destro",
    height: 1.71,
    city: "Londrina - PR",
    birth: "08/09/2000",
    formerTeams: [" Londrina"],
    arrival: "20/07/2020",
    contract: "31/12/2023",
    fanBase: ["⭐", "⭐", "⭐"],
    valueEuros: 8000000,
  },
  {
    name: "João Gomes",
    number: 35,
    position: "Meio-Campo",
    age: 21,
    ability: 82,
    state: rio,
    country: brasil,
    img: joaogomes,
    fullName: "João Victor Gomes da Silva",
    leg: "Destro",
    height: 1.76,
    city: "Rio de Janeiro - RJ",
    birth: "12/02/2001",
    formerTeams: [""],
    arrival: "05/07/2021",
    contract: "31/12/2025",
    fanBase: ["⭐", "⭐", "⭐", "⭐", "⭐"],
    valueEuros: 9000000,
  },
  // {
  //   name: "Ramon",
  //   number: 20,
  //   position: "Lateral Esquerdo",
  //   age: 20,
  //   ability: 77,
  //   country:
  //     "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/flag-for-brazil_1f1e7-1f1f7.png",
  //   img: "https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/4/1647698499.jpeg",

  //   fullName: "Ramon Ramos Lima",
  //   leg: "Canhoto",
  //   height: "1,79m",
  //   city: "São João de Meriti - RJ",
  //   birth: "13/03/2001",
  //   formerTeams: [" "],
  //   arrival: "08/04/2021",
  //   contract: "31/12/2022",
  //   fanBase: "⭐⭐",
  //   valueEuros: 2500000
  // },
  {
    name: "Léo Pereira",
    alsoKnownAs: "Léo Trepa",
    number: 4,
    position: "Zagueiro",
    age: 26,
    ability: 77,
    state: pr,
    country: brasil,
    img: leopereira,
    fullName: "Leonardo Pereira",
    leg: "Canhoto",
    height: 1.89,
    city: "Curitiba - PR",
    birth: "31/01/1996",
    formerTeams: [" Atlético Paranaese"],
    arrival: "28/01/2020",
    contract: "31/12/2024",
    fanBase: ["⭐","⭐","⭐"],
    valueEuros: 3500000,
  },
  // {
  //   name: "Maurício Isla",
  //   alsoKnownAs: "Huaso",
  //   number: 44,
  //   position: "Lateral Direito",
  //   age: 33,
  //   ability: 75,
  //   country:
  //     "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/flag-for-chile_1f1e8-1f1f1.png",
  //   img: "https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/3/1647693605.jpeg",
  //   fullName: "Maurício Aníbal Isla Isla",
  //   leg: "Destro",
  //   height: "1,76m",
  //   city: "Buin",
  //   birth: "12/06/1988",
  //   formerTeams: [" Juventus"," Udinese"," Cagliari", " Fenerbahçe"],
  //   arrival: "19/08/2020",
  //   contract: "31/12/2023",
  //   fanBase: "⭐",
  //   valueEuros:500000,
  // },
  {
    name: "Hugo Souza",
    alsoKnownAs: "Neneca",
    number: 45,
    position: "Goleiro",
    age: 23,
    ability: 76,
    state: rio,
    country: brasil,
    img: neneca,
    fullName: "Hugo de Souza Nogueira",
    leg: "Destro",
    height: 1.96,
    city: "Duque de Caxias - RJ",
    birth: "31/01/1999",
    formerTeams: "base",
    arrival: "01/09/2019",
    contract: "31/12/2025",
    fanBase: ["⭐", "⭐"],
    valueEuros: 4000000,
  },
  // {
  //   name: "Willian Arão",
  //   number: 5,
  //   position: "Meio-Campo",
  //   age: 29,
  //   ability: 80,
  //   country:
  //     "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/flag-for-brazil_1f1e7-1f1f7.png",
  //   img: "https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/5/1647697965.jpeg",
  //   fullName: "Willian Souza Arão da Silva",
  //   leg: "Destro",
  //   height: "1,85m",
  //   city: "São Paulo - SP",
  //   birth: "12/03/1992",
  //   formerTeams: [" Corinthians"," Botafogo", " Portuguesa", " Chapecoense"],
  //   arrival: "01/01/2016",
  //   contract: "31/12/2023",
  //   fanBase: "⭐⭐",
  //   valueEuros:7000000,
  // },
  {
    name: "Éverton Ribeiro",
    number: 7,
    position: "Meio-Ofensivo",
    age: 32,
    ability: 83,
    state: sp,
    country: brasil,
    img: evertonribeiro,
    fullName: "Éverton Augusto de Barros Ribeiro",
    leg: "Canhoto",
    height: 1.74,
    city: "Arujá - SP",
    birth: "10/04/1989",
    formerTeams: [" Cruzeiro", " Coritiba", " Corinthians", " Al Ahli"],
    arrival: "20/06/2017",
    contract: "31/12/2023",
    fanBase: ["⭐", "⭐", "⭐", "⭐", "⭐"],
    valueEuros: 6000000,
  },
  {
    name: "Thiago Maia",
    alsoKnownAs:"Asteróide Maia",
    number: 8,
    position: "Meio-Defensivo",
    age: 24,
    ability: 80,
    state: rr,
    country: brasil,
    img: thiagomaia,
    fullName: "Thiago Maia Alencar",
    leg: "Canhoto",
    height: 1.8,
    city: "Boa Vista - RR",
    birth: "23/03/1997",
    formerTeams: [" Santos", " Lille"],
    arrival: "12/01/2022",
    contract: "31/12/2026",
    fanBase: ["⭐", "⭐", "⭐", "⭐"],
    valueEuros: 5500000,
  },
  {
    name: "Matheus Cunha",
    number: 51,
    position: "Goleiro",
    age: 20,
    ability: 74,
    state: sp,
    country: brasil,
    img: matheuscunha,
    fullName: "Matheus Cunha Queiroz",
    leg: "Destro",
    height: 1.93,
    city: "Tupi Paulista - SP",
    birth: "24/05/2001",
    formerTeams: "base",
    arrival: "",
    contract: "",
    fanBase: ["⭐"],
    valueEuros: 0,
  },
  // {
  //   name: "Noga",
  //   number: 41,
  //   position: "Zagueiro",
  //   age: 20,
  //   ability: 75,
  //   country:
  //     "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/flag-for-brazil_1f1e7-1f1f7.png",
  //   img: "https://fla-bucket-s3-us.s3.amazonaws.com/public/images/players/2/1647693439.jpeg",
  //   fullName: "Gabriel Rodrigues Noga",
  //   leg: "Destro",
  //   height: "1,83m",
  //   city: "Volta Redonda - RJ",
  //   birth: "25/01/2001",
  //   formerTeams: [" "],
  //   arrival: "2020",
  //   contract: "31/12/2024",
  //   fanBase: "⭐⭐",
  //   valueEuros:2000000
  // },
  {
    name: "Cleiton",
    number: 33,
    position: "Zagueiro",
    age: 18,
    ability: 71,
    state: ba,
    country: brasil,
    img: cleiton,
    fullName: "Cleiton Santana dos Santos",
    leg: "Destro",
    height: null,
    city: " '' - Bahia",
    birth: "25/04/2003",
    formerTeams: "base",
    arrival: "2022",
    contract: "",
    fanBase: ["⭐"],
    valueEuros: 0,
  },
  {
    name: "Fabrício Bruno",
    number: 15,
    position: "Zagueiro",
    age: 26,
    ability: 78,
    state: mg,
    country: brasil,
    img: fabriciobruno,
    fullName: "Fabrício Bruno Soares de Faria",
    leg: "Destro",
    height: 1.92,
    city: "Contagem - MG",
    birth: "12/02/1996",
    formerTeams: ["Red Bull Bragantino"],
    arrival: "2022",
    contract: "",
    fanBase: ["⭐", "⭐"],
    valueEuros: 3500000,
  },
  {
    name: "Pablo",
    number: 30,
    position: "Zagueiro",
    age: 30,
    ability: 81,
    state: ma,
    country: brasil,
    img: pablo,
    fullName: "Pablo do Nascimento Castro",
    leg: "Destro",
    height: 1.88,
    city: "São Luís - MA",
    birth: "21/06/1991",
    formerTeams: [" Corinthians", " Bordeaux"],
    arrival: "14/03/2022",
    contract: "31/12/2025",
    fanBase: ["⭐", "⭐"],
    valueEuros: 7000000,
  },
  {
    name: "Matheus França",
    number: 42,
    position: "Meio-Ofensivo",
    age: 17,
    ability: 73,
    state: rio,
    country: brasil,
    img: matheusfranca,
    fullName: "Matheus França de Oliveira",
    leg: "Destro",
    height: null,
    city: "Rio de Janeiro - RJ",
    birth: "01/04/2004",
    formerTeams: "base",
    arrival: "2022",
    contract: "",
    fanBase: ["⭐", "⭐"],
    valueEuros: 0,
  },
  {
    name: "Ayrton Lucas",
    number: 6,
    position: "Lateral Esquerdo",
    age: 24,
    ability: 78,
    state: rn,
    country: brasil,
    img: ayrtonlucas,
    fullName: "Ayrton Lucas Dantas de Medeiros",
    leg: "Canhoto",
    height: 1.8,
    city: "Carnaúba dos Dantas - RN",
    birth: "19/06/1997",
    formerTeams: [" Fluminense", " Spartak Moskow"],
    arrival: "31/03/2022",
    contract: "31/12/2022",
    fanBase: ["⭐", "⭐", "⭐"],
    valueEuros: 4500000,
  },
  {
    name: "Santos",
    number: 20,
    position: "Goleiro",
    age: 32,
    ability: 79,
    state: pb,
    country: brasil,
    img: santos,
    fullName: "Adebar dos Santos Neto",
    leg: "Destro",
    height: 1.88,
    city: "Campina Grande - PB",
    birth: "17/03/1990",
    formerTeams: ["Atlético Paranaense"],
    arrival: "01/04/2022",
    contract: "31/12/2025",
    fanBase: ["⭐", "⭐", "⭐", "⭐"],
    valueEuros: 3500000,
  },
  {
    name: "Dorival Júnior",
    alsoKnownAs: "Dorivrau",
    number: "T",
    position: "Treinador",
    age: 60,
    ability: 0,
    state: sp,
    country: brasil,
    img: dorival,
    fullName: "Dorival Silvestre Júnior",
    leg: "Destro",
    height: 1.86,
    city: "Araraquara - SP",
    birth: "25/04/1960",
    formerTeams: ["Santos", " São Paulo", " Palmeiras", " Vasco"],
    arrival: "2022",
    contract: "",
    fanBase: ["⭐","⭐","⭐","⭐"],
    valueEuros: 0,
  },
  {
    name: "Everton Soares",
    alsoKnownAs: "Cebolinha",
    number: 19,
    position: "Atacante",
    age: 26,
    ability: 85,
    state: ce,
    country: brasil,
    img: cebolinha,
    fullName: "Everton Sousa Soares",
    leg: "Destro",
    height: 1.74,
    city: "Maracanaú - CE",
    birth: "22/03/1996",
    formerTeams: ["Grêmio", " Benfica"],
    arrival: "18/07/2022",
    contract: "30/06/2026",
    fanBase: ["⭐","⭐","⭐","⭐"],
    valueEuros: 15000000,
  },
  {
    name: "Arturo Vidal",
    alsoKnownAs: "King Arturo",
    number: 32,
    position: "Meio-Defensivo",
    age: 35,
    ability: 84,
    state: chi,
    country: chile,
    img: vidal,
    fullName: "Arturo Erasmo Vidal Pardo",
    leg: "Destro",
    height: 1.8,
    city: "San Joaquin, Chile",
    birth: "22/05/1987",
    formerTeams: ["Bayern", " Juventus", " Barcelona", " Internazionale"],
    arrival: "18/07/2022",
    contract: "31/12/2023",
    fanBase: ["⭐","⭐","⭐","⭐"],
    valueEuros: 2000000,
  },
  {
    name: "Victor Hugo",
    number: 29,
    position: "Meio-Ofensivo",
    age: 18,
    ability: 78,
    state: rio,
    country: brasil,
    img: victorhugo,
    fullName: "Victor Hugo Gomes Silva",
    leg: "Canhoto",
    height: 1.82,
    city: "Rio de Janeiro - RJ",
    birth: "11/05/2004",
    formerTeams: "base",
    arrival: "01/07/2022",
    contract: "12/07/2027",
    fanBase: ["⭐","⭐","⭐"],
    valueEuros: 0,
  },
  {
    name: "Varela",
    number: 2,
    position: "Lateral Direito",
    age: 29,
    ability: 76,
    state: urug,
    country: uruguai,
    img: varela,
    fullName: "Guillermo Varela Olivera",
    leg: "Destro",
    height: 1.73,
    city: "Montevideo, Uruguai",
    birth: "24/03/1993",
    formerTeams: ["Dínamo Moskow"],
    arrival: "30/07/2022",
    contract: "30/06/2023",
    fanBase: ["⭐","⭐"],
    valueEuros: 2500000,
  },
  {
    name: "Erick Pulgar",
    number: 5,
    position: "Meio-Defensivo",
    age: 28,
    ability: 77,
    state:chi,
    country: chile,
    img: erick,
    fullName: "Erick Antonio Pulgar Farfán",
    leg: "Destro",
    height: 1.87,
    city: "Antofagasta, Chile",
    birth: "15/01/1994",
    formerTeams: ["Galatasaray", "Fiorentina", "Bologne"],
    arrival: "29/07/2022",
    contract: "31/12/2025",
    fanBase: ["⭐","⭐"],
    valueEuros: 6500000,
  },
];