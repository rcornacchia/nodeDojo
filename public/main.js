window.addEventListener('load', function() {

  var lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);

  // buttons
  var btn_login = document.getElementById('btn-login');
  var btn_logout = document.getElementById('btn-logout');

  if (!!btn_login) {
    btn_login.addEventListener('click', function() {
      lock.show();
    });
  }

  if (!!btn_logout) {
    btn_logout.addEventListener('click', function() {
      logout();
    });
  }

  lock.on("authenticated", function(authResult) {
    lock.getProfile(authResult.idToken, function(error, profile) {
      if (error) { return; }
      localStorage.setItem('id_token', authResult.idToken);
      // Display user information
      show_profile_info(profile);
    });
  });

  //retrieve the profile:
  var retrieve_profile = function() {
    var id_token = localStorage.getItem('id_token');
    if (id_token) {
      lock.getProfile(id_token, function (err, profile) {
        if (err) {
          return alert('There was an error getting the profile: ' + err.message);
        }
        // Display user information
        show_profile_info(profile);
      });
    }
  };

  var show_profile_info = function(profile) {
    console.log(profile);
    var avatar = document.getElementById('avatar');
    // document.getElementById('nickname').textContent = profile.nickname;
    // document.getElementById('nickname').style.display = "block";
    btn_login.style.display = "none";
    // avatar.src = profile.picture;
    // avatar.style.display = "block";
    btn_logout.style.display = "block";
  };

  var logout = function() {
    localStorage.removeItem('id_token');
    window.location.href = "/";
  };

  retrieve_profile();
});
