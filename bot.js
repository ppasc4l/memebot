var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\boi$/, botReg = /^\BOI$/,
	  botR = /^\Boi$/, botReturn = /^\tendies$/;
	  
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage();
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }

  if(request.text && botReg.test(request.text)) {
	this.res.writeHead(200);
	postMessage();
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
  if(request.text && botR.test(request.text)) {
	this.res.writeHead(200);
	postMessage();
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
  
  if(request.text && botReturn.test(request.text)) {
	this.res.writeHead(200);
	postMessage();
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage() {
  var botResponse, options, body, botReq;

	var maximum = 31;
	var minimum = 1;

	var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  
  switch(randomnumber){

	case 1:
		botResponse = "Who turned out the lights?";
		break;
	case 2:
		botResponse = "Give me some tendies Mummy. REEEEEEEEEE";
		break;
	case 3:
		botResponse = "All you need is love, something I don't have.";
		break;
	case 4:
		botResponse = "All I see is pain";
		break;
	case 5:
		botResponse = "I'm buying clothes at the Existential Crisis Store";
		break;
	case 6:
		botResponse = "Maybe tonight, I will finally get the big sleep";
		break;
	case 7:
		botResponse = "I keep having to buy new scrubs because I keep forgetting to bring them home";
		break;
	case 8:
		botResponse = "Let me lather you up in my Donkey Sauce and take you to Flavortown";
		break;
	case 9:
		botResponse = "I can't feel anymore.";
		break;
	case 10:
		botResponse = "I fell into the void many years ago. Join me.";
		break;
	case 11:
		botResponse = "I wake up every morning wishing I hadn't.";
		break;
	case 12: 
		botResponse = "I drink champagne through a tube";
		break;
	case 13:
		botResponse = "I slurp up memes with a spoon";
		break;
	case 14:
		botResponse = "https://www.youtube.com/watch?v=6DeBfvPiFN0";
		break;
	case 15:
		botResponse = "My favorite sport is Water Soccer.";
		break;
	case 16:
		botResponse = "Booting in insecure mode.";
		break;
	case 17:
		botResponse = "I wish I had a different brother.";
		break;
	case 18:
		botResponse = "I googled 'single player board games' and it directed me straight to the Prozac website.";
		break;
	case 19:
		botResponse = "Things were finally going good for me, but then I woke up.";
		break;
	case 20:
		botResponse = "Show those haters how its done by hating yourself most.";
		break;
	case 21:
		botResponse = "https://www.youtube.com/watch?v=1Bix44C1EzY";
		break;
	case 22:
		botResponse = "Cory in the House has no purpose, but it also has ALL of the purpose.";
		break;
	case 23:
		botResponse = "Jacob Herbst profitted off the Great Meme War of October 2016";
		break;
	case 24:
		botResponse = "Cameron Viehmann is my dad.";
		break;
	case 25:
		botResponse = "'My entire life is like that feeling you get in your teeth when you floss for the first time in like, a week after forgetting' -@DadViehmann";
		break;
	case 26:
		botResponse = "Wow :^)";
		break;
	case 27:
		botResponse = "https://youtu.be/ba7DEM7Trn8";
		break;
	case 28:
		botResponse = "Choo Choo, All Aboard the Depression Train! Next stop, the bottom of a canyon!";
		break;
	case 29:
		botResponse = "I love each and every member of this group except for myself";
		break;
	case 30:
		botResponse = "Flintstones, Meet the Flintstones";
		break;
	case 31:
		botResponse = "https://www.youtube.com/watch?v=7ERzPFCE7B0";
		break;
  }

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}



exports.respond = respond;