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
        averageWordLength: stats.avgWordLength,
        maxLineLength: stats.maxLineLength,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: stats.longestWords,
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
	let maxLineLength=0;
	
	let nNonEmptyLines=0;
	let nWords=0;
	let nCharWords=0;
	let longestWordLength=0;
	let longestWords=[];
	let avgWordLength=0;
	
	if(txt.length===0){
		// skip all process and set stuff to 0
		nLines=0;
	}else{
		// loop through every line and clean while tracking non-empty lines
		for(let line of lines){
			if(line.trim().length != 0){
				nNonEmptyLines+=1;
			
				// check line length
				if(line.length>maxLineLength){
					maxLineLength=line.length;
				}
				// since it's not empty, clean up words using regular expressions
				line = line.toLowerCase();
				line = line.replace(/\W|\_/g, " ");
				line = line.replace(/\s+/g, " ");
			
				let words = line.trim().split(" ");
				nWords += words.length;
			
	/*
		Q1: Why is his longest words contain different lengths? is it longest word in each line???
		Q2: 
	
	*/
				// sort words
				let wSorted = words.sort(lengthComparison);
			
				// process each word
				for(let w of wSorted){
					nCharWords += w.length;
					if(w.length > longestWordLength){
						// set new longest word length
						longestWordLength = w.length;
						// reset current record of longest words
						longestWords=[];
					}
					if(w.length === longestWordLength){
						// add to longest words array
						longestWords.push(w);
					}
				}
			}
		}
	
		avgWordLength = nCharWords/nWords;
	}
	
	return {
		nChars, //*
		nWords, //*
		nLines, //*
		nNonEmptyLines, //*
		avgWordLength, //* 
		maxLineLength, //*
		longestWords
	};
}

// comparison function for sorting of longest length 
// - provided from TA during tutorial but adapted so that sorting will sort longest to the front
lengthComparison = function(w1, w2){
	if(w1.length > w2.length){
		return -1
	}else if (w2.length > w1.length){
		return 1
	}else{
		return 0
	}
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

