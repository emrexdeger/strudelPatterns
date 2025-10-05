samples('github:emrexdeger/strudelSamples')
setCps(116/60/4)
$bytebeat: (n(irand(8).segment(4))).scale("c:minor:pentatonic").s("bytebeat").n(9)
  .ribbon("<34 2>", 2)
  .degradeBy(.4).lpf(4000).rel(1.5)
  .gain(1.2).delay("0.75:0.625:0.75").room(0.4).orbit(1)._scope()
$beat: stack(
  s("<k:1(2,4) k:1(3,8)> <s:1!3 [s:1@3 s:1]>").gain("1 0.4"),
  s("ch:2").struct("x x x x").sometimes(fast(choose(2,4))).degradeBy(0.125).lpf(1500).gain(0.55)
           .delay("0.25:0.125:0.35"),
  s("opal:2").fit().scrub(irand(16).div(16).segment(8)).almostNever(ply("2 | 4")).gain(0.6)
  .sometimesBy (.25, x=>x .delay(0.5))
  .orbit(2)
  )._scope()
