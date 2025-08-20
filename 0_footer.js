

function createIcon(o_div, s_icon, s_src='') {
    const o_a = document.createElement('a');
    o_a.href = s_src;
    o_a.target = '_blank';
    const o_i = document.createElement('i');
    o_i.className = s_icon;
    o_a.appendChild(o_i);
    o_div.appendChild(o_a);
}

// get footer
const o_footer = document.querySelector('footer');
o_footer.className = 'mFooter';

// create div - social icons
let o_div = document.createElement('div');
o_div.className = 'social-icons' 

// create icons
createIcon(o_div, 'fab fa-facebook-f')
createIcon(o_div, 'fab fa-instagram', 'https://www.instagram.com/sandra.ladwig/')
createIcon(o_div, 'fab fa-youtube', 'https://www.youtube.com/@CanalSamadhi')
createIcon(o_div, 'fab fa-whatsapp')

o_footer.appendChild(o_div);

// create div - copyright
o_div = document.createElement('div');
o_div.className = 'copyright';
const o_p = document.createElement('p');
o_p.innerHTML = '&copy; 2025 Sandra Ladwig. Todos os direitos reservados.';
o_div.appendChild(o_p);
o_footer.appendChild(o_div);
