export default function (app) {
  // If the user is authenticated
  if (app.$cookiz.get('userdata')) {
    app.userData = app.$cookiz.get('userdata')

    if (!app.userData.id) {
      return app.redirect('/')
    }
  } else {
    return app.redirect('/')
  }
}
