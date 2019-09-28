import Cookies from 'universal-cookie'

export default ({ req, route, redirect }) => {
  console.log(route.path)
  if (['/'].includes(route.path)) {
    return
  }
  const cookies = req ? new Cookies(req.headers.cookie) : new Cookies()
  const credentail = cookies.get('credential')

  if (credentail && route.path === '/login') {
    console.log('ログイン済')
    return redirect('/')
  }

  if (!credentail && route.path !== '/login') {
    console.log('ログインしてください')
    return redirect('/login')
  }
  // if (process.browser) {
  //   console.log('console.log() on browser')
  // } else {
  //   console.log('console.log() on SSR server')
  // }
}