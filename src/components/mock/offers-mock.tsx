import { CardProps } from '../../types';
import { getArray, getBoolean, getRandom } from '../../utils';

const mockOffers: CardProps[] = [
  {
    'id': 'e10a67d3-8f00-4093-a489-855c6a0dac97',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'apartment',
    'price': 306,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.5,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '1a056894-729d-4186-bacb-644c1545e30f',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'apartment',
    'price': 453,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.2,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(0, 3),
    'maxAdults': getRandom(1, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '1d1e3275-032a-4eb6-a141-2a4c27e8c6a2',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'hotel',
    'price': 474,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.8,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '7d3f01ee-3e5a-42da-8f97-fd15eb863b29',
    'title': 'The Joshua Tree House',
    'type': 'house',
    'price': 485,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.4,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': 'e4264070-55ca-43ff-b492-e122574942c5',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 240,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87561,
      'longitude': 2.375499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.2,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '36f22330-2c5c-4f16-b6ce-8767315366ac',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'hotel',
    'price': 470,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.87961000000001,
      'longitude': 2.353499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.1,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '06668aff-e308-4f5c-b893-fddd03be87b6',
    'title': 'The Joshua Tree House',
    'type': 'apartment',
    'price': 331,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.950361,
      'longitude': 6.961974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': 'd2a3e38d-eb20-49ee-ae88-42f349f588b3',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'house',
    'price': 995,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.6,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '444f1b07-c10a-479a-8567-59a8ebfb90cc',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'apartment',
    'price': 446,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.934361,
      'longitude': 6.943974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '869ec52e-f27c-4508-a7c0-2fc1a924cc23',
    'title': 'The Joshua Tree House',
    'type': 'house',
    'price': 848,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.947361,
      'longitude': 6.9799739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.8,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '01e2236e-56f3-46c9-8c2c-3e83de736b38',
    'title': 'Loft Studio in the Central Area',
    'type': 'room',
    'price': 163,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.960361,
      'longitude': 6.967974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.5,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': 'b7ad3707-1049-4977-9c0e-8f626d18a17d',
    'title': 'Tile House',
    'type': 'house',
    'price': 585,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.941361,
      'longitude': 6.956974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.8,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': 'd210ec9f-9d37-4008-a19d-764086931dfb',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 199,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.916361,
      'longitude': 6.944974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': 'd0cb6d2b-24b9-45f1-bd43-485e929599b8',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'house',
    'price': 286,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.949361,
      'longitude': 6.976974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': 'a6e46238-573f-4056-99a0-89cbc25de49c',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'house',
    'price': 330,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.913361,
      'longitude': 6.9509739999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.9,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '1d5321d1-f15a-45ee-a392-2f9913ad72d5',
    'title': 'Tile House',
    'type': 'house',
    'price': 876,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.930361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.3,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '68a4c864-c1d7-4d3d-b91d-5aff033e5f8b',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 468,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.854557,
      'longitude': 4.364697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.8,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': 'e7ec8413-2587-4b46-b04e-9e0d2a42973f',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'hotel',
    'price': 341,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.371696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': 'c02e86c3-ee79-4088-a0c9-4efe80fc6da4',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'room',
    'price': 214,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.827557,
      'longitude': 4.336697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '87a41cf8-ded5-4a42-b025-c63bd47f5b9e',
    'title': 'The house among olive ',
    'type': 'room',
    'price': 137,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.867557,
      'longitude': 4.357697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.2,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '99b34508-cce7-4de9-9b27-39f46e966680',
    'title': 'Loft Studio in the Central Area',
    'type': 'hotel',
    'price': 346,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.842557,
      'longitude': 4.363696999999999,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.7,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '5c5a9c11-5d34-43c1-ba8d-503de3eb3553',
    'title': 'House in countryside',
    'type': 'house',
    'price': 690,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.385540000000006,
      'longitude': 4.902976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.8,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': 'd9a8feed-9415-49a9-8d1d-f3a30e848ed2',
    'title': 'House in countryside',
    'type': 'house',
    'price': 526,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.397540000000006,
      'longitude': 4.9099759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '9850f27d-9234-4bf1-a9a2-309d10ad86ba',
    'title': 'Loft Studio in the Central Area',
    'type': 'apartment',
    'price': 316,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37454,
      'longitude': 4.881976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.5,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '1bb6cb4c-04a9-4827-a37a-8aa592f5eaa8',
    'title': 'The house among olive ',
    'type': 'apartment',
    'price': 251,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.367540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.9,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '4730905f-30ff-4492-b842-c9b1119041b1',
    'title': 'Wood and stone place',
    'type': 'apartment',
    'price': 310,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.361540000000005,
      'longitude': 4.883976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.1,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '6b18d816-abe2-48a7-a267-ff593f98d3f0',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'apartment',
    'price': 321,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.35754,
      'longitude': 4.9179759999999995,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.5,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '9aac950f-22e0-4c4b-9d65-fdcbb392a258',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'apartment',
    'price': 254,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 52.37854,
      'longitude': 4.894976,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.1,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '5f4cd81f-3e35-45cf-8b5c-19f62ce37b12',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'room',
    'price': 212,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.555341000000006,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.7,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '10539ff3-ef2d-4e4d-9427-e3a504bebd6c',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'hotel',
    'price': 103,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.534341000000005,
      'longitude': 9.998654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.6,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '2dd1790d-c042-4a88-837d-a7cc286cf868',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'apartment',
    'price': 315,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.563341,
      'longitude': 9.975654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.4,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': 'd7a7ed9b-149f-4197-b5c5-5d54efe543ec',
    'title': 'Loft Studio in the Central Area',
    'type': 'house',
    'price': 267,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.574341000000004,
      'longitude': 10.022654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.7,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '4d496dce-15a6-4af1-95b8-68d98a29914d',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'house',
    'price': 903,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.573341000000006,
      'longitude': 10.025654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.3,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '5f02a0dd-8c50-43bf-a282-32d0f6f47179',
    'title': 'Loft Studio in the Central Area',
    'type': 'house',
    'price': 906,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.550341,
      'longitude': 9.980654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.7,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '0302614d-af7b-4186-b763-06459cd7aa8b',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 258,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.558341000000006,
      'longitude': 9.999654000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.8,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '43ed51f6-79f8-48a4-bf02-86925ccee45d',
    'title': 'Nice, cozy, warm big bed apartment',
    'type': 'hotel',
    'price': 415,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.216402,
      'longitude': 6.758314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.8,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '875d32cb-6cbe-43da-bbb6-0790aa9a5a67',
    'title': 'Loft Studio in the Central Area',
    'type': 'room',
    'price': 284,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.205402,
      'longitude': 6.7613140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': 'ec45b059-fc6a-42c0-bf45-52427d472ec9',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'apartment',
    'price': 343,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.248402000000006,
      'longitude': 6.763314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3.7,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': 'b2d38843-6c18-42f2-a4d4-9e9c62715e01',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment',
    'price': 485,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.250402,
      'longitude': 6.7853140000000005,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 1.6,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': 'c36b99cc-b46f-463f-89c6-939dad4edc11',
    'title': 'Waterfront with extraordinary view',
    'type': 'apartment',
    'price': 299,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.239402000000005,
      'longitude': 6.756314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.5,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '0342e08b-196a-4b1b-b655-cc9aea11104e',
    'title': 'Canal View Prinsengracht',
    'type': 'apartment',
    'price': 162,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.243402,
      'longitude': 6.791314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 1.6,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': '4b2a7ac3-a7db-4095-9120-040fcf8d00a9',
    'title': 'The Joshua Tree House',
    'type': 'apartment',
    'price': 432,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.214402,
      'longitude': 6.764314000000001,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.4,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  },
  {
    'id': 'a0b3ba3c-92c7-4322-89b0-94b986877802',
    'title': 'Tile House',
    'type': 'hotel',
    'price': 264,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.225402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.4,
    'images': getArray(getRandom(0, 5), () => `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`),
    'bedrooms': getRandom(1, 3),
    'maxAdults': getRandom(2, 5),
    'goods': [],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://thispersondoesnotexist.com/',
      'isPro': getBoolean(),
    },
    'description': 'Bla bla bla',
  }
];


export {mockOffers};
