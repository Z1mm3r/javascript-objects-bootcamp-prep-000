var playlist = { sum41: "fatlip"};

function updatePlaylist(playlist, artist, songTitle)
{
  return Object.assign({},playlist,{[artist]: [songTitle]});
}