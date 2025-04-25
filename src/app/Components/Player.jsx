import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { AudioPlayerWrapper } from './style';

export default function Player({ src }) {
  return (
    <AudioPlayerWrapper>
      <AudioPlayer
        autoPlay
        src={src}
        onPlay={(e) => console.log('onPlay')}
        // other props here
      />
    </AudioPlayerWrapper>
  );
}
