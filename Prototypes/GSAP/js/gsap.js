window.onload = () => {

    const nav = document.querySelector('nav')

    

    document.querySelector('#TO').querySelector('.playBtn').addEventListener('click', e => {
        gsap.to('#TO .red', {duration: 1, x:300, opacity:0.5, rotation: 180})
    })
    
    document.querySelector('#FROM').querySelector('.playBtn').addEventListener('click', e => {
        gsap.from('#FROM .red', {duration: 1, x:300, opacity:1, rotation: 180})
    })
    
    document.querySelector('#EASE').querySelector('.playBtn').addEventListener('click', e => {
        gsap.to('#EASE .red', {duration: 2, x:300, opacity:0.5, rotation: 180, ease:'elastic'})
    })
    
    document.querySelector('#STAGGER').querySelector('.playBtn').addEventListener('click', e => {
        gsap.to('#STAGGER .red', {duration: 2, x:300, opacity:0.5, rotation: 180,ease:'power1.inOut',delay:0.5,stagger: 0.4})
    })
    
    document.querySelector('#CALLBACK').querySelector('.playBtn').addEventListener('click', e => {
        gsap.to('#CALLBACK .red', {duration: 1, x:300, opacity:0.5, rotation: 180})
    })
    
    document.querySelector('#ANIMATION_CONTROLS').querySelector('.playBtn').addEventListener('click', e => {
        gsap.to('#ANIMATION_CONTROLS .red', {duration: 1, x:300, opacity:0.5, rotation: 180})
    })
    
    document.querySelector('#SEQUENCING').querySelector('.playBtn').addEventListener('click', e => {
        gsap.to('#SEQUENCING .red', {duration: 1, x:300, opacity:0.5, rotation: 180})
    })
    


}