export interface IRecipe {
    id: number,
    title: string,
    description: string,
    ingredients: string[],
    instructions: string[],
    img: string;
}

export const recipies: IRecipe[] = [
    {
      "id": 1,
      "title": "Spaghetti Carbonara",
      "description": "Klassisk italiensk pasta med ägg, parmesan och pancetta.",
      "ingredients": [
        "200 g spaghetti",
        "100 g pancetta",
        "2 ägg",
        "50 g riven parmesan",
        "Salt och svartpeppar"
      ],
      "instructions": [
        "Koka pastan enligt anvisning.",
        "Stek pancetta tills den blir knaprig.",
        "Vispa ihop ägg och parmesan.",
        "Blanda pastan med pancetta och äggblandning.",
        "Servera med extra parmesan och peppar."
      ],
      "img": "https://img.koket.se/standard-mega/spaghetti-carbonara-5.jpg"
    },
    {
      "id": 2,
      "title": "Penne Arrabbiata",
      "description": "Het pastarätt med tomat och chili.",
      "ingredients": [
        "200 g penne",
        "2 msk olivolja",
        "2 vitlöksklyftor",
        "1 tsk chiliflakes",
        "400 g krossade tomater",
        "Salt och persilja"
      ],
      "instructions": [
        "Koka penne enligt paketet.",
        "Fräs vitlök och chili i olivolja.",
        "Tillsätt krossade tomater och låt puttra.",
        "Blanda med pastan och toppa med persilja."
      ],
      "img": "https://tastesbetterfromscratch.com/wp-content/uploads/2020/03/Penne-Arrabbiata-1-2.jpg"
    },
    {
      "id": 3,
      "title": "Tagliatelle Alfredo",
      "description": "Krämig pasta med smör och parmesan.",
      "ingredients": [
        "200 g tagliatelle",
        "50 g smör",
        "1 dl grädde",
        "50 g riven parmesan",
        "Salt och svartpeppar"
      ],
      "instructions": [
        "Koka tagliatelle.",
        "Smält smör och tillsätt grädde.",
        "Rör ner parmesan och krydda.",
        "Blanda med pastan och servera."
      ],
      "img": "https://example.com/tagliatelle-alfredo.jpg"
    },
    {
      "id": 4,
      "title": "Lasagne Bolognese",
      "description": "Klassisk lasagne med köttfärssås och béchamelsås.",
      "ingredients": [
        "Lasagneplattor",
        "400 g köttfärs",
        "1 gul lök",
        "2 vitlöksklyftor",
        "400 g krossade tomater",
        "Béchamelsås",
        "Riven ost"
      ],
      "instructions": [
        "Gör köttfärssåsen och béchamelsåsen.",
        "Varva sås och plattor i en form.",
        "Toppa med ost och grädda i 200°C i 30 minuter."
      ],
      "img": "https://example.com/lasagne-bolognese.jpg"
    },
    {
      "id": 5,
      "title": "Fettuccine Pesto",
      "description": "Fräsch pasta med basilika och parmesan.",
      "ingredients": [
        "200 g fettuccine",
        "2 dl färsk basilika",
        "50 g pinjenötter",
        "50 g parmesan",
        "1 dl olivolja",
        "Salt och peppar"
      ],
      "instructions": [
        "Koka fettuccine.",
        "Mixa basilika, pinjenötter, parmesan och olivolja till pesto.",
        "Blanda med pastan och servera."
      ],
      "img": "https://example.com/fettuccine-pesto.jpg"
    },
    {
      "id": 6,
      "title": "Tortellini med Ricotta och Spenat",
      "description": "Fylld pasta med ricotta, spenat och tomatsås.",
      "ingredients": [
        "200 g tortellini med ricotta och spenat",
        "2 msk olivolja",
        "1 gul lök",
        "400 g krossade tomater",
        "Basilika"
      ],
      "instructions": [
        "Koka tortellinin.",
        "Fräs lök i olivolja och tillsätt tomater.",
        "Låt puttra och krydda med basilika.",
        "Blanda med tortellinin."
      ],
      "img": "https://example.com/tortellini-ricotta-spenat.jpg"
    },
    {
      "id": 7,
      "title": "Spaghetti Aglio e Olio",
      "description": "Enkel pasta med vitlök, olivolja och chili.",
      "ingredients": [
        "200 g spaghetti",
        "4 vitlöksklyftor",
        "1 tsk chiliflakes",
        "3 msk olivolja",
        "Persilja",
        "Salt"
      ],
      "instructions": [
        "Koka pastan.",
        "Fräs vitlök och chili i olivolja.",
        "Blanda med pastan och toppa med persilja."
      ],
      "img": "https://example.com/spaghetti-aglio-olio.jpg"
    },
    {
      "id": 8,
      "title": "Pasta Primavera",
      "description": "Pasta med blandade grönsaker och lätt gräddsås.",
      "ingredients": [
        "200 g penne",
        "1 zucchini",
        "1 paprika",
        "100 g ärtor",
        "1 dl grädde",
        "Olivolja"
      ],
      "instructions": [
        "Koka pastan.",
        "Fräs grönsaker i olivolja.",
        "Tillsätt grädde och krydda.",
        "Blanda med pastan."
      ],
      "img": "https://example.com/pasta-primavera.jpg"
    },
    {
      "id": 9,
      "title": "Ravioli med Svamp och Salviasmör",
      "description": "Lyxig pasta med svampfyllning och salviasmör.",
      "ingredients": [
        "200 g ravioli med svampfyllning",
        "50 g smör",
        "Färsk salvia",
        "Parmesan",
        "Salt och peppar"
      ],
      "instructions": [
        "Koka raviolin.",
        "Smält smör och stek salvia i det.",
        "Blanda med pastan och toppa med parmesan."
      ],
      "img": "https://example.com/ravioli-svamp-salvia.jpg"
    }
  ]
  