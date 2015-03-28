// First we need to be able to parse individual notes. Write a function `parseNote` that takes a string representing a single note (e.g. "C#*2") and returns a note object (e.g. {pitch: "C#", beats: 2}). If the user doesn't provide a number of beats (e.g. "C#") then set beats to 1.

var parseNote = function(usr_note_str) {
	
	console.log("parseNote object is accessed");

	// split the note string into an array of words
	var note_array = usr_note_str.split("*");

	// define note object
	var note_obj = {
		pitch : '',
		beats : 1
	}

	note_obj.pitch = note_array[0];
	console.log("The parsed_song is: ")
	console.log(note_obj)

	if (note_array[1] === undefined) {
		// if beats is empty, do nothing, default beats = 1
	}
	else {
		// if beats is equal to something, assign to note object
		note_obj.beats = parseFloat(note_array[1]);
	}

	// return note object
	return note_obj;
}

// Now let's parse a whole song string. Write a function `parseSong` that takes a song string as above, and returns an array of note objects. The `parseSong` function should use the `parseNote` function.

var parseSong = function(song_str) {

	// save to log that this method has been accessed
	console.log("parseSong object is accessed");

	// convert song_str to array
	var song_array = song_str.split(' ');
	console.log("Song Array: " + song_array)
	
	// create blank song_array
	var song_array_note_obj = [];

	// parse each note in song_array
	for (i = 0; i < song_array.length; i = i + 1) {
		song_array_note_obj.push(parseNote(song_array[i]));
	}

	// return an array of note objects
	console.log("Returned parsed song: " + song_array_note_obj[1])
	
	return song_array_note_obj;
}

var promptSongInput = function() {
	var song_str = prompt("Hello! Please provide a song you would like to play in the following format: A*2 B C#*3 D");
	console.log("User song input: " + song_str)
	return song_str;
}

var promptBPMInput = function() {
	var bpm_str = prompt("What speed (bpm) would you like the song played at?");
	console.log("User input: " + bpm_str);
	return bpm_str;
}

var parseBPMInput = function(bpm_str) {
		var bpm_float = parseFloat(bpm_str);
		return bpm_float;
}

var onComplete = function() {
  console.log('Song finished playing');
}

var playJukebox = function() {
	// prompt for input
	while (true){
		var song_input = promptSongInput();
		var bpm_input = promptBPMInput();
		
		// parse the input
		var parsed_song = parseSong(song_input);
		console.log("The parsed_song is:" + parsed_song[1]);

		var parsed_bpm = parseBPMInput(bpm_input);
		console.log("The parsed_bpm is:" + parsed_bpm[1]);

		// play the song with the parsed input
		playSong(parsed_song, parsed_bpm, onComplete);	
	}
}
