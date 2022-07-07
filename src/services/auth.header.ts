export default function authHeader() {
  if (localStorage.getItem('@whatsNext-userToken')) {
    return {
      Authorization: 'Bearer ' + localStorage.getItem('@whatsNext-userToken'),
    }
  } else {
    return {}
  }
}
