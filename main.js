const str = `
010-1234-5678
s2seolyeji@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=harry
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;

console.log(str.match(/(?<=@).{1,}/g));
