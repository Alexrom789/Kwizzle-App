import React, { Component } from 'react';
import FlashCard from '../components/FlashCard';
import ProgressBars from '../components/ProgressBars';
import DeckHeader from '../components/DeckHeader';
import DiffucultyBtns from '../components/DifficultyBtns';
import { decks } from '../decks';

class Kwiz extends Component {
  constructor() {
    super();
    let {deckName, cards} = decks[0];
    this.state = {
      deckName,
      cards,
      numCards: cards.length,
      numNew: cards.length,
      numReviewed: 0,
      numMastered: 0,
      currentIdx: 0,
      isBack:false
     }};

   flipFlashCardHandler = () => {
    let isFlipped = this.state.isBack === true ? false : true;
    this.setState( { isBack : isFlipped } )
   }

  updateProgressBars = () => {
    let numberNew = 0;
    let numberReviewed = 0;
    let numberMastered = 0;

    this.state.cards.forEach( (card) => {
      if (card.cardState === 'new') {
         numberNew++;
      } else if (card.cardState === 'reviewing') {
         numberReviewed++
      } else {
         numberMastered++
      }
    })
    
    this.setState({
      numNew: numberNew,
      numReviewed: numberReviewed,
      numMastered: numberMastered
    })

  }

  nextCardHandler = (difficulty) => {
    const {currentIdx, numCards, cards} = this.state;
    let newIdx = currentIdx !== numCards - 1 ? currentIdx + 1 : 0;

    if (difficulty === "easy") {
      this.setState( { 
        cards: cards.map((card) => {
          if (card.id === currentIdx) {
             card.cardState = "easy";
          }
          return card;
        })
      });
    } else if (difficulty === "so-so") {
        this.setState( { 
          cards: cards.map((card) => {
            if (card.id === currentIdx) {
                card.cardState = "reviewing";
            }
            return card;
          })
        });
      } else {
        this.setState( { 
          cards: cards.map((card) => {
            if (card.id === currentIdx) {
                card.cardState = "new";
            }
            return card;
          })
        });
      }

    this.setState( { 
      currentIdx : newIdx,
      isBack: false
    });

    this.updateProgressBars();
  }

  render() {
    const {deckName, currentIdx, numCards, cards, isBack, numMastered, numNew, numReviewed} = this.state;
    return (
      <div>
        <DeckHeader deckName={deckName} currCard={currentIdx + 1} numCards={numCards}/>
        <FlashCard handler={this.flipFlashCardHandler} frontTxt={cards[currentIdx].frontTxt} isBack={isBack} backTxt={cards[currentIdx].backTxt}/>
        <DiffucultyBtns id={this.id} handler={this.nextCardHandler} isBack={isBack}/>
        <ProgressBars numCards={numCards} numNew={numNew} numRev={numReviewed} numMas={numMastered}/>
      </div>
    );
  }
}

  
  export default Kwiz;