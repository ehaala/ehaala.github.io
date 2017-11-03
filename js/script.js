$('#test').typeIt({
     // strings: ["Hi, I'm Evan the web developer.", "I currently reside in Seattle.", "I like to code, play video games, and anything sports-related."],
     speed: 40,
     breakLines: true,
     autoStart: true
})
.tiType("Hi, I'm Evan. I develop webs....?")
.tiPause(1500)
.tiDelete(21)
.tiPause(500)
.tiType(' the web developer.')
.tiBreak()
.tiPause(1000)
.tiType("I currently reside in Seattle.")
.tiBreak() .tiPause(750)
.tiType("I like to code, play video games, and anything sports-related.")
.tiBreak() .tiPause(500)
.tiType("Check out some of my projec")
.tiPause(900)
.tiDelete(6)
.tiType("DOPE projects below!")
