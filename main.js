
//If the user clicks the Android button EVENT 
document.getElementById('android-btn').addEventListener('click', androidbtnActive);

 
//FUNCTIONS
function androidbtnActive() {

    //Change the 'Android vs Apple' image to the Android Logo in the images folder
    document.getElementById('main-img').src='images/android-Logo.jpg';

    //Change the 'Explore the Debate' link so that the background color is #a4c93b
    document.getElementById('ETD').style.backgroundColor ='#a4c93b';

    //Change the background color of the body to #a4c93b
    document.getElementById('BGC').style.backgroundColor ='#a4c93b';

    //Change the 'Explore the Debate' link so that the href is now 'https://www.android.com/'
    document.getElementById('ETD').href='https://www.android.com/';

    //Change the 'Explore the Debate' link so that the link says 'Android Home'
    document.getElementById('ETD').innerText='Android Home'

   
}


//If the user clicks the Apple button:
document.getElementById('apple-btn').addEventListener('click', applebtnActive);


//FUNCTIONS
function applebtnActive () {

    //Change the 'Android vs Apple' image to the Apple Logo in the images folder
    document.getElementById('main-img').src='images/apple-Logo.jpg';

    //Change the 'Explore the Debate' link so that the background color is #b6bcca
    document.getElementById('ETD').style.backgroundColor ='#b6bcca';

    //Change the background color of the body to #b6bcca
    document.getElementById('BGC').style.backgroundColor ='#b6bcca';

    //Change the 'Explore the Debate' link so that the href is now 'https://www.apple.com/'
    document.getElementById('ETD').href='https://www.apple.com/';

    //Change the 'Explore the Debate' link so that the link says 'Apple Home'
    document.getElementById('ETD').innerText='Apple Home'

}
  

