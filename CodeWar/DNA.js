function DNAStrand(dna) {
       return dna.replace(/[TACG]/g, match => ({'T': 'A', 'A':'T','C': 'G', 'G':'C'})[match]);
       // /g --> The g flag indicates that the regular expression should be tested against all possible matches in a string.
       // can not use replaceAll because it is not function
       // match =
       /* function(match) {
            return {'T': 'A', 'A':'T','C': 'G', 'G':'C'}[match];
       } */
}
console.log(DNAStrand("GTAT"))
console.log(DNAStrand("ATTGC"))


