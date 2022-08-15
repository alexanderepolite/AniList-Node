const anilist = require('../lib/index');
const AniList = new anilist();

let animeLists = AniList.lists.anime('salixor');

// Read an anime list with specified status (here, COMPLETED)
animeLists.then(lists => console.log(JSON.stringify(lists.filter(list => list.status === 'COMPLETED'))));
