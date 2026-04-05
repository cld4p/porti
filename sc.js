const canvas = document.getElementById('canvas');
        const drawer = canvas.getContext('2d');
        const color = document.getElementById('colorPicker');
        const size = document.getElementById('brushSize')

        
        let painting = false;

        
        drawer.lineCap = 'round';
        //drawer.strokeStyle = colorPicker.value;

        function start(v) {
            painting = true;
            draw(v);
        }

        function finish() {
            painting = false;
            drawer.beginPath();
        }

        function draw(v) {
            if (!painting) return;
            drawer.lineWidth = size.value;

            const rect = canvas.getBoundingClientRect();

            const x = v.clientX - rect.left;
            const y = v.clientY - rect.top;

            drawer.strokeStyle = color.value;
            
            //console.log(x, y)

            drawer.lineTo(x, y);
            drawer.stroke();
            drawer.beginPath();
            drawer.moveTo(x, y);
        }

        function clearCanvas() {
            drawer.clearRect(0, 0, canvas.width, canvas.height);
        }

  
        canvas.addEventListener('mousedown', start);
        canvas.addEventListener('mouseup', finish);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseleave', finish);


const topBtn = document.getElementById("topBtn");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 500) {
    topBtn.classList.remove("hidden");
  } else {
    topBtn.classList.add("hidden");
  }
};

topBtn.onclick = function() {
  window.scrollTo({
    top: 0
  });
};

const darkMode = document.querySelectorAll('input[name="mode"]');

const borderDivs = document.querySelectorAll('div');

darkMode.forEach(d => {
  d.addEventListener('change', (e) => {

    borderDivs.forEach(div => {
        const style = window.getComputedStyle(div);
        const borderColor = style.borderColor;

        if(borderColor=='rgb(0, 0, 0)') {
          div.style.borderColor = 'white';
        } else {
          div.style.borderColor = 'black';
        }
      });

    if (e.target.value === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });
});