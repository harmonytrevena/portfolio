let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/profile-picture-transparent-background.png') {
      myImage.setAttribute ('src','images/profile-personal-brand-statement.png');
      } else {
      myImage.setAttribute ('src','images/profile-picture-transparent-background.png');
    }
}
