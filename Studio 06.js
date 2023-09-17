// Question 1
function my_map(f, xs){
    return accumulate((x, current) => pair(f(x), current), null, xs);
}
display_list(my_map(x => x + 1, list(1, 2, 3)));


// Question 2
function remove_duplicates(lst){  
    function helper(lst, new_list){
        if (is_null(lst)){
            return reverse(new_list);
        } else {
            const checker = filter(x => equal(x, head(lst)), new_list);
            if (is_null(checker)){
                return helper(tail(lst), pair(head(lst), new_list));
            } else {
                return helper(tail(lst), new_list);
            }
        }
    }
    return helper(lst, null);
}
display_list(remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2)));
display_list(remove_duplicates(list("a", "x", "b", "c", "c", "b", "d")));


// Question 3