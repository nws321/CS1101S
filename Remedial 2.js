// Question 1
function enum_list(a,b) {
    return a === b
    ? b
    : pair(a, enum_list(a + 1, b));
}

// Question 2
function appendix(a, b) {
    return is_null(a)
    ? b
    : pair(head(a), appendix(tail(a), b));
}

// Question 3
function range(a, b, d) {
    return a > b
    ? null
    : pair((a), range((a+d), b, d)); 
}

// Question 4
function reverse(ls) {
    function helper(original, reversed){
        return is_null(original)
        ? reversed
        : helper(tail(original), pair(head(original), reversed));
    }
    return helper(ls, null);
}

// Question 5
function merge(a, b) {
    const single = append(a, b);
    const numbers_bigger = map(y => filter(x => y < x, single), single);
    const len = map(x => length(x), numbers_bigger);
    filter(x => )
    return len;
}
merge(list(1,3,5), list(2,4,6));























