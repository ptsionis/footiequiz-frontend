# FootieQuiz - Front-end

FootieQuiz, a real-time PvP web app, is an online quiz with football questions, in **Greek language**. A user can create a room, get a room password, and share it with a friend, who can then join the room using the specific password. This allows users to compete against each other and find out who knows more about the #1 sport in the world!

Visit FootieQuiz [here](https://www.footiequiz.eu/).

The back-end for FootieQuiz can be found in this [repository](https://github.com/ptsionis/footiequiz-backend).

## Instructions

Below there are mentioned the basic use cases for FootieQuiz. Specifically, we will see how to create a room, join a room and start playing.

### Step 1: [FootieQuiz initial screen]

When we visit FootieQuiz url, we will see the initial screen. We have to press the Start button (ΕΝΑΡΞΗ).

### Step 2.1: [Create a room]

User can create a room, after passing the reCAPTCHA test, by clicking on the Create Room button (ΔΗΜΙΟΥΡΓΙΑ ΔΩΜΑΤΙΟΥ). Usually, we have to wait around 30 seconds in order to get a room password. After getting a room id, we can share it to someone else, so they can use it to join our room and start playing.

### Step 2.2: [Join a room]
If someone else created a room and shared the room password with us, we can join them, after passing the reCAPTCHA test, by clicking on the Join Room button (ΕΙΣΟΔΟΣ ΣΕ ΔΩΜΑΤΙΟ). We have to paste the room password and then press Enter (ΕΙΣΟΔΟΣ) and start playing.

### Step 3: [Play the game]
If everything worked properly, the game should start, and both players should see the game main screen. FootieQuiz chooses randomly which player will start first. Depending on whether it is our turn or not, we will see a message above all questions, which will say PLAYING (ΠΑΙΖΕΤΕ) or PLEASE WAIT (ΠΑΡΑΚΑΛΩ ΠΕΡΙΜΕΝΕΤΕ). Also, the user who has to wait, will have all of its buttons disabled, in contrast with the user that is currently playing, who will have all of the buttons enabled, except for the questions that have already been played.

## License

This project is licensed under the [MIT License](LICENSE).
