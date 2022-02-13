window.addEventListener('DOMContentLoaded', () => {
    class todo {
        constructor(mom) {
            this.mom = mom
        }
    }
    class UI {
        addlist(tom) {
            const lister = document.getElementById('book-list');

            const row = document.createElement('tr');

            row.innerHTML = `
    <td>${tom.mom}</td>
    <td id="X">X</td>
    `;
            lister.appendChild(row);
            console.log(row.length);
        }
        clearfield() {
            const mom = document.getElementById('title').value = '';
        }
        showalert(message, className) {
            const container = document.querySelector('.container');

            const box = document.querySelector('.all');

            const div = document.createElement('div');

            div.className = `${className}`;

            div.appendChild(document.createTextNode(message));

            container.insertBefore(div, box);

            setTimeout(() => {
                document.querySelector('.success').remove();
                // document.querySelector('.error').remove();
            }, 1500);
            setTimeout(() => {
                document.querySelector('.error').remove();
                // document.querySelector('.error').remove();
            }, 1500);
        }
        delete(target) {
            if (target.id === 'X') {
                target.parentElement.remove();
            }
        }
    }
    document.getElementById('btn').addEventListener('click', (e) => {
        const mom = document.getElementById('title').value;
        console.log(mom)

        const tom = new todo(mom);
        const ui = new UI();

        if (mom == '') {
            ui.showalert('Input an activity', 'error');
        } else {
            ui.addlist(tom);
            ui.clearfield();
            ui.showalert('List added', 'success');
        }
        e.preventDefault();
    })
    document.getElementById('book-list').addEventListener('click', (e) => {
        const ui = new UI();

        ui.delete(e.target);

        ui.showalert('list deleted', 'success');

        e.preventDefault();
    })
})

// function Xcolor() {
//     const random = '#' + Math.floor(Math.random() * 16777215).toString(16);
//     const color = document.getElementById('X');

//     color.style.color = `${random}`;
//     return random;
// }
// console.log(Xcolor());