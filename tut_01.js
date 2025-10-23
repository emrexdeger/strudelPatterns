samples('github:emrexdeger/strudelSamples')
// setcpm(172/4)
// $kick: s(cat("k(3,8)?, k(5,8)?, k(7,8)?0.75")).slow(2)
// $perc: s("perc!16").n(irand(12)).gain(0.6)
// $snare: s("- s:1|- [s:1 s:1]").gain(1).fast(2)
// $opal: s("opal:2").gain(1.25).loopAt(2).room(0.75)
// $scape: s("scape:3").note("<c2 g1>").slow(2).cut(1.5).gain(1.5)
// $syn: s("syn:5!4").note("<c [eb|g|ab|f]>".sub(12)).gain(0.7)
//   .degradeBy(0.25).delay(".5:.25:.25").room(0.65)

setcpm(168/4)
_$:n("<[0,2,4,6]!2 [0,2,4,8]!2>/2".sub(14)).scale("C:minor").s("syn:0")
  .att(0.05).dec(1).sus(2).rel(4)
  .shape(0.5)
  .hpf(300).lpf(15500).gain(0.175)
  .room(0.9).rsize(4)

// $:s("scape").speed(0.5).cut(2).hpf(300).gain(1.25).shape(0.5)


_$:n("<[0 2 4 6] [0 2 4 8]>".sub(0)).slow(1).scale("C:minor").s("tri").att(0.1)
  .rel(2).hpf(250).shape(0.5)

$:s("ch:2!16").sometimesBy(0.5, x=>x.speed("0.5").slow(2)).pan(rand).gain(0.6)
   
$:s("k:2 s:1:1.5").distort(.5)

_$:note("<[c2 eb2 [g2 bb2] ab1] [c2 eb2 [g2 bb2] [ab3 g3]]>/2").s("wt_my:3").att(0.05)
  .warp(0.9).warpmode("<binary>")
  .rel(2)

_$: s("wt_my:0").scale("C:minor").n(irand(7)).att(0.05)
  .warp(0.9).warpmode("<binary>")
  .room(0.9).orbit(6)

_$:note("[c2|eb2|g2|bb2|ab1|ab3|g3]").s("wt_my:3").att(0.05)
  .warp(0.9).warpmode("<binary>")
  .rel(2)

$melo1: s("tri tri*2").n(irand(10).add("[6 | 7]")).scale("C:minor")
  .rib("<3 6>/2",2).hpf(350).pan(sine.slow(4)).att(.25).rel(2)
   

$melo2: n(irand(16).add(6)).struct("x").s("tri").scale("C:minor")
   .pan(sine.slow(2)).rel(2).gain(0.9)

$:note("<[c4, eb4, g4] [c4, f4, ab]>/2, <c3 [ab2 bb2]>/2").s("supersaw")
  .hpf(500).hpenv(slider(4.112,0,8)).hpq(8).lpf(2000)
  .rel(.5).gain(0.5)

$: s("perc*8").n(irand(12))

$ride: s("ride*2").sometimesBy(0.25, x=>x.speed(0.75).ply(2))
