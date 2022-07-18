export function authHeader() {
  if (localStorage.getItem('@whatsNext-userToken')) {
    return {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem('@whatsNext-userToken'),
      },
    }
  } else {
    return {}
  }
}
export function getId() {
  if (localStorage.getItem('@whatsNext-userId')) {
    return localStorage.getItem('@whatsNext-userId')
  }
}
