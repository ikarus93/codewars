function songDecoder(song){
  // ...
  song = song.replace(/WUB/g, " ").replace(/\s{2,}/g, " ");
  let idx1 = song.match(/\S/).index;
  let idx2 = song.length - song.split('').reverse().join('').match(/\S/).index;
 return song.slice(idx1, idx2);
}