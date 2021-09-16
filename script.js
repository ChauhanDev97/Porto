var tl = gsap.timeline();

tl.from('#ronel', {
    height: 0,
    opacity : 0,
    y :30,
    skewY : '15',
    ease : Expo.easeInOut,
    duration : 15
})

.from('#img', {
    height: 0,
    opacity : 0,
    y :30,
    ease : Expo.easeInOut,
    duration : 11
}, '-=11')

.from('#img1', {
    height: 0,
    stagger : '.3',
    opacity : 0,
    x :30,
    ease : Expo.easeInOut,
    duration : 11
}, '-=11')

.from('#img3', {
    height: 0,
    opacity : 0,
    y :30,
    ease : Expo.easeInOut,
    duration : 11
}, '-=11')

.from('#img4', {
    height: 0,
    stagger : '.3',
    opacity : 0,
    x :30,
    ease : Expo.easeInOut,
    duration : 11
}, '-=11')


.from('#roner', {
    opacity : 0,
    y :30,
    ease : Expo.easeInOut,
    duration : 11
}, '-=11')

.from('#details', {
    opacity : 0,
    ease : Expo.easeInOut,
    duration : 11
}, '-=11')


const menu = document.querySelector('#menu');
const fnav = document.querySelector('#fnav');
const close = document.querySelector('#fclose');

menu.addEventListener('click', function(){
    fnav.style.right ='0'
});

close.addEventListener('click',function(){
    fnav.style.right = '-100%'
});
