// Question 1
function remove_duplicates(lst){
    return accumulate((x, current) => !is_null(member(x, tail(lst)))
                                      ? pair(x, remove_duplicates(remove_all(x, tail(lst))))
                                      : pair(x, current)
                                        , null, lst);
}
function remov_duplicate_accumulate(lst) {
    return accumulate(
        (x, xs) =>
            is_null(member(x, xs))
            ? pair(x, xs)
            : xs,
        null,
        lst); 
}
remove_duplicates(list(1,2,3,4,4,3,2,1,2));

// Question 2
function subsets(xs){
    if (is_null(xs)){
        return list(null);
    }
    else{
        const setA = subsets(tail(xs)); 
        const setB = map(sub => pair(head(xs), sub), setA);
        return append(setA, setB);
    }
    
}
subsets(list(1, 2, 3));

// Question 3
function permutations(s) {
    return is_null(s)
        ? list(null)
        : accumulate(append, null,
            map(x => map(p => pair(x, p),permutations(remove(x, s))),
                s));
}


     
permutations(list(1, 2, 3));