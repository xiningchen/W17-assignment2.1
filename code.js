//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
	// filter txt
	let stats = clean(txt);
	
	// 

    return {
        nChars: stats.nChars,
        nWords: stats.nWords,
        nLines: stats.nLines,
        nNonEmptyLines: stats.nNonEmptyLines,
        averageWordLength: 0,
        maxLineLength: 0,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

/* function for counting input character length
function numChar(txt){
	return txt.length;
}
*/

// function for cleaning/normalizing text 
function clean(txt){
	let nChars = txt.length;
	
	let lines = txt.split("\n");
	let nLines = txt.split("\n").length;
	
	let nNonEmptyLines=0;
	let nWords=0;
	// loop through every line and clean while tracking non-empty lines
	for(let line of lines){
		if(line.trim().length != 0){
			nNonEmptyLines+=1;
			
			// since it's not empty, clean up words using regular expressions
			line = line.replace(/\W|\_/g, " ");
			let word = line.trim().split(" ");
			nWords = nWords + word.length;
		}
	}
	
	return {
		nChars, //*
		nWords, //*
		nLines, //*
		nNonEmptyLines //*
	};
}

/*
// counts number of non-empty lines
function nNonEmptyLines(txt){
	let lines = txt.split("\n");
	
	let count=0;
	for(let line of lines){
		if(line.trim().length != 0){
			count=count+1;
		}
	}
	
	return count;
}
*/

