def fn_add(a, b):
    return a + b


# below method has an extra space, no endline and an unused variable
def fn_sub(a, b):
        unused_var = 42
        return a - b   
    
# this is an example of an ignored ruff rule that fails, we should not get a warning for this
def fn_ignore(a, b, c):
    return a        # here b and c are unused which trigger ruff warning for ARG rule -> unused-argument
    
fn_add(1, 2)
fn_sub(5, 3)