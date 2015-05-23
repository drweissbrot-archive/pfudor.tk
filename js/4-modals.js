// PFUDOR.tk JavaScript Library -- Modals

function show_modal(innerhtml) {
    vid_pause();
    $('#credits').css({'display':'none'});
    $('#ref').css({'display':'none'});
    $('#overlay').after(innerhtml);
}

function modal_credits() {
    show_modal('<div id="modal"><h1>PFUDOR.tk &minus; Credits <small onclick="vid_play()">Close</small></h1><div style="float: left; width: 50%;"><p>PFUDOR.tk was created by:<ul><li><strong>Dr. Weißbrot</strong> &minus; Developer and stuff<br /><a href="//github.com/drweissbrot">GitHub</a> / <a href="//drweissbrot.net">Web Site</a> / <a href="mailto:drweissbrot@outlook.com">Email</a> / <a href="skype:bigbuhmann?chat">Skype</a></li><li><strong>biberbuilder</strong> &minus; That other guy<br /><a href="skype:biberbuildergmbh?chat">Skype</a></li></ul></p></div><div style="float: right; width: 50%;"><p>Special Thanks to:<ul><li><a href="https://youtube.com/songstowearpantsto">Andrew Huang</a> &minus; The PFUDOR song</li><li><a href="https://youtube.com/fluffymixer">FluffyMixer</a> &minus; The animated video</li><li><a href="http://vaachar.de/">Vaalyn, Charrez</a> &amp; <a href="http://bronyradiogermany.com">Brony Radio Germany\'s community</a> &minus; Their awesome support</li></ul></p></div></div>');
}

function modal_abuse() {
    show_modal('<div id="modal"><h1>PFUDOR.tk &minus; Report abuse <small onclick="vid_play()">Close</small></h1><div><p>The biggest part of PFUDOR.tk wasn\'t made by its creators. We\'re using videos from <a href="https://youtube.com/songstowearpantsto">Andrew Huang</a>, <a href="https://youtube.com/fluffymixer">FluffyMixer</a>, and - hypthetically - everyone who uploads videos to YouTube.</p><p>If you are a content creator, you can message us, so we can block your video from being shown on PFUDOR.tk. Please note that we cannot take videos down from other people\'s copies of PFUDOR.tk\'s source code, nor will respond or even care about requests to take down videos from anyone but the original artist.</p><p>You can contact us via <a href="skype:bigbuhmann?chat">Skype (bigbuhmann)</a> or <a href="mailto:drweissbrot@outlook.com">Email (drweissbrot@outlook.com)</a>.</div></div>');
}

function modal_generator() {
    show_modal('<div id="modal"><h1>PFUDOR.tk &minus; Generator <small onclick="vid_play()">Close</small></h1><div><p>There are some parameters you can use to modify your PFUDOR.tk experience. The generator below creates a link you can use to set these parameters.</p><form action="generator.php" target="_blank" method="get"><div>Video:<br/ ><input type="radio" name="vidtype" id="anim" value="anim" checked="checked" /> PFUDOR Animation<input type="radio" name="vidtype" id="huang" value="huang" /> PFUDOR Huang<input type="radio" name="vidtype" id="gen-ytplay" value="ytplay" /> YouTube video</div><div id="vididgroup">Video ID:<br /><input type="text" name="vidid" id="vidid" placeholder="Insert YouTube video ID here" /></div><div>Quality can not be modified anymore - thanks to YouTube\'s API!</div><div><input type="text" name="volume" id="volume" placeholder="Volume (default: 100)" /> <input type="text" name="startat" id="startat" placeholder=\'"Start at" second (default: 0)\' /> <input type="text" name="stopat" id="stopat" placeholder=\'"Stop at" second (default: last second)\' /></div><div><input type="text" name="sepia" id="sepia" placeholder=\'Sepia (between 0 and 100, default: 0)\' /> <input type="text" name="gray" id="gray" placeholder=\'Grayscale (between 0 and 100, default: 0)\' /> <input type="text" name="blur" id="blur" placeholder=\'Blur (0 or more pixels, default: 0)\' /></div><div><input type="checkbox" name="controls" /> Show controls</div><div><button type="submit" name="generate">Generate</button></div></form></div></div>');
}
