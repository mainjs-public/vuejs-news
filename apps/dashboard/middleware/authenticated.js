import split from 'lodash/split'

export default function ({ store, redirect, error, route } ) {
  // If the user is not authenticated
  if (!store.state.auth) {
    return redirect('/login')
  } else {
    const fullpath = route.fullPath;
    const arraypath = split(fullpath, '/');
    const role = store.state.auth.user.role ? store.state.auth.user.role : "Contributor";
    if (role !== 'Admin' && (arraypath[1] !== '' && (arraypath[1] !== 'catalog' || (arraypath[1] === 'catalog' && arraypath[2] && arraypath[2] !== 'blog' && arraypath[2] !== 'category')))) {
      error({
        message: 'You are not authorized',
        statusCode: 403
      })
    }
  }
}
