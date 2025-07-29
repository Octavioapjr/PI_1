
function createNav(s_src, s_text) {
    const o_ul = document.getElementById('nav_itens');
    // Create a new list item
    const o_li = document.createElement('li');
    // Create the anchor element
    const o_a = document.createElement('a');
    o_a.href = s_src; // Set the href attribute
    o_a.textContent = s_text; // Set the text content
    // Append the anchor to the list item
    o_li.appendChild(o_a);
    // Append the list item to the unordered list
    o_ul.appendChild(o_li);
}

createNav('1_home.html', 'Inicio');
createNav('2_instrutora.html', 'Instrutora');
createNav('3_metodo.html', 'Método');
createNav('4_agendamentos.html', 'Agendamentos');
// createNav('5_blog.html', 'Blog');
createNav('6_youtube.html', 'YouTube');
createNav('7_contato_js.html', 'Contato');
createNav('8_depoimento.html', 'Depoimentos');