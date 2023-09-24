// // Question 1A
// cond_a ? do_y() : do_x()

// // Question 1B
// cond_a ? do_x() : cond_b ? do_x() : do_y()

// // Question 1C
// cond_a ? cond_b : do_x() ? do_y() : do_y()

// // Question 2A
// function myfunc(a) {
//     return (b, c) => a * b + c;
// }

// // Question 2B
// my_func(3)(2, 1);

// // Question 3A
// 6;

// // Question 3B
// 8;

// // Question 3C
// 26;

// // Question 3D
// 20;

// Question 4B
function BST_min(bst){
    return is_null(bst)
    ? Infinity
    : is_null(head(tail(bst)))
    ? head(bst)
    : BST_min(head(tail(bst)));
}

// Question 4C
function BST_find(x, bst) {
    return is_null(bst)
    ? false
    : equal(x, head(bst))
    ? true
    : x <  head(bst)
    ? BST_find(x, head(tail(bst))) 
    : BST_find(x, list_ref((tail(bst)), 1));
    
}
// O(n)

// Question 4D
function BST_to_list(bst){
    const left_side = head(tail(bst));
    const right_side = list_ref(tail(bst), 1);
    const base = head(bst);
    return is_null(left_side) && is_null(right_side)
    ? pair(base, null)
    : is_null(left_side)
    ? pair(base, BST_to_list(right_side))
    : is_null(right_side)
    ? pair(BST_to_list(left_side), base)
    : append(BST_to_list(left_side), append(list(base), BST_to_list(right_side)));
    
}
// O(nlogn)

// Question 5A
function find_ranks(lst){
    function helper(lst, same){
        if (is_null(lst)){
            return lst;
        } else {
            const smaller = length(filter(x => x <= head(lst), same));
            return pair(smaller, helper(tail(lst), same));
        }
    }
    return helper(lst, lst);
}
// O(n^2)

// Question 5B
function get_num(lst, ranks) {
    return rank =>
    head(ranks) === rank
    ? head(lst)
    : get_num(tail(lst), tail(ranks))(rank);
}
function rank_sort(lst){
    const ranks = find_ranks(lst);
    return map(x => get_num(lst, ranks)(x), enum_list(1, length(lst)));
}
// O(n^2)

// Question 6A
function singles_to_english(d) {
    return list_ref(list("", "one", "two", "three",
    "four", "five", "six",
    "seven", "eight", "nine"), d);
}
function tens_to_english(t) {
    return list_ref(list("", "ten", "twenty", "thirty",
    "forty", "fifty", "sixty",
    "seventy", "eighty", "ninety"), t);
}
function ten_to_nineteen_to_english(s) {
    return list_ref(list("ten", "eleven", "twelve", "thirteen",
    "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen",
    "nineteen"), s);
}
function power_of_thousand(n) {
    return list_ref(list("", "thousand", "million", "billion",
    "trillion", "quadrillion",
    "quintillion"), n);
}
// for each triplet of hundred/ten/single
function triplet_to_english(h, t, s) {
    const he = h > 0 ? singles_to_english(h) + " hundred" : "";
    const te = t > 0 ? tens_to_english(t) : "";
    const se = s > 0 ? singles_to_english(s) : "";
    const tese = te === "" ? se
    : t === 1 ? ten_to_nineteen_to_english(s)
    : se === "" ? te : te + " " + se;
    return he === "" ? tese
    : tese === "" ? he
    : he + " " + tese;
}

function number_to_digits(n){
    return n / 10 < 0.1
    ? null
    : pair((n%10), number_to_digits(math_floor(n/10)));
}

// Question 6B
function triplets(digits){
    
    const current_length = length(digits);
    if (current_length === 0){
        return null;
    } else if (current_length === 2){
        return pair(list_ref(digits, 0), pair(list_ref(digits, 1), pair(0, null)));
    } else if (current_length === 1){
        return pair(list_ref(digits, 0), pair(0, pair(0, null)));
    } else {
        const my_triple = pair(list_ref(digits, 0), pair(list_ref(digits, 1), pair(list_ref(digits, 2), null)));
        return append(my_triple, triplets(tail(tail(tail(digits)))));
    }
    
}

// Question 6C
// function triplets_to_english(triplets){
    
// }
triplet_to_english(5,7,8);