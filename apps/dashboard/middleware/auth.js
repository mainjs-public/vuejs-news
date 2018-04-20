export default function ({ req, store, error, redirect }) {
  // if (!store.state.authUser) {
  //   // error({
  //   //   message: 'You are not connected',
  //   //   statusCode: 403
  //   // })
  //   // redirect('/login')
  //   console.log('run a user');
  //   store.commit('SET_USER', {user: 'test'})
  // }
  console.log('run build')
  store.commit('SET_USER', {user: {name: 'Linh Pham'}})
}
