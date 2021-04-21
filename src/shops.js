const shops = [
  {
    '_id': '1',
    'name': 'Afro Shop Iman',
    'image': '/images/bg_1.jpg',
    'address': 'Vorstadtstr. 33',
    'city': 'Saarbrücken',
    'state': 'Saarland',
    'postalCode': '66117',
    'country': 'Deutschland',
    'category': 'AfroShop',
    'rating': 4.5,
    'numReviews': 1,
    'description':'No description for now - Coming soon!',
    'hours': 'Mo - Sa : 10.00 - 20.00 Uhr',
    'phone': '0681-9703917',
  },
  {
    '_id': '2',
    'name': 'Afro Shop Dafrob',
    'image': '/images/bg_2.jpg',
    'address': 'Hüttenstr. 5',
    'city': 'Neuenkirchen',
    'state': 'Saarland',
    'postalCode': '66538',
    'country': 'Deutschland',
    'category': 'AfroShop',
    'rating': 4.0,
    'numReviews': 2,
    'description':'No description for now - Coming soon!',
    'hours': 'Mo - Sa : 10.00 - 20.00 Uhr',
    'phone': '017670787794',
  },
  {
    '_id': '3',
    'name': 'Bobby Afro Shop',
    'image': '/images/bg_3.jpg',
    'address': 'Bergstraße 61',
    'city': 'Saarbrücken',
    'state': 'Saarland',
    'postalCode': '66115 ',
    'country': 'Deutschland',
    'category': 'AfroShop',
    'rating': 3.0,
    'numReviews': 5,
    'description':'No description for now - Coming soon!',
    'hours': 'Mo - Sa : 10.00 - 20.00 Uhr',
    'phone': '0681-9977239',
  },
  {
    '_id': '4',
    'name': 'Gye Nyame Afro Shop',
    'image': '/images/bg_4.png',
    'address': 'Klausenerstraße 20',
    'city': 'Saarbrücken',
    'state': 'Saarland',
    'postalCode': '66115 ',
    'country': 'Deutschland',
    'category': 'AfroShop',
    'rating': 4.0,
    'numReviews': 2,
    'description':'No description for now - Coming soon!',
    'hours': 'Mo - Sa : 10.00 - 20.00 Uhr',
    'phone': '0681-93556245',
  },
  {
    '_id': '5',
    'name': 'Linas Afro Shop',
    'image': '/images/bg_5.jpg',
    'address': 'Johannisstr. 31',
    'city': 'Saarbrücken ',
    'state': 'Saarland',
    'postalCode': '66111 ',
    'country': 'Deutschland',
    'category': 'AfroShop',
    'rating': 2.0,
    'numReviews': 2,
    'description':'No description for now - Coming soon!',
    'hours': 'Mo - Sa : 10.00 - 20.00 Uhr',
    'phone': 'Telefon nicht bekannt',
  },
  {
    '_id': '6',
    'name': 'Afro Shop Tropicana',
    'image': '/images/bg_6.png',
    'address': 'Berliner Promenade 17',
    'city': 'Saarbrücken',
    'state': 'Saarland',
    'postalCode': '66111 ',
    'country': 'Deutschland',
    'category': 'AfroShop',
    'rating': 3.5,
    'numReviews': 12,
    'description':'No description for now - Coming soon!',
    'hours': 'Mo - Sa : 10.00 - 20.00 Uhr',
    'phone': '0681-37996148',
  },
  {
    '_id': '7',
    'name': 'Melanies AfroShop',
    'image': '/images/bg_7.png',
    'address': 'Karcherstraße 23',
    'city': 'Saarlouis',
    'state': 'Saarland',
    'postalCode': '66740 ',
    'country': 'Deutschland',
    'category': 'AfroShop',
    'rating': 4.0,
    'numReviews': 2,
    'description':'No description for now - Coming soon!',
    'hours': 'Mo - Sa : 10.00 - 20.00 Uhr',
    'phone': '06831-8906992',
  },
  {
    '_id': '8',
    'name': 'Alpha & Omega Int.',
    'image': '/images/bg_8.png',
    'address': 'Weserstr. 3-4 ',
    'city': 'Berlin ',
    'state': 'Berlin ',
    'postalCode': '12047 ',
    'country': 'Deutschland',
    'category': 'AfroShop',
    'rating': 4.0,
    'numReviews': 2,
    'description':'No description for now - Coming soon!',
    'hours': 'Mo - Sa : 10.00 - 20.00 Uhr',
    'phone': '03061-624972',
  },
  {
    '_id': '9',
    'name': 'Afro By Mary',
    'image': '/images/bg_9.png',
    'address': 'Zingster str 20',
    'city': 'Berlin',
    'state': 'Berlin',
    'postalCode': '13051',
    'country': 'Deutschland',
    'category': 'AfroShop',
    'rating': 1.0,
    'numReviews': 1,
    'description':'No description for now - Coming soon!',
    'hours': 'Online',
    'phone': '01734594121',
  },
  {
    '_id': '10',
    'name': 'Afrika Vitrine',
    'image': '/images/bg_10.png',
    'address': 'Potsdamer Str. 156',
    'city': 'Berlin–Schöneberg',
    'state': 'Berlin',
    'postalCode': '10783 ',
    'country': 'Deutschland',
    'category': 'AfroShop',
    'rating': 2.0,
    'numReviews': 2,
    'description':'No description for now - Coming soon!',
    'hours': 'Mo - Sa : 10.00 - 20.00 Uhr',
    'phone': 'Telefon nicht bekannt',
  },
  {
    '_id': '11',
    'name': 'Asia & Afro Shop',
    'image': '/images/bg_11.png',
    'address': 'Leykestr. 1',
    'city': 'Berlin–Neukölln',
    'state': 'Berlin',
    'postalCode': '12053 ',
    'country': 'Deutschland',
    'category': 'AfroShop',
    'rating': 3.0,
    'numReviews': 3,
    'description':'No description for now - Coming soon!',
    'hours': 'Mo - Sa : 10.00 - 20.00 Uhr',
    'phone': 'Telefon nicht bekannt',
  },
  {
    '_id': '12',
    'name': 'Chriskes Afro Shop',
    'image': '/images/bg_12.png',
    'address': 'Rheinstraße 69',
    'city': 'Wiesbaden',
    'state': 'Hessen',
    'postalCode': '65185',
    'country': 'Deutschland',
    'category': 'AfroShop',
    'rating': 2.5,
    'numReviews': 1,
    'description':'No description for now - Coming soon!',
    'hours': 'Mo - Sa : 09.00 - 20.00 Uhr',
    'phone': '061118171740',
  },
  {
    '_id': '13',
    'name': 'African Bazaar',
    'image': '/images/bg_13.png',
    'address': 'Mainzer Landstraße 107',
    'city': 'Frankfurt am Main',
    'state': 'Hessen',
    'postalCode': '60329  ',
    'country': 'Deutschland',
    'category': 'AfroShop',
    'rating': 4.5,
    'numReviews': 1,
    'description':'No description for now - Coming soon!',
    'hours': 'Mo - Sa : 09.00 - 20.00 Uhr',
    'phone': '069259488',
  },
  {
    '_id': '14',
    'name': 'African Shop',
    'image': '/images/bg_14.png',
    'address': 'Wiesenhüttenstraße 39',
    'city': 'Frankfurt am Main',
    'state': 'Hessen',
    'postalCode': '60329',
    'country': 'Deutschland',
    'category': 'AfroShop',
    'rating': 1.5,
    'numReviews': 5,
    'description':'No description for now - Coming soon!',
    'hours': 'Mo - Sa : 10.00 - 20.00 Uhr',
    'phone': '06926010327',
  },
  {
    '_id': '15',
    'name': 'Kaneshie African Shop',
    'image': '/images/bg_15.png',
    'address': 'Moselstraße 51',
    'city': 'Frankfurt am Main',
    'state': 'Hessen',
    'postalCode': '60329',
    'country': 'Deutschland',
    'category': 'AfroShop',
    'rating': 2.5,
    'numReviews': 1,
    'description':'No description for now - Coming soon!',
    'hours': 'Mo - Sa : 09.30 - 20.00 Uhr',
    'phone': '03053606308',
  },
  {
    '_id': '16',
    'name': 'Afro Shop Fouta',
    'image': '/images/bg_16.png',
    'address': 'Oestermärsch 25',
    'city': 'Dortmund',
    'state': 'NRW',
    'postalCode': '44145',
    'country': 'Deutschland',
    'category': 'AfroShop',
    'rating': 5.0,
    'numReviews': 1,
    'description':'No description for now - Coming soon!',
    'hours': 'Mo - Sa : 11.00 - 21.00 Uhr',
    'phone': '023153098523',
  },
  {
    '_id': '17',
    'name': 'Afro World DO.',
    'image': '/images/bg_16.png',
    'address': 'Borsigstraße. 62',
    'city': 'Dortmund',
    'state': 'NRW',
    'postalCode': '44145',
    'country': 'Deutschland',
    'category': 'AfroShop',
    'rating': 2.0,
    'numReviews': 13,
    'description':'No description for now - Coming soon!',
    'hours': 'Mo - Sa : 10.00 - 20.00 Uhr',
    'phone': '02314759235',
  },
  {
    '_id': '18',
    'name': 'Max Afroshop',
    'image': '/images/bg_16.png',
    'address': 'Gnadenort 11',
    'city': 'Dortmund',
    'state': 'NRW',
    'postalCode': '44135',
    'country': 'Deutschland',
    'category': 'AfroShop',
    'rating': 5.0,
    'numReviews': 1,
    'description':'No description for now - Coming soon!',
    'hours': 'Mo - Sa : 10.00 - 20.00 Uhr',
    'phone': '02312063967',
  },
]


export default shops
