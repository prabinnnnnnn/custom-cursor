function locomotive(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
locomotive()




let tl = gsap.timeline()

tl.to('.profile',{
  duration:4,
  scrollTrigger:{
      trigger:'.profile',
      scroller:'.main',
      markers:true, 
      start:'top 10%',
      end:'bottom -200%',
      pin:true,
      scrub:3
      
  }
},'a')


tl.to('nav',{
  duration:4,
  scrollTrigger:{
      trigger:'nav',
      scroller:'.main',        
      position:'fixed',
      start:'top 0%',
      end:'bottom -200%',
      pin:true,
      scrub:3
      
  }
})