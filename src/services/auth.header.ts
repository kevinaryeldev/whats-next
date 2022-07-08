export default function authHeader() {
  if (localStorage.getItem('@whatsNext-userToken')) {
    return {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('@whatsNext-userToken'),
      },
    }
  } else {
    return {}
  }
}
