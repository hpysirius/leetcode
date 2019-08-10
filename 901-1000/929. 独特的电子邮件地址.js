const numUniqueEmails = emails => {
    const h = new Set();
    for (let val of emails) {
        let at = val.indexOf('@');
        let name = '';
        for (let n of val.substr(0, at)) {
            if (n === '+') break;
            if (n !== '.') name += n;
        }
        let domain = val.substr(at + 1);
        h.add(name + '@' + domain);
    }
    return h.size;
};