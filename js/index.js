var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Headline = function (_React$Component) {
  _inherits(Headline, _React$Component);

  function Headline() {
    _classCallCheck(this, Headline);

    return _possibleConstructorReturn(this, (Headline.__proto__ || Object.getPrototypeOf(Headline)).apply(this, arguments));
  }

  _createClass(Headline, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'text-center', id: 'headline-box' },
        React.createElement(
          'h1',
          { className: 'display-3' },
          'Beowulf Quotes'
        )
      );
    }
  }]);

  return Headline;
}(React.Component);

var Button = function (_React$Component2) {
  _inherits(Button, _React$Component2);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'text-center', id: 'button-box' },
        React.createElement(
          'button',
          { type: 'button', className: 'btn btn-primary btn-lg' },
          'Push'
        )
      );
    }
  }]);

  return Button;
}(React.Component);

var Quote = function (_React$Component3) {
  _inherits(Quote, _React$Component3);

  function Quote() {
    _classCallCheck(this, Quote);

    return _possibleConstructorReturn(this, (Quote.__proto__ || Object.getPrototypeOf(Quote)).apply(this, arguments));
  }

  _createClass(Quote, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'jumbotron text-center', id: 'quote-box' },
          React.createElement(
            'blockquote',
            { className: 'blockquote' },
            React.createElement(
              'em',
              { id: 'quote' },
              'Press the button to receive a quote from the Old English epic poem, Beowulf!'
            )
          ),
          React.createElement(
            'footer',
            { className: 'blockquote-footer' },
            React.createElement(
              'a',
              { href: 'http://bit.ly/2FxbIN8', target: '_blank' },
              'Quotes From Cliff Notes Website'
            )
          )
        )
      );
    }
  }]);

  return Quote;
}(React.Component);

var App = function (_React$Component4) {
  _inherits(App, _React$Component4);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'jumbotron', id: 'app-box' },
        React.createElement(Headline, null),
        React.createElement(Button, null),
        React.createElement(Quote, null)
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

var q1 = "\"His father's warrior were wound round his heart/ With golden rings, bound to their prince/ By his father's treasure. So young men build/ The future, wisely open-handed in peace,/ Protected in war; so warriors earn/ Their fame, and wealth is shaped with a sword.\"";

var q2 = "\"Nor have I ever seen,/ Out of all the men on earth, one greater/ Than has come with you; no commoner carries/ Such weapons, unless his appearance, and his beauty,/ Are both lies.\"";

var q3 = "\"recalling/ The Almighty making of the earth, shaping/ These beautiful plains marked off by oceans,/ Then proudly setting the sun and moon/ To glow across the land and light it;/ . . . made quick with life, with each/ Of the nations who now move on its face.\"";

var q4 = "\"Till the monster stirred, that demon, that fiend/Grendel who haunted the moors, the wild/Marshes, and made his home in a hell./Not hell but hell on earth. He was spawned in that slime/Of Cain, murderous creatures banished/ By God, punished forever for the crime/ Of Abel's death.\"";

var q5 = "\"Twelve winters of grief for Hrothgar, king/ Of the Danes, sorrow heaped at his door/ By hell-forged hands, His misery leaped/ The seas, was told and sung in all/ Men's ears\"";

var q6 = "\"Grendel's hatred began,/ . . . the monster relished his savage war/ On the Danes, keeping the bloody feud/ Alive, seeking no peace, offering/ No truce, accepting no settlement, no price/ In gold or land, and paying the living/ For one crime only with another. No one/ Waited for reparation from his plundering claws:/ That shadow of death hunted in the darkness,/ Stalked Hrothgar's warriors.\"";

var q7 = "\"They arrived with their mail shirts/ Glittering, silver-shining links/ Clanking an iron song as they came./ Sea-weary still, they set their broad,/ Battle-hardened shields in rows/ Along the wall , then stretched themselves/ On Herot's benches. Their armor rang;/ Their ash-wood spears stood in a line,/ Gray-tipped and straight: the Geats' war-gear/ Were honored weapons.\"";

var q8 = "\"They have seen my strength for themselves,/ Have watched me rise from the darkness of war,/ Dripping with my enemies' blood. I drove/ Five great giants into chains, chased/ All of that race from the earth. I swam/ In the blackness of night, hunting monsters/ Out of the ocean, and killing them one/ By one; death was my errand and the fate/ They had earned. Now Grendel and I are called/ Together, and I've come.\"";

var q9 = "\"And if death does take me, send the hammered/ Mail of my armor to Higlac, return/ The inheritance I had from Hrethel, and he/ From Wayland. Fate will unwind as it must!\"";

var q10 = "\"Beowulf, you've come to us in friendship, and because/ Of the reception your father found at court./ Edgetho had begun a bitter feud,/ Killing Hathlaf, a Wulfing warrior: /Your father's countrymen were afraid of war,/ If he returned to his home, and they turned him away.\"";

var q11 = "\"How many times have my men, . . . / sworn to stay after dark/ And stem that horror with a sweep of their swords./ And then, in the morning, this mead-hall glittering/ With new light would be drenched with blood, the benches/ Stained red, the floors, all wet from that fiend's/ Savage assault-and my soldiers would be fewer/ Still death taking more and more.\"";

var q12 = "\"Hanging high/ From the rafters where Beowulf had hung it, was/ the monster's/ Arm, claw, and shoulder and all.\"";

var q13 = "\"Wear these bright jewels, belovèd Beowulf;/ Enjoy them, . . . oh fortunate young/ Warrior; grow richer, const your fame and your strength/ Go hand in hand; and lend these two boys/ Your wise and gentle heart! I'll remember your/ Kindness. Your glory is too great to forget/ . . . Spread your blessèd protection/ Across my son, and my king's son!\"";

var q14 = "\"She'd brooded on her loss, misery had brewed/ In her heart, that female horror, Grendel's/ Mother, living in the murky cold lake/ Assigned her since Cain had killed his only/ Brother, slain his father's son/ With an angry sword.\"";

var q15 = "\"like ice when the world's/ Eternal Lord loosens invisible/ Fetters and unwinds icicles and frost/ As only He can, He who rules/ Time and seasons, He who is truly/ God.\"";

var q16 = "\"She and that ripening soldier will be married/ . . . Hoping that his quarrel with the Hathobards can be settled/ By a woman. He's wrong: how man wars/ Have been put to rest in a prince's bed?/ Few. A bride can bring a little/ Peace, make spears silent for a time,/ But not long.\"";

var q17 = "\"counting off/ the hours till the Almighty's candle went out,/ And evening came, and wild with anger/ It could fly burning across the land, killing/ And destroying with its breath. Then the sun was gone,/ And its heart was glad; glowing with rage/ . . . impatient to repay/ Its enemies. The people suffered.\"";

var q18 = "\"My days/ have gone as fate willed, . . . / As I knew how, swearing no unholy oaths,/ Seeking no lying wars. I can leave/ This life happy; I can die, here,/ Knowing the Lord of all life has never/ Watched me wash my sword in blood/ Born of my own family.\"";

var q19 = "\"The old man's mouth was silent, spoke/ No more, had said as much as it could;/ He would sleep in the fire, soon. His soul/ Left his flesh, flew to glory.\"";

var quotes = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$(document).ready(function () {
  $("button").click(function () {
    $("#quote").text(quotes[randomNumber(0, quotes.length)]);
  });
});