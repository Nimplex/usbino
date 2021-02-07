// https://www.w3schools.com/howto/howto_js_sort_table.asp
function sort(n) {
    let table, rows, switching, i, x, y, should_switch, dir, switch_count = 0
    
    table = document.getElementById("shorts")
    switching = true
    dir = "asc"

    while (switching) {
        switching = false
        rows = table.rows
        
        for (i = 1; i < (rows.length - 1); i++) {
            should_switch = false
            
            x = rows[i].getElementsByTagName("TD")[n]
            y = rows[i + 1].getElementsByTagName("TD")[n]
            
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    should_switch = true
                    break
                }
            } else if (dir == "desc") {    
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    should_switch = true
                    break
                }
            }
        }
    
        if (should_switch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
            switching = true
            switch_count ++
        } else {
            if (switch_count == 0 && dir == "asc") {
                dir = "desc"
                switching = true
            }
        }
    }
}