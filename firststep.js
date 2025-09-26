samples('github:emrexdeger/strudelSamples')
setcpm(141/4)
beat: stack(
      s("<opal>").n(irand(3)).loopAt(1).gain(1.2),
      s("k:1(3,8)?0.25").gain(0.8),
      s("<[- s:1]!3 [- s:1*2?]>").gain(0.5),
      s("<ch*16? ch*8?>").gain(0.25))._scope()
bass: (note("<[c2 f2]!3 [c2 f2*2]>").s("square").n(4).clip(0.5))
pad: n("0 2 4 <[6,8] [7,9]>").scale("C:minor").sound("gm_fx_echoes")
       .n(7).rel(2).gain(0.2).room(0.75)
synth: n("4? <11? 12?> 3? 5?, <[5,7] [8,10]>").scale("C:minor").sound("tri").n(6)
       .clip(0.5).hpf(250).delay("0.9:0.625:0.5").room(0.7).color("cyan")._punchcard()
