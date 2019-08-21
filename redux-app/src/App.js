import React from 'react';
import './App.css';
import HpHouses from './components/HpHouses';
import { connect } from 'react-redux'
import {getHpData, addPoints, subtractPoints, houseCupWinner} from './actions/hpActions';
import { Card, Image } from 'semantic-ui-react';
function App(props) {
  return (
    
    <div className="App">
      <Card style={{margin: 'auto', marginTop: '20px', opacity: '.75'}}>
      <Image src='https://smallimg.pngkey.com/png/small/106-1068350_png-by-srg-wands-hogwarts-house-crests-pottermore.png' />
    </Card>
        <button onClick={props.getHpData}>{props.isLoading ? 'Loading' : 'Get Houses'}</button>
        <h1 style={{color: 'white'}}>{props.houseCup.length > 0 && `${props.houseCup} wins the House Cup!!!!`}</h1>
      <HpHouses houses={props.hpHouses} addPoints={props.addPoints} subtractPoints={props.subtractPoints}/>
      <div>
        <button onClick={props.houseCupWinner}>
        Determine the House Cup Winner
        </button>
       
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state,
    hpHouses: state.hpHouses,
    houseCup: state.houseCup,
  }
}

export default connect(
  mapStateToProps, {getHpData, addPoints, subtractPoints, houseCupWinner}
)(App)