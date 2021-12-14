var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;

router.post('/story', function (req, res) {
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  });
})


function getStory(formData) {
  if (formData.storyChoice === "1") {
    return generateStory1(formData);
  }else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  }else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  }else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `As ${formData.noun1} was right around the corner, the ${formData.adjective1} pumpkins started to ${formData.verb1}. Many ${formData.noun2} started to ${formData.verb2} from the ${formData.adjective2} house. On snowy and ${formData.adjective3} nights, the ${formData.noun3} started to ${formData.verb3}.`
}

function generateStory2(formData){
  return `Twas a cold and wintery ${formData.noun1}. The ${formData.adjective1} snow started to ${formData.verb1}. On some nights, the ${formData.noun2} would come out and ${formData.verb2} to the ${formData.adjective2} towns. Even as the people tried to stop them, the ${formData.noun3} were too strong and ${formData.adjective3} that the people were hopeless and could not ${formData.verb3} them.`
}

function generateStory3(formData){
  return `Once upon a time on a rainy and cold ${formData.noun1}, the ${formData.adjective1} people started to ${formData.verb1} and would soon get to the town. As the ${formData.noun2} watched over the town, they could see a ${formData.adjective2} cloud approaching. The ${formData.noun2} had to ${formData.verb2} to try and save the town. By the time the ${formData.noun2} reached the town, the ${formData.adjective1} people started to ${formData.verb3} in the town. The ${formData.noun3} had to be called to save the day from the ${formData.adjective3} people. `
}