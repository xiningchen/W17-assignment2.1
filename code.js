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
        palindromes: stats.palindromes,
        longestWords: stats.longestWords,
        mostFrequentWords: stats.mostFrequentWords
    };
}


function clean(txt){
	let nChars = txt.length;
	
	let lines = txt.split("\n");
	let nLines = txt.split("\n").length;
	let maxLineLength=0;
	
	let nNonEmptyLines=0;
	let nWords=0;
	let nCharWords=0;
//	let longestWordLength=0;
	let longestWords=[];
	let avgWordLength=0;
	let freqWords={};
	let mostFrequentWords = [];
	let palindromes=[];
	
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
					
					// check if the word is a palindroen( reverse word, check if it's equal)
					if(w.length>1){
						let wInv = "";
						for(let i=w.length-1; i>-1; i--){
							wInv += w[i];
						}
						if(wInv === w){
							// then it's a palindrone
							palindromes.push(w);
						}	
					} // single characters can't be palindrones
				
				}
			}
		}
	
		avgWordLength = nCharWords/nWords;
		
		// take frequency object and make it an array
		let freqWordsArray = [];
		for(let key in freqWords){
			freqWordsArray.push([freqWords[key], key]);
		}
		freqWordsArray.sort(decendingOrder); // sort by frequency
	
		// get the top 10 most frequent words
		let count=0;
		let currentFreq = 0;
		let temp=[];
		// divide into subarrays based on frequency 
		for(let a of freqWordsArray){
			if(a[0] != currentFreq){
				//update freq
				currentFreq = a[0];

				if(temp.length===0){
					//skip
				}else{
					// sort temp
					temp.sort();
					// add temp into most frequent words
					for (let t of temp){
						mostFrequentWords.push(t[0] + "("+t[1]+")");	

						count +=1;
						if(count===10){
							break;
						}
					}
				}

				// clear temp
				temp = [];
			}

			
			temp.push([a[1], a[0]]);
		}


		if(mostFrequentWords.length <10){
			// the remaining words are in temp, add it to most frequent word
			temp.sort();
			let n = 10-mostFrequentWords.length
			for(let i=0; i<n; i++){
				let t = temp[i];
				mostFrequentWords.push(t[0] + "("+t[1]+")");	
			}
		}
		

		// process all words to get longest words
		let nTxt = txt.toLowerCase();
		nTxt = nTxt.replace(/\W|\_/g, " ");
		nTxt = nTxt.replace(/\s+/g, " ");
		let allWords = nTxt.trim().split(" ");
		
		allWords.sort(lengthComparison);
		count=0;
		for(let w of allWords){
			if(longestWords.indexOf(w) != -1){
				// skip!
			}else{
				longestWords.push(w);
				count +=1;
				if(count===10){
					break;
				}	
			}
		}
		
/*
			1) Palindromes
			2) most frequent words
			3) longest words
*/
		
	}
	
	return {
		nChars, //*
		nWords, //*
		nLines, //*
		nNonEmptyLines, //*
		avgWordLength, //* 
		maxLineLength, //*
		longestWords,
		mostFrequentWords, 
		palindromes
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
		if (w1 > w2){
			return 1
		}else if (w2 > w1){
			return -1
		}else{
			return 0	
		}
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


specialSort = function(w1, w2){
	if()
}
