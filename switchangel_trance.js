// SWITCHANGEL LET'S TRANCE
setcpm(140/4)
$kick: s("bd:4!4")._scope()
$snare: s("- sd:6").fast(2).sometimesBy(.2, x=>x.speed(0.5).delay(.7).gain(.6))
  .rib(6,4).room(.5).orbit(4)

$hat: s("hihat:4!16?").sometimes(x=>x.fast("2 | 4")).gain(2)

$bass: n("0".add(-14)).scale("g:minor")
  .s("supersaw").trancegate(1.5,45,1).orbit(2)
  .rlpf(slider(0.371)).lpenv(2).gain(1)

$lead: n("0@2 <-7 [-5 -2]> <0 -3 2 1>@3".add(7)).scale("g:minor")
  .s("supersaw").trancegate(1.5,45,1).orbit(3)
  .delay(.7).pan(rand)
  .rlpf(slider (0.329392)).lpenv(2).gain(.65)._pianoroll()
