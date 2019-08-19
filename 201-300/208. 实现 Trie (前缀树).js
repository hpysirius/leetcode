class Trie {
    insert(g) {
        [...g].reduce((p, w) =>  p[w] || (p[w] = {}), this).$ = true
    }
    search(g, o = this) {
        for (const w of g) if (!(o = o[w])) return false
        return !!o.$
    }
    startsWith(g, o = this) {
        for (const w of g) if (!(o = o[w])) return false
        return true
    }
}

const t = new Trie();
t.insert('apple');
console.log(t.search('app'));
console.log(t.startsWith('app'));
console.log(t);