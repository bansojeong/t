function animate(el) {
    const tl = gsap.timeline(TL_DEFAULTS);
  
    tl.addLabel("start", 0).addLabel("upcoming", 0.8).addLabel("end", 1.35);
    tl.timeScale(1.15);
  
    tl
      .to(
        el,
        {
          duration: 0.8,
          morphSVG: (i) => morphs.small[i],
          stagger: null,
          ease: "none"
        },
        "start"
      )
      .to(
        el,
        {
          duration: 0.8,
          y: -60,
          ease: CUSTOM_EASE.jump,
          morphSVG: (i) => morphs.stretched[i]
        },
        "upcoming"
      )
      .to(
        el,
        {
          y: 0,
          ease: CUSTOM_EASE.drop
        },
        "end"
      )
      .to(
        el,
        {
          duration: 0.5,
          morphSVG: (i) => morphs.small[i],
          ease: CUSTOM_EASE.drop
        },
        "end+=0.2"
      )
      .to(
        el,
        {
          duration: 0.7,
          morphSVG: (i) => morphs.original[i],
          ease: "elastic.out(1, 1)"
        },
        "end+=.6"
      );
  }
  
  animate(".boost-1 path");
  animate(".boost-2 path");