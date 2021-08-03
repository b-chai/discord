export const login = user => (
    $.ajax({
        method: "POST",
        url: "/sessions",
        data: {user}
    })
    )
    
export const logout = () => (
    $.ajax({
        method: "DELETE",
        url: "/sessions"
    })
)

export const signup = user => (
    $.ajax({
        method: "POST",
        url: "/users",
        data: {user}
    })
)