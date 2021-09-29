window.onload = () => {
    // const tl = gsap.timeline();

    // tl.from('.text h1 .hidetext', {
    //         duration: 1.5,
    //         y: '100%',
    //         ease: 'power4.out'
    //     })
    //     .from('.images div img', {
    //         duration: 1,
    //         x: 100,
    //         opacity: 0,
    //         stagger: 0.5,
    //     }, "<")
    //     .from('nav', {
    //         duration: 1,
    //         padding: 0,
    //         width: 0,
    //         ease: 'power4.in'
    //     }, "<").from('nav ul li a', {
    //         duration: 1.5,
    //         x: -100,
    //         opacity: 0,
    //         ease: 'back',
    //         stagger: 0.2
    //     }, ).from('.socials a .hidetext', {
    //         duration: 1.5,
    //         y: 100,
    //         stagger: 0.3
    //     }, "<")
    //     .from('.text h2 .hidetext', {
    //         duration: 1.5,
    //         y: '100%',
    //         ease: 'power4.out'
    //     }, "<+0.5").from('.text h3 .hidetext', {
    //         duration: 1.5,
    //         y: '100%',
    //         ease: 'power4.out'
    //     }, "<")
    //     .from('.text p .hidetext', {
    //         duration: 1.5,
    //         y: '120%',
    //         ease: 'power4.out'
    //     }, "<+0.5")
    //     .set('.images div', {
    //         overflow: 'visible'
    //     })

    const nav_anim = gsap.timeline({
        paused: true,
        reversed: true
    })
    nav_anim.to('.menu', {
            duration: 0.5,
            x: 0,
        })
        .from('.menu li', {
            duration: 0.4,
            opacity: 0,
            x: -50,
        })
    document.querySelector('.lite').addEventListener('click', e => {
        toggleNav(nav_anim)
    })


    // document.querySelectorAll('.socials a').forEach(a => {
    //     a.addEventListener('mouseover', e => {
    //         let anim = gsap.timeline();
    //         anim.to(a, {
    //             duration: 0.8,
    //             backgroundColor: 'black',
    //             color: 'white',
    //         })
    //     })
    // })

    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('mouseenter', e => {
            console.log('Function is executing')
            let anim = gsap.timeline();
            anim.to(img, {
                duration:0.5,
                y:-30,
                ease: 'power4.out'
            }).to(img, {
                duration:0.5,
                y:0,
                ease: 'bounce',
            })
        })
    })

    function toggleNav(tween) {
        tween.reversed() ? tween.play() : tween.reverse()
    }



}