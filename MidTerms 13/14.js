function zip(f, xs, ys){
    return is_null(xs)
    ? xs
    : pair(f(head(xs), head(ys)), zip(f, tail(xs), tail(ys)));
}
const make_queen = (x, y) => pair(x, y);
const row = q => head(q);
const column = q => tail(q);
const q = make_queen(3,4);

function attack_each_other_diagonally(q1, q2){
    const diff = (x, y) => x - y;
    const sum = (x, y) => x + y;
    if (diff(row(q1), column(q1)) === diff(row(q2), column(q2))){
        return true;
    } else if (sum(row(q1), column(q1)) === sum(row(q2), column(q2))){
        return true;
    } else {
        return false;
    }
}

function attack_any_diagonally (q1 , qs ) {
    const my_list = accumulate((x, y) => attack_each_other_diagonally(q1, x) ? pair(x, y) : y, null, qs);
    return is_null(my_list)
    ? false
    : true;

}
function attack_diagonally(qs){
    return is_null(qs)
    ? false
    : attack_any_diagonally(head(qs), tail(qs))
    ? true
    : attack_diagonally(tail(qs));
}

zip ( (x , y) => x * y ,
list (1 ,2 ,3) ,
list (10 ,20 ,30));