// var React = require('react'),
//     ClassNames = require('classnames');

// var AnimatedPhrases = React.createClass({
//     getInitialProps: function () {
//         return {
//             animateType: 'type'
//         }
//     },
    
//     getInitialState: function () {
//         return {
//             animationDelay: 300,
//             visible: 0,
//             currentLetter: 0,
//             currentPhrase: 0,
//             phraseCount: this.props.phrases.length
//         }
//     },
    
//     componentDidMount: function(){
//         this.startTimer();
//     },

//     componentWillUnmount: function(){
//         this.clearTickInterval();
//     },
    
//     clearTickInterval: function() {
//         clearInterval(this.timer);
//     },
    
//     startTimer: function() {
//          this.timer = setInterval(this.tick, this.state.animationDelay);
//     },
    
//     isPenultimateLetter: function () {
//         var phrases = this.props.phrases;
//         var currentPhraseLength = phrases[this.state.currentPhrase].name.length;
          
//         return (this.state.currentLetter === currentPhraseLength-2);
//     },
    
//     isLastLetter: function () {
//         var phrases = this.props.phrases;
//         var currentPhraseLength = phrases[this.state.currentPhrase].name.length;
        
//         return (this.state.currentLetter === currentPhraseLength-1);
//     },
    
//     isLastPhrase: function () {
//         var phrases = this.props.phrases;
//         var currentPhraseLength = phrases[this.state.currentPhrase].name.length;
        
//         return (this.state.currentPhrase === this.state.phraseCount-1 
//             && this.state.currentLetter === currentPhraseLength-1);
//     },

//     tick: function(){
//         var phrases = this.props.phrases;
//         var currentPhraseLength = phrases[this.state.currentPhrase].name.length;
        
//         // if we are on the last letter of the current phrase, we need
//         // to increment the current phrase at the next pass [0]
//         // unless it's the last phrase
//         // in which case we reset the current phrase and letter [1]
//         // if we are in the middle of a word, continue to increment 
//         // only the current letter [2]
//         if (this.isLastPhrase()) {            
//             this.setState({
//                 currentPhrase: 0, // [1]
//                 currentLetter: 0, // [1]
//                 animationDelay: 50
//             });
//         }
//         if (this.isLastLetter()) {
//             this.setState({
//                 currentLetter: 0, // [0]
//                 currentPhrase: this.state.currentPhrase+1, // [0]
//                 animationDelay: 50
//             });
//         } else {
//             if (this.isPenultimateLetter()) {
//                 this.setState({
//                     currentLetter: this.state.currentLetter+1, // [2]
//                     animationDelay: 1000
//                 });
//             } else {
//                 this.setState({
//                     currentLetter: this.state.currentLetter+1, // [2]
//                     animationDelay: 50
//                 });
//             }
//         }
//         this.clearTickInterval();
//         this.startTimer();
//     },
    
//     buildPhrase: function (phrase, index) {
//         var isVisible = this.state.currentPhrase == index ? true : false;
        
//         var classes = ClassNames({
//             'is-visible': isVisible,
//             'is-hidden': !isVisible
//         });

//         var text = '';
        
//         if ( phrase.hasOwnProperty('name') ) {
                   
//             text = phrase.name;
            
//             if (isVisible) {
//                 // cycle through letters and create an <i> per letter
//                 // with class depending on matching the current letter
//                 var splitPhrase = this.singleLetters(text);
//                 if (phrase.hasOwnProperty('url') && phrase.hasOwnProperty('id')) {
//                     return <a className={ classes } key={index} href={phrase.url}>{ splitPhrase }</a>
//                 } else {
//                     return <b className={ classes } key={index}>{ splitPhrase }</b>
//                 }
//             }
//         }
//     },
    
//     singleLetters: function (phrase) {
        
//         var currentLetter = this.state.currentLetter;
//         var letters = phrase.split("");
//         var letterCount = phrase.length;
		
//         var newLetters = letters.map(function (letter, index) {
//             return <i className={ currentLetter >= index ? 'in' : 'out' } key={index}>{letter}</i>
//         });
        
//         return newLetters;
//     },
    
//     render: function() {
//         var buildPhrase =  this.buildPhrase;
//         var phrases = [];
        
//         phrases = this.props.phrases.map(function (phrase, index) {
//             return buildPhrase(phrase, index);
//         });
                
//         return (
//             <h1 className="animated-phrase letters type">
//                 <span>{this.props.headline}</span>
//                 <span className="word-wrapper waiting">
//                     { phrases }
//                 </span>
//             </h1>
//         )
//     }
// });

// module.exports = AnimatedPhrases;