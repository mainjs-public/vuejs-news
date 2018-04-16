export default function ({ store, redirect }) {
  if (!store.state.user.user) {
    // error({
    //   message: 'You are not connected',
    //   statusCode: 403
    // })
    redirect('/login');
  }
}
