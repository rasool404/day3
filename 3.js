const numMatchingSubseq = function (S, words) {
  const map = words.reduce((acc, word, index) => {
    const c = word[0];
    acc[c] = acc[c] || [];
    acc[c].push([index, 0]);
    return acc;
  }, {});
  let num = 0;
  for (let i = 0; i < S.length; i++) {
    if (map[S[i]] !== undefined) {
      const list = map[S[i]];
      map[S[i]] = undefined;
      list.forEach(([wordIndex, charIndex]) => {
        if (charIndex === words[wordIndex].length - 1) {
          num += 1;
        } else {
          const nextChar = words[wordIndex][charIndex + 1];
          map[nextChar] = map[nextChar] || [];
          map[nextChar].push([wordIndex, charIndex + 1]);
        }
      });
    }
  }
  return num;
};
