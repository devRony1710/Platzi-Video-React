import React, { useEffect } from 'react';

import { connect } from 'react-redux';

//actions
import { getVideoSource } from '../actions';

//Components
import NotFound from './NotFound';

//styles
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
