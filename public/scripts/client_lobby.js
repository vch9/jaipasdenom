/**
 * Handle the client-side for the lobby.
 */
function fetchPlayers(socket, uuid) {
    socket.emit('fetch players', uuid);
}

function joinLobby(socket, uuid, pseudo) {
    const msg = uuid + ';' + pseudo;
    socket.emit('join lobby', msg)
}