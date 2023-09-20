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
function reverse(ls){
    return is_null(ls)
    ? null
    : append(reverse(tail(ls)), list(head(ls)));
}

// Question 5
function merge(a, b){
    return is_null(a)
    ? b
    : is_null(b)
    ? a
    : head(a) <= head(b)
    ? pair(head(a), merge(tail(a), b))
    : head(a) >= head(b)
    ? pair(head(b), merge(a, tail(b)))
    : null;
}

// Question 6
function zip(xs, ys){
    return is_null(xs)
    ? null
    : pair(pair(head(xs), head(ys)), zip(tail(xs), tail(ys)));
}

// Question 7
function insert(x, xs){
    return is_null(xs)
    ? null
    : x <= head(xs)
    ? pair(x, xs)
    : x > head(xs)
    ? pair(head(xs), insert(x, tail(xs)))
    : null;
}

// Question 8
function sort(xs){
    return is_null(xs)
    ? xs    
    : insert(head(xs), sort(tail(xs)));
    
}
sort(list(4,2,3,1));




















