//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
	// filter txt
	let cleanTxt = clean(txt);
	
	// 

    return {
        nChars: numChar(txt),
        nWords: cleanTxt.length,
        nLines: txt.split("\n").length,
        nNonEmptyLines: 22,
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

// function for counting input character length
function numChar(txt){
	return txt.length;
}

// function for cleaning/normalizing text 
function clean(txt){
	let lines = txt.split("\n");
	
	let nonEmptyCount=0;
	// loop through every line and clean while tracking non-empty lines
	for(let line of lines){
		if(line.trim().length != 0){
			nonEmptyCount=nonEmptyCount+1;
			
			// since it's not empty, clean up words using regular expressions
			
		}
	}
	
}

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


