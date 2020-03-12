// Sounds
import snd_gui_open from './sfx/gui_open.wav';
import snd_fire from './sfx/fx_fire.ogg';
import snd_fire2 from './sfx/fx_fire2.ogg';
import snd_fire3 from './sfx/fx_fire3.ogg';
import snd_hit from './sfx/fx_shipHit.wav';
import snd_miss from './sfx/fx_splash.wav';
import snd_reload from './sfx/fx_cannonReload.wav';

import snd_won from './sfx/fx_won.ogg';
import snd_music_fail from './sfx/music_fail_trombone.ogg';
import snd_music_fail2 from './sfx/music_fail_trombone2.ogg';


function playSound(snd) {
  if (snd === 'fire') {
    const sounds = [snd_fire, snd_fire2, snd_fire3];
    const rand = Math.floor(Math.random() * 2);
    const snd = new Audio(sounds[rand]);
    snd.volume = 0.2;
    snd.play();
  }
  if (snd === 'miss') { const snd = new Audio(snd_miss); snd.volume = 0.5; snd.play();}
  if (snd === 'hit') { const snd = new Audio(snd_hit); snd.volume = 0.5; snd.play();}
  
  if (snd === 'lost') {
    const sounds = [snd_music_fail, snd_music_fail2];
    const rand = Math.floor(Math.random() * 1);
    const snd = new Audio(sounds[rand]);
    snd.volume = 0.5;
    snd.play();
  }
  if (snd === 'won') { const snd = new Audio(snd_won); snd.volume = 0.5; snd.play();}
  if (snd === 'menu') { const snd = new Audio(snd_gui_open); snd.volume = 0.5; snd.play();}
}

export default playSound;