// const MagX = require('magx-client');
const {host, port, protocol} = window.document.location

const serializer = MagX.SchemaSerializer
const id = sessionStorage.getItem('sessionId')
const token = sessionStorage.getItem('token')

const gameStore = {
  state: {
    username: '',
    client: new MagX.Client({
      address: host.replace(/:.*/, ''),
      port: port,
      secure: protocol === 'https:',
      token,
      id,
      serializer,
    }),
    rooms: null,
    room: null,
  },
  getters: {
    username: ({username}) => username,
    room: ({room}) => room,
    rooms: ({rooms}) => rooms,
    id: ({client}) => client && client.auth && client.auth.id || '',
  },
  mutations: {
    setUserName(state, name) {
      state.username = name
    },
    setRoom(state, room) {
      state.room = room
    },
    setRooms(state, rooms) {
      state.rooms = rooms
    }
  },
  actions: {
    async Rooms({state, commit}) {
      const rooms = await state.client.getRooms('game').then(data => data)
      commit('setRooms', rooms)

    },
    async Join({state, dispatch}, roomID) {
      let room = await state.client.joinRoom(roomID)

      if (room) {
        dispatch('handleRoom', room)
        console.log('Joined room!')
      } else {
        console.log('Cannot join room!')
      }
    },
    async auth({commit, state}, data) {
      console.log('Auth', data)
      try {
        const session = await state.client.authenticate(data)
        console.log('Session', data, session)
        commit('setUserName', session.data.username)
        sessionStorage.setItem('sessionId', session.id)
        sessionStorage.setItem('token', session.token)
        sessionStorage.setItem('username', session.data.username)
      } catch (err) {
        console.error(err)
      }
    },
    async joinRoom({state, dispatch}) {

      const rooms = await state.client.getRooms('game')

      console.log('Avaliable rooms:', rooms)
      let room = rooms.length
        ? await state.client.joinRoom(rooms[0].id)
        : await state.client.createRoom('game')

      if (room) {
        dispatch('handleRoom', room)
        console.log('Joined room!')
      } else {
        console.log('Cannot join room!')
      }
    },
    async createLobby({state, dispatch}) {
      let room = await state.client.createRoom('game')
      if (room) {
        dispatch('handleRoom', room)
      }
    },
    handleRoom({commit, dispatch}, room) {
      commit('setRoom', room)
      sessionStorage.setItem('roomId', room.id)

      room.onPatch((patch) => {
        console.log('onPatch', patch)
        dispatch('mosx_patch', patch)
      })

      room.onSnapshot((snapshot) => {
        console.log('onSnapshot', snapshot)
        dispatch('mosx_snapshot', snapshot)
      })
    },
    async getRooms({state}) {
      const rooms = await state.client.getRooms('game')
      console.log(rooms)
    }
  }
}

