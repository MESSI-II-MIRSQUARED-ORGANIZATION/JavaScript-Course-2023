console.log('Running....');

//Example 1:Playing with toys

function playWithFriend(callback){
    //you are waiting for your friend to call for you
    console.log("I am doing something fun...");

    //when your friend is ready, they then call you
    callback();
}

function friendIsReady(){
    console.log('I am ready to play with you');
}

// playWithFriend(friendIsReady)

//Example 2: Storytime


function bedtime(callback){
    // you're brushing your teeth, putting on your pyjamas 
    console.log('I am getting ready for bedtime story...');

    setTimeout(callback,5000)
}

function bedTimeStory(){
    console.log('Story time! once upon a time...');
}

bedtime(bedTimeStory)
