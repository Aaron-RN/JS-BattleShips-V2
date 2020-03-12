// Sounds
import sndGuiOpen from './sfx/gui_open.wav';
import sndFire from './sfx/fx_fire.ogg';
import sndFire2 from './sfx/fx_fire2.ogg';
import sndFire3 from './sfx/fx_fire3.ogg';
import sndHit from './sfx/fx_shipHit.wav';
import sndMiss from './sfx/fx_splash.wav';
import sndWon from './sfx/fx_won.ogg';
import sndMusicFail from './sfx/music_fail_trombone.ogg';
import sndMusicFail2 from './sfx/music_fail_trombone2.ogg';


function playSound(snd) {
  if (snd === 'fire') {
    const sounds = [sndFire, sndFire2, sndFire3];
    const rand = Math.floor(Math.random() * 2);
    const snd = new Audio(sounds[rand]);
    snd.volume = 0.2;
    snd.play();
  }
  if (snd === 'miss') { const snd = new Audio(sndMiss); snd.volume = 0.5; snd.play(); }
  if (snd === 'hit') { const snd = new Audio(sndHit); snd.volume = 0.5; snd.play(); }

  if (snd === 'lost') {
    const sounds = [sndMusicFail, sndMusicFail2];
    const rand = Math.floor(Math.random() * 1);
    const snd = new Audio(sounds[rand]);
    snd.volume = 0.5;
    snd.play();
  }
  if (snd === 'won') { const snd = new Audio(sndWon); snd.volume = 0.5; snd.play(); }
  if (snd === 'menu') { const snd = new Audio(sndGuiOpen); snd.volume = 0.5; snd.play(); }
}

export default playSound;