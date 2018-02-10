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
//	let longestWordLength=0;
//	let longestWords=[];
	let avgWordLength=0;
	let freqWords={};
	
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
				
				// process each word
				for(let w of words){
					nCharWords += w.length;
					
					if(w in freqWords){
						freqWords[w] += 1;	
					}else{
						freqWords[w] = 1;
					}
				
				}
			}
		}
	
		avgWordLength = nCharWords/nWords;
		let a = [];
		for(let key of freqWords){
			let b =[key, freqWords[key]];
			a.push(b);
		}
		a.sort(decendingOrder); // sort by frequency
		
		let mostFrequentWords = [];
		for(let i=0; i<10; i++){
			mostFrequentWords[i] = a[i]+"("+i+")";
		}
		
		// process words
		
		let nTxt = txt.toLowerCase();
		nTxt = nTxt.replace(/\W|\_/g, " ");
		nTxt = nTxt.replace(/\s+/g, " ");
		let words = line.trim().split(" ");
		
		
		
		
/*
			1) Palindromes
			2) most frequent words
			3) longest words
*/
		
		
		/*
			// sort words
			// let wSorted = words.sort(lengthComparison);
		
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
				*/
		
	}
	
	return {
		nChars, //*
		nWords, //*
		nLines, //*
		nNonEmptyLines, //*
		avgWordLength, //* 
		maxLineLength, //*
		//longestWords
		mostFrequentWords
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

decendingOrder = function(w1, w2){
	if(w1 > w2){
		return -1
	}else if (w2 > w1){
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

